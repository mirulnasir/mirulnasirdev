import { CalculatedFieldPlugin, Operation, OperationFunction } from "../type";

export const loggingPlugin: CalculatedFieldPlugin = {
    name: "Logging",
    priority: 2,
    metadata: {
        compatibleCoreVersions: ["1.0.0"],
        version: "1.0.0"
    },
    extendOperations: (currentOperations: Record<Operation, OperationFunction>) => {
        return Object.keys(currentOperations).reduce((ops, key) => {
            ops[key] = (values: number[]) => {
                console.log(`Operation ${key} called with values:`, values);
                return currentOperations[key](values);
            };
            return ops;
        }, {} as Record<Operation, OperationFunction>);
    },
};