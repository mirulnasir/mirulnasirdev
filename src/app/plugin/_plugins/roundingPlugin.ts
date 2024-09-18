import { CalculatedFieldPlugin, Operation, OperationFunction } from "../type";

export const roundingPlugin: CalculatedFieldPlugin = {
    name: "Rounding",
    priority: 1,
    metadata: {
        compatibleCoreVersions: ["1.0.0"],
        version: "1.0.0",
    },
    extendOperations: (currentOperations: Record<Operation, OperationFunction>) => {
        return {
            ...currentOperations,
            add: (values: number[]) => {
                const result = currentOperations.add(values);
                return Math.round(result * 100) / 100;
            },
        };
    },
};