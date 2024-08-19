'use client'
import * as React from "react";
import Select from "react-select";
import Spreadsheet, { CellBase, DataEditorComponent, DataViewerComponent, Matrix } from "react-spreadsheet";

type Value = string | undefined;
type Cell = CellBase<Value> & {
    value: Value;
};

const OPTIONS = [
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "caramel", label: "Caramel" },
];

export const SelectView: DataViewerComponent<Cell> = ({ cell }) => {
    const option = React.useMemo(
        () => cell && OPTIONS.find((option) => option.value === cell.value),
        [cell]
    );
    return <Select value={option} options={OPTIONS} isDisabled />;
};

export const SelectEdit: DataEditorComponent<Cell> = ({
    cell,
    onChange,
    exitEditMode,
}) => {
    const handleChange = React.useCallback(
        (selection) => {
            onChange({ ...cell, value: selection ? selection.value : null });
        },
        [cell, onChange]
    );
    const option = React.useMemo(
        () => cell && OPTIONS.find((option) => option.value === cell.value),
        [cell]
    );
    return (
        <Select
            value={option}
            onChange={handleChange}
            options={OPTIONS}
            autoFocus
            defaultMenuIsOpen
            onMenuClose={() => exitEditMode()}
        />
    );
};
export function createEmpty<T>(rows: number, columns: number): Matrix<T> {
    const matrix = Array(rows);
    for (let i = 0; i < rows; i++) {
        matrix[i] = Array(columns);
    }
    return matrix;
}
type StringCell = CellBase<string | undefined>;

const INITIAL_ROWS = 6;
const INITIAL_COLUMNS = 4;
const EMPTY_DATA = createEmpty<StringCell>(INITIAL_ROWS, INITIAL_COLUMNS);
export default function Page() {
    const [data, setData] = React.useState(EMPTY_DATA);
    return (
        <div className="">
            <Spreadsheet data={data} onChange={(data) => {
                console.log(data)
                setData(data)
            }} DataViewer={SelectView} DataEditor={SelectEdit} className="select-cell" onSelect={(selection) => {
                console.log({ selection })
            }} CornerIndicator={() => {
                return <div>Corner</div>
            }} />
        </div>

    );
}