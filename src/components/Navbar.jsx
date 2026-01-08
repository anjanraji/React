"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NavLink } from "react-router";
import { useState } from "react";
import { Button } from "./ui/button";
import { LogOutAlertDialog } from "./LogOutAlertDialog";

export function Navigation({
    logout,
    isAuthenticated
}) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <NavigationMenu className="max-w-none justify-end">
                <NavigationMenuList className="flex-wrap">
                    {isAuthenticated && (
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <NavLink to="/dashboard" className="transition-colors duration-300 sm:text-[16px] md:text-md">Dashboard</NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <NavLink to="/about-us" className="transition-colors duration-300 sm:text-[16px] md:text-md">About Us</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <NavLink to="/services" className="transition-colors duration-300 sm:text-[16px] md:text-md">Services</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <NavLink to="/blogs" className="transition-colors duration-300 sm:text-[16px] md:text-md">Blog</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu >
            <span className="border-l mt-1 border-dashed h-7 border-gray-600 mx-2" />
            {!isAuthenticated && (
                <div className="flex gap-1">
                    <Button asChild>
                        <NavLink to="/login">Login</NavLink>
                    </Button>
                    <Button variant="outline" asChild>
                        <NavLink to="/sign-up">Sign Up</NavLink>
                    </Button>
                </div>
            )}
            {isAuthenticated && (
                <Button
                    className="cursor-pointer ml-1"
                    onClick={() => setOpen(true)}
                >
                    Logout
                </Button>
            )}
            <LogOutAlertDialog
                logout={logout}
                open={open}
                setOpen={setOpen}
            />
        </>
    )
}