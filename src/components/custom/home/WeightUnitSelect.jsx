import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export function WeightUnitSelect(props) {

    const {placeholder, onChange} = props;

    return (
      <Select onOpenChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} className="w-16"/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="lbs">lbs</SelectItem>
            <SelectItem value="grams">g</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
}