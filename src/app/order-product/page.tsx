"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router = useRouter();
    const handleClick = ()=>{
        console.log("Placing order succesfully!");
        router.push("/about"); // this adds the url to browser url history stack
        //router.replace("/"); go two steps back on click of browser back
        // router.back();
        // router.forward();
    }
    return (<>
    <h1> Order Product</h1>
    <button onClick={handleClick}> Place Order</button>
    </>)
}