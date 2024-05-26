import { notFound } from "next/navigation";
import ErrorProduct from "../../ErrorProduct";
import NotFound from "./not-found";

export default function ReviewDetail({ params }: { params: { productId: number, reviewId: number } }) {
    if (params.productId > 1000) {
        return (
            <ErrorProduct params={params} />
        )
    }
    else if(params.reviewId > 1000){
        return <NotFound />
    }
    return (
        <h1>
            Product Review {params.reviewId} of product {params.productId}
        </h1>)
}