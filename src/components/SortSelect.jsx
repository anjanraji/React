import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SortSelect({
    filters,
    setFilters,
}) {
    const {
        sortBy
    } = filters

    const sortOptions = [
        { value: "date-desc", label: "Date Descending" },
        { value: "date-asc", label: "Date Ascending" },
        { value: "title-asc", label: "Title Ascending" },
        { value: "title-desc", label: "Title Descending" }
    ]

    return (
        <Select
            name="category"
            value={sortBy}
            onValueChange={
                (value) => (
                    setFilters(
                        prev => ({
                            ...prev,
                            sortBy: value
                        })
                    )
                )
            }>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>
                        Sort By
                    </SelectLabel>
                    {sortOptions?.map(option => (
                        <SelectItem
                            key={option.value}
                            value={option.value}
                            SelectItem>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}