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
import { HexColorInput, HexColorPicker } from "react-colorful";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Category(props) {

    const {data, onInputChange} = props;

    const [itemElems, setItemElems] = useState([]);
    const [deleted, setDeleted] = useState(false);

    const randomColor = () => {
      return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    }

    const [color, setColor] = useState(data ? data.color : randomColor());

    useEffect(() => {
    
      const updatedItemElems = data ? data.items.map((item, index) => (
        <Item data={item} key={index}/>
      )) : [<Item/>];
      setItemElems(updatedItemElems);
    }, []);

    const addItemElem = () => {
      setItemElems(o => [...o, <Item/>]);
    }

    const deleteSelf = () => {
      setDeleted(true);
    }

    return (
        <>
          {deleted ? "" : (
            <Card className="m-5" id="itemCategoryElem">
            <CardHeader>
              <CardTitle className="flex flex-row">

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="aspect-square" style={{backgroundColor: color}}/>
                  </PopoverTrigger>
                  <PopoverContent className="w-fit flex flex-col gap-2">
                    <HexColorPicker color={color} onChange={setColor}/>
                    <Card className="w-fit flex flex-row p-1">
                      <span className="p-1">#</span>
                      <HexColorInput color={color} onChange={setColor} className="w-20 p-1"/>
                    </Card>
                  </PopoverContent>
                </Popover>

                <Input defaultValue={data ? data.name : ""} className="text-2xl border-none w-[30rem]" placeholder="Category name" id="itemCategoryName" onChange={onInputChange} maxLength={32}/>

                <div id="itemCategoryColor" className="hidden">
                  {color}
                </div>

              </CardTitle>
            </CardHeader>
            <CardContent>
            <Table className="w-fit">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Weight</TableHead>
                  <TableHead>Amount</TableHead>
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
              <Button className="mt-3 flex gap-2" onClick={deleteSelf} variant="destructive">
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