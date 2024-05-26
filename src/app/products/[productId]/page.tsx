import { notFound } from "next/navigation"
import ErrorProduct from "./ErrorProduct";

export default function ProductDetails({ params }: { params: { productId: number } }) {
    if (params.productId <= 1000) {
        return (
            <h1>Product Details for product {params.productId}</h1>
        )
    }
    else if (params.productId > 1000) {
        return (
            <ErrorProduct params={params}/>
        )
    }
}