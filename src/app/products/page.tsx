import ProductsHome from "./ProductHomePage"
import { Metadata } from "next"

export const metadata:Metadata ={
    // title: {
    //     absolute:"Product List Page"
    // }
    title: "Products page"
}

export default function ProductsMain() {
    return (<ProductsHome />)
}