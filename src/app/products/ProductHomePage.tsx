import Link from "next/link"

type Props = {
    params:
    {
        productId: number;
    }
};
export default function ProductsHome() {
    return (<>
        <Link href="/"> Home</Link>
        <h1>Products List HomePage</h1> 
        <h2> <Link href="/products/1"> Product 1</Link></h2>
        <h2> <Link href="/products/2"> Product 2</Link></h2>
        <h2> <Link href="/products/3"> Product 3</Link></h2>
    </>)
}