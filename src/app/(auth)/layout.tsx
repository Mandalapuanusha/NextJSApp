import React from "react";
import Link from "next/link";

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
  return (
        <>
            <div>
                {navLinks.map((navlink) => {
                    return(<Link href={navlink.href} key={navlink.name}> {navlink.name}</Link>)
                })}
                {children}
            </div>
        </>
    )
}