import { ExternalLink, Link, Search, Trash2 } from "lucide-react";
import { Input } from "../../ui/input";
import { TableCell, TableRow } from "../../ui/table";
import { Button } from "../../ui/button";
import { useEffect, useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PopoverClose } from "@radix-ui/react-popover";
import validator from "validator";
import { Separator } from "@/components/ui/separator";

export default function Item(props) {

    const {data} = props;

    const componentRef = useRef(null);

    const [weightUnit, setWeightUnit] = useState(data ? data.weight.unit : "lbs");
    const [url, setUrl] = useState(data ? data.url : "");

    const [deleted, setDeleted] = useState(false);

    const deleteSelf = () => {
        setDeleted(true);
    }

    const autofill = (item) => {

        const {name, price, weight, url} = item;

        componentRef.current.querySelector("#itemName").value = name;
        componentRef.current.querySelector("#itemPrice").value = price;
        componentRef.current.querySelector("#itemWeightNumber").value = weight.number;
        componentRef.current.querySelector("#itemWeightUnit").value = weight.unit;

        setWeightUnit(weight.unit);
        setUrl(url);

    }

    const openUrlIfValid = () => {
        if (validator.isURL(url)) {
            if (!(url.startsWith("https://") || url.startsWith("http://"))) {
                window.open(`https://${url}`);
            }
            else {
                window.open(url);
            }
        }
    }

    useEffect(() => {
    }, [])

    return (

        <>
            {deleted ? "" : (
                <TableRow id="itemElem" className="" ref={componentRef}>
                    <TableCell>
                        <div className="flex flex-row gap-1">
                            <Input defaultValue={data ? data.name : ""} className="w-64" placeholder="Name" id="itemName" maxLength={32}/>
                        </div>
                    </TableCell>
                    <TableCell>
                        <Input defaultValue={data ? data.description : ""} className="w-[30rem]" placeholder="Description" id="itemDescription" maxLength={64}/>
                    </TableCell>
                    <TableCell>
                        <div className="flex flex-row">
                            <span className="text-lg mt-1 mr-1">$</span>
                            <Input defaultValue={data ? data.price : 0.00} className="w-20" type="number" id="itemPrice" max={1000000}/>
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="flex flex-row gap-1">
                            <Input defaultValue={data ? data.weight.number : 0} className="w-20" type="number" id="itemWeightNumber" max={10000} />
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Input id="itemWeightUnit" className="w-16 text-left hover:cursor-pointer" defaultValue={data ? data.weight.unit : ""} value={weightUnit}/>
                                </PopoverTrigger>
                                <PopoverContent className="w-20 p-0">
                                    <PopoverClose>
                                        <Button variant="ghost" className="w-full" onClick={() => {setWeightUnit("oz")}}>
                                            oz
                                        </Button>
                                        <Button variant="ghost" className="w-full" onClick={() => {setWeightUnit("lbs")}}>
                                            lbs
                                        </Button>
                                        <Button variant="ghost" className="w-full" onClick={() => {setWeightUnit("g")}}>
                                            g
                                        </Button>
                                        <Button variant="ghost" className="w-full" onClick={() => {setWeightUnit("kg")}}>
                                            kg
                                        </Button>
                                    </PopoverClose>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </TableCell>
                    <TableCell>
                        <Input defaultValue={data ? data.amount : 1} type="number" className="w-20" id="itemAmount" max={10000}/>
                    </TableCell>

                    <div id="itemUrl" className="hidden">
                        {url}
                    </div>

                    <TableCell>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline">
                                    <Link/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-96 flex flex-row gap-1">
                                <Input defaultValue={url} onChange={(event) => {setUrl(event.target.value)}}/>
                                <Button variant="outline" onClick={openUrlIfValid} disabled={url == ""}>
                                    <ExternalLink/>
                                </Button>
                            </PopoverContent>
                        </Popover>
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