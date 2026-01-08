import { Button } from "@/components/ui/button"
import { LayoutList, LayoutGrid } from "lucide-react"
import {
    ButtonGroup,
    ButtonGroupSeparator,
} from "@/components/ui/button-group"

export function ButtonGroupView({
    dashboardState,
    setDashboardState
}) {
    const { listView } = dashboardState
    return (
        <ButtonGroup>
            <Button
                className="cursor-pointer"
                variant={listView ? "default" : "secondary"}
                size="sm"
                onClick={
                    () => setDashboardState(prev => ({
                        ...prev,
                        listView: true
                    }))
                }
            >
                <LayoutList
                    size={20}
                    strokeWidth={2}
                />
            </Button>
            <ButtonGroupSeparator />
            <Button
                className="cursor-pointer"
                variant={listView ? "secondary" : "default"}
                size="sm"
                onClick={
                    () => setDashboardState(prev => ({
                        ...prev,
                        listView: false
                    }))
                }
            >
                <LayoutGrid
                    size={20}
                    strokeWidth={2}
                />
            </Button>
        </ButtonGroup>
    )
}
