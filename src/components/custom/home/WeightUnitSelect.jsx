import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react";

export function WeightUnitSelect(props) {

    const {placeholder} = props;

    const [unit, setUnit] = useState("lbs");

    return (
      <Select onValueChange={setUnit}>
       <SelectTrigger className="w-16">
         <SelectValue placeholder={placeholder}/>
         <div className="hidden" id="itemWeightUnit">
            {unit}
          </div>
       </SelectTrigger>
       <SelectContent>
         <SelectGroup>
           <SelectItem value="oz">oz</SelectItem>
           <SelectItem value="lbs">lbs</SelectItem>
           <SelectItem value="g">g</SelectItem>
           <SelectItem value="kg">kg</SelectItem>
         </SelectGroup>
       </SelectContent>
     </Select>
    )
}