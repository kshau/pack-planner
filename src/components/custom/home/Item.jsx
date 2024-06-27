import { Trash2 } from "lucide-react";
import { Input } from "../../ui/input";
import { TableCell, TableRow } from "../../ui/table";
import { WeightUnitSelect } from "./WeightUnitSelect";
import { Button } from "../../ui/button";
import { useState } from "react";

export default function Item(props) {

    const {data} = props;

    const [deleted, setDeleted] = useState(false);

    const deleteSelf = () => {
        setDeleted(true);
    }

    return (

        <>
            {deleted ? "" : (
                <TableRow id="itemElem" className="">
                    <TableCell>
                        <Input defaultValue={data ? data.name : ""} className="w-72" placeholder="Name" id="itemName" maxLength={20}/>
                    </TableCell>
                    <TableCell>
                        <Input defaultValue={data ? data.description : ""} className="w-[30rem]" placeholder="Description" id="itemDescription" maxLength={32}/>
                    </TableCell>
                    <TableCell>
                        <div className="flex flex-row">
                            <span className="text-lg mt-1 mr-1">$</span>
                            <Input defaultValue={data ? data.price : 0.00} className="w-20" type="number" id="itemPrice" max={10000}/>
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="flex flex-row gap-1">
                            <Input defaultValue={data ? data.weight.number : 0} className="w-20" type="number" id="itemWeightNumber" max={10000} />
                            <WeightUnitSelect placeholder={data ? data.weight.unit : "lbs"} />
                        </div>
                    </TableCell>
                    <TableCell>
                        <Input defaultValue={data ? data.amount : 1} type="number" className="w-20" id="itemAmount" max={10000}/>
                    </TableCell>
                    <TableCell>
                        <Button variant="destructive" onClick={deleteSelf}>
                        <Trash2/>
                    </Button>
                    </TableCell>
                </TableRow>
            )}
            
        </>
        

    )
}