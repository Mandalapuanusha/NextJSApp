export default function ProductDetails({ params }: { params: { productId: string } }) {
    return (<h1>Product Details for product {params.productId}</h1>)
}