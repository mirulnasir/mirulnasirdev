export type Operation = 'add' | 'subtract' | string
export type OperationFunction = (value: number[]) => number
export type PluginPriority = number
export interface PluginMetadata {
    version: string
    author?: string
    description?: string
    compatibleCoreVersions: string[];
    dependencies?: Record<string, string>
}
export interface PluginLifecycle {
    onInstall?: () => void | Promise<void>;
    onUninstall?: () => void | Promise<void>;
    onEnable?: () => void | Promise<void>;
    onDisable?: () => void | Promise<void>;
}
export interface CalculatedFieldPlugin {
    name: string;
    priority: PluginPriority
    metadata: PluginMetadata
    lifecycle?: PluginLifecycle
    extendOperations: (currentOperations: Record<Operation, OperationFunction>) => Record<Operation, OperationFunction>
    validateOperation?: (operation: Operation, result: number) => boolean
    handleError?: (error: Error, operation: Operation, values: number[]) => number | undefined
}