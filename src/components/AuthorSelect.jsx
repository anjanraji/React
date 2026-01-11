import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function AuthorSelect({
    filters,
    setFilters
}) {
    const {
        allAuthor,
        currentAuthor
    } = filters

    return (
        <Select
            name="author"
            value={currentAuthor}
            onValueChange={
                (value) => (
                    setFilters(
                        prev => ({
                            ...prev,
                            currentAuthor: value
                        })
                    )
                )
            }>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="By Author" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>
                        By Author
                    </SelectLabel>
                    {allAuthor?.map((item) => (
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