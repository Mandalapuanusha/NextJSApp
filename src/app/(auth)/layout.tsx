"use client";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
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

export default function AuthLayout({children}:{children: React.ReactNode}) {
  const pathname = usePathname();
  return (
        <>
            <div>
                {navLinks.map((navlink) => {
                    const isActive = pathname.startsWith(navlink.href);
                    return(<Link href={navlink.href} key={navlink.name} className={ isActive? "font-bold mr-4": "text-blue-500 mr-4"}> {navlink.name}</Link>)
                })}
                {children}
            </div>
        </>
    )
}