"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
    {
        name: "Register",
        href: "/register"
    },
    {
        name: "Login",
        href: "/login"
    },
    {
        name: "Forgot Password",
        href: "/forgot-password"
    },
];

/*Here we see the state being shared across the login, forgot-password & register pages.
    But what if the state needs to be modified based on the url path. So templates were introduced.
    Templates don't remount shared components resulting better performance.
    example when using sideEffects using useEffect hook, state is not preserved and effects are re-synchronised, use template.tsx file as replacement for layout.tsx
    Templates are similar to Layouts in that they wrap each layour/page. But with templates,
    new instance of component is created, state is not preserved, DOM elements are recreated, effects are re-synchronized.
    rename the file to Template.tsx and try the o/p.
    U can have both layout.tsx and template.tsx where the layout.tsx is rendered first(template components will be rendered inside the layout.tsx)
    layout.tsx --> template.tsx--->page.tsx
    Always rely on layout.tsx for shared UI, use templates.tsx only when need arises. */ 

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    let [Input, setInput] = useState(""); 
    
    return (
        <>
            <input type="text" value={Input} onChange={(e) => { setInput(e.target.value) }}></input>
            <div>
                {navLinks.map((navlink) => {
                    const isActive = pathname.startsWith(navlink.href);
                    return (<Link href={navlink.href} key={navlink.name} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}> {navlink.name}</Link>)
                })}
                {children}
            </div>
        </>
    )
}