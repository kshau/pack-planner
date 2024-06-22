import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Item from "./Item";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { CirclePlus, Trash2 } from "lucide-react";

export default function Category(props) {

    const {data, onInputChange} = props;

    const [itemElems, setItemElems] = useState([]);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
      //@ts-ignore
      const updatedItemElems = (data && data.items) ? data.items.map((item, index) => (
        //@ts-ignore
        <Item key={index} data={item}/>
      )) : [<Item/>];
      setItemElems(updatedItemElems);
    }, []);

    const addItemElem = () => {
      //@ts-ignore
      setItemElems(o => [...o, <Item/>]);
    }

    const deleteSelf = () => {
      setDeleted(true);
    }

    return (
        <>
          {deleted ? "" : (
            <Card className="m-5" id="categoryElem">
            <CardHeader>
              <CardTitle>
                <Input defaultValue={data ? data.name : ""} className="text-2xl border-none" placeholder="Category name" id="categoryName" onChange={onInputChange}/>
              </CardTitle>
            </CardHeader>
            <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1">Name</TableHead>
                  <TableHead className="w-96">Description</TableHead>
                  <TableHead className="w-36">Weight</TableHead>
                  <TableHead className="w-16">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {itemElems}
              </TableBody>
            </Table>
            <div className="flex flex-row gap-1">
              <Button className="mt-3 flex gap-2" onClick={addItemElem}>
                    <CirclePlus />
                    <span>
                      Add item
                    </span>
                </Button>
                <Button className="mt-3 flex gap-2" onClick={deleteSelf} variant="outline">
                    <Trash2/>
                    <span>
                      Delete category
                    </span>
                    
              </Button>
            </div>
            </CardContent>
            </Card>
          )}
        </>
    )

}