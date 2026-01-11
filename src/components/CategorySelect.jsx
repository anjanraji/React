import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function CategorySelect({
    filters,
    setFilters,
}) {
    const {
        allCategories,
        currentCategory,
    } = filters

    return (
        <Select
            name="category"
            value={currentCategory}
            onValueChange={
                (value) => (
                    setFilters(
                        prev => ({
                            ...prev,
                            currentCategory: value
                        })
                    )
                )
            }>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="By Category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>
                        By Category
                    </SelectLabel>
                    {allCategories?.map((item) => (
                        <SelectItem
                            value={item}
                            key={item}
                        >
                            {item}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}