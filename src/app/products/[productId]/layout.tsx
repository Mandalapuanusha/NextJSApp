import React from "react";
export const metadata ={
    title: 'Product Detail Page'
}
export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (<>
        {children}
        <h1 style={{ backgroundColor: "lavender", padding: "1rem", }}>Featured Products</h1>
    </>
    )
}