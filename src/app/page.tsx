import Link from "next/link";

export default function Home() {
    return (
        <>  <h1>Welcome home!</h1>
            <Link href="/about"> About</Link>
            <Link href="/blog"> Blog</Link>
            <Link href="/products"> Products</Link>
            <Link href="/docs"> Docs</Link>
            <Link href="/register"> Register</Link>
        </>
    )
}