import { Trash2 } from "lucide-react";
import { Input } from "../../ui/input";
import { TableCell, TableRow } from "../../ui/table";
import { WeightUnitSelect } from "./WeightUnitSelect";
import { Button } from "../../ui/button";
import { useState } from "react";

export default function Item(props) {

    const {data, onInputChange} = props;

    const [deleted, setDeleted] = useState(false);

    const deleteSelf = () => {
        setDeleted(true);
    }

    return (

        <>
            {deleted ? "" : (
                <TableRow id="itemElem">
                <TableCell>
                <Input defaultValue={data ? data.name : ""} className="w-40" placeholder="Name" id="itemName" />
                </TableCell>
                <TableCell>
                <Input defaultValue={data ? data.description : ""} placeholder="Description" id="itemDescription" />
                </TableCell>
                <TableCell className="flex flex-row">
                <Input defaultValue={data ? data.weight.number : 0} className="w-16" type="number" id="itemWeightNumber" />
                <WeightUnitSelect placeholder={data ? data.weight.unit : "lbs"} id="itemWeightUnit" />
                </TableCell>
                <TableCell>
                <Input defaultValue={data ? data.amount : 1} type="number" className="w-16" id="itemAmount" />
                </TableCell>
                <TableCell>
                <Button variant="outline" onClick={deleteSelf}>
                    <Trash2/>
                </Button>
                </TableCell>
                </TableRow>
            )}
            
        </>
        

    )
}