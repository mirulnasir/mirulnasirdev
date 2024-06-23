'use client'
import { Button } from "@/components/ui/button";
import Spreadsheet from "react-spreadsheet";
import { ReactGrid, Column, Row } from "@silevis/reactgrid";
import React from "react";
import "@silevis/reactgrid/styles.css";
interface Person {
    name: string;
    surname: string;
}

const getPeople = (): Person[] => [
    { name: "Thomas", surname: "Goldman" },
    { name: "Susie", surname: "Quattro" },
    { name: "", surname: "" }
];

const getColumns = (): Column[] => [
    { columnId: "name", width: 150 },
    { columnId: "surname", width: 150 }
];

const headerRow: Row = {
    rowId: "header",
    cells: [
        { type: "header", text: "Name" },
        { type: "header", text: "Surname" }
    ]
};
const getRows = (people: Person[]): Row[] => [
    headerRow,
    ...people.map<Row>((person, idx) => ({
        rowId: idx,
        cells: [
            { type: "text", text: person.name },
            { type: "text", text: person.surname }
        ]
    }))
];
export default function SpreadsheetPage() {
    const data = [
        [{ value: "Vanilla" }, {
            value: () => {
                return (
                    <Button  >
                        add to queue
                    </Button>
                )
            }
        }],
        [{ value: "Strawberry" }, {
            value: () => {
                return (
                    <Button  >
                        add to queue
                    </Button>
                )
            }
        }],
    ];
    const [people] = React.useState<Person[]>(getPeople());

    const rows = getRows(people);
    const columns = getColumns();


    return (
        <div className="container p-12 mx-auto">
            <h1>Spreadsheet</h1>
            <Spreadsheet data={data} />
            <ReactGrid rows={rows} columns={columns} />
        </div>
    )
}