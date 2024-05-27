import { notFound } from "next/navigation";
import ErrorProduct from "../../ErrorProduct";
import NotFound from "./not-found";

export const metadata ={
    title: "Review"
}
 function getrandomId(count: number){
    return Math.floor(Math.random()*count);
 }
 let id = getrandomId(2);
 if(id === 1){
    throw new Error('Error occoured!!');
 }

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