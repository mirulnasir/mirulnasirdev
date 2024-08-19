import { DataEditorComponent,  } from "react-spreadsheet";

// export type CellBase<Value = any> = {
//     /** Whether the cell should not be editable */
//     readOnly?: boolean;
//     /** Class to be given for the cell element */
//     className?: string;
//     /** The value of the cell */
//     value: Value;
//     /** Custom component to render when the cell is edited, if not defined would default to the component defined for the Spreadsheet */
//     DataEditor?: DataEditorComponent<CellBase<Value>>;
//     /** Custom component to render when the cell is viewed, if not defined would default to the component defined for the Spreadsheet */
//     DataViewer?: DataViewerComponent<CellBase<Value>>;
//   };
// /** The spreadsheet's write mode */
// export type Mode = "view" | "edit";
// export type Point = {
//     /** The cell's column */
//     column: number;
//     /** The cell's row */
//     row: number;
//   };
// /** Type of the Spreadsheet Cell component */
// export type CellComponent<Cell extends CellBase = CellBase> =
//   React.ComponentType<CellComponentProps<Cell>>;

//   export type CellComponentProps<Cell extends CellBase = CellBase> = {
//     /** The row of the cell */
//     row: number;
//     /** The column of the cell */
//     column: number;
//     /** The DataViewer component to be used by the cell */
//     DataViewer: DataViewerComponent<Cell>;
//     /** Whether the cell is selected */
//     selected: boolean;
//     /** Whether the cell is active */
//     active: boolean;
//     /** Whether the cell is copied */
//     copied: boolean;
//     /** Whether the user is dragging */
//     dragging: boolean;
//     /** The mode of the cell */
//     mode: Mode;
//     /** The data of the cell */
//     data: Cell | undefined;
//     /** The evaluated data of the cell */
//     evaluatedData: Cell | undefined;
//     /** Select the cell at the given point */
//     select: (point: Point) => void;
//     /** Activate the cell at the given point */
//     activate: (point: Point) => void;
//     /** Set the dimensions of the cell at the given point with the given dimensions */
//     setCellDimensions: (point: Point, dimensions: Dimensions) => void;
//     /** Set data of the cell */
//     setCellData: (cell: Cell) => void;
//   };

// /** Dimensions of an element */
// export type Dimensions = {
//     /** The element's width in pixels */
//     width: number;
//     /** The element's height in pixels */
//     height: number;
//     /** The distance of the element from it's container top border in pixels */
//     top: number;
//     /** The distance of the element from it's container left border in pixels */
//     left: number;
//   };
  
// type DataComponentProps<Cell extends CellBase> = {
//   /** The rendered cell by the component */
//   cell: Cell | undefined;
// } & Point;

//   /** Type of the Spreadsheet DataViewer component props */
// export type DataViewerProps<Cell extends CellBase = CellBase> =
// DataComponentProps<Cell> & {
//   /** Set data of the cell */
//   setCellData: (cell: Cell) => void;
//   evaluatedCell: Cell | undefined;
// };

// /** Type of the Spreadsheet DataViewer component */
// export type DataViewerComponent<Cell extends CellBase = CellBase> =
// React.ComponentType<DataViewerProps<Cell>>;