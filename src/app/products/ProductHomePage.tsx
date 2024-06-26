import Link from "next/link"

type Props = {
    params:
    {
        productId: number;
    }
};
export default function ProductsHome() {
    const productId =100;

    return (<>
        <Link href="/"> Home</Link>
        <h1>Products List HomePage</h1> 
        <h2> <Link href={`/products/${productId}`}> Product {productId}</Link></h2>
        <h2> <Link href="/products/1"> Product 1</Link></h2>
        <h2> <Link href="/products/2" replace> Product 2</Link></h2>
        {/* The replace prop will replace the current history State instead of adding a new URL to the stack. */}
        <h2> <Link href="/products/3"> Product 3</Link></h2>
    </>)
}