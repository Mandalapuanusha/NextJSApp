import React from "react";

export default function ErrorProduct({params}:{params: {productId: number}}) {
    return (
        <>
            <h2>Page Not Found for ProductId {params.productId}</h2>
            <p>resourse not available</p>
        </>
    )
}