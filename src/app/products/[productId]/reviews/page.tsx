import ErrorProduct from "../ErrorProduct";

export const metadata ={
    title: "Product Reviews Page"
}
export default function ProductReviews({ params }: { params: { productId: number } }) {
    if (params.productId > 1000) {
        return (
            <ErrorProduct params={params} />
        )
    }
    return (<>
        <h1>Product Reviews for {params.productId}</h1>
    </>
    )
}