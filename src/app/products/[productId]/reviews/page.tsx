export default function ProductReviews({ params }: { params: { productId: string } }) {
    return (<h1>Product Reviews for {params.productId}</h1>)
}