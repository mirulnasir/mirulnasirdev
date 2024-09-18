'use client'
import { useCallback, useMemo, useRef } from "react"
import { CalculatedFieldPlugin, Operation, OperationFunction } from "./type"
import semver from 'semver'

const CORE_VERSION = "1.0.0"

type CalculatorFieldProp = {
    plugins: CalculatedFieldPlugin[]
}
const useCalculatedField = ({ plugins }: CalculatorFieldProp) => {
    const pluginsRef = useRef(plugins)

    const validatedPlugins = useMemo(() => {
        return pluginsRef.current.filter(plugin => {
            const isCompatible = plugin.metadata.compatibleCoreVersions.some(version => semver.satisfies(CORE_VERSION, version))
            if (!isCompatible) {
                console.warn(`Plugin '${plugin.name}' is not compatible with core version ${CORE_VERSION}`);
            }
            return isCompatible;
        }).sort((a, b) => b.priority - a.priority)
    }, [])

    const baseOperations: Record<Operation, OperationFunction> = {
        add: (values: number[]) => values.reduce((sum, value) => sum + value, 0),
        subtract: (values: number[]) => values.reduce((diff, value, index) => index === 0 ? value : diff - value)
    }

    const operations = useMemo(() => {
        return validatedPlugins.reduce((ops, plugin) => {
            const newOps = plugin.extendOperations(ops)
            Object.keys(newOps).forEach((key) => {
                if (key in ops && ops[key] !== newOps[key]) {
                    console.warn(`Plugin '${plugin.name}' is overriding existing operation '${key}'.`);
                }
            });
            return { ...ops, ...newOps }
        }, baseOperations)
    }, [validatedPlugins])

    const executeOperation = useCallback((operation: Operation, values: number[]): number => {
        if (operation in operations) {
            try {
                const result = operations[operation](values)

                const isValid = validatedPlugins.every(plugin =>
                    !plugin.validateOperation || plugin.validateOperation(operation, result)
                )
                if (!isValid) {
                    throw new Error(`Operation '${operation}' result validation failed`);
                }
                return result
            } catch (error) {
                for (const plugin of validatedPlugins) {
                    if (plugin.handleError) {
                        const handledResult = plugin.handleError(error as Error, operation, values)
                        if (handledResult !== undefined) {
                            return handledResult
                        }
                    }
                }
                throw error
            }
        }
        throw new Error(`Operation '${operation}' not supported`);

    }, [operations, validatedPlugins])

    const calculatedFunctions = useMemo(() => {
        const funcs: Record<string, (...values: number[]) => number> = {};
        Object.keys(operations).forEach((op) => {
            funcs[op] = (...values: number[]) => executeOperation(op as Operation, values);
        });
        return funcs;
    }, [operations, executeOperation])

    return calculatedFunctions
}
export { useCalculatedField }