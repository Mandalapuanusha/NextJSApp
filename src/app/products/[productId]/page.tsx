import ErrorProduct from "./ErrorProduct";
import { Metadata } from "next";

type Props = {
    params:
    {
        productId: number;
    }
};

export const generateMetadata = ({params}: Props): Metadata => {
    return {
        title: `Product ${params.productId}`,
    }
}

// Using Jsx, we can pass it as below.
// export const generateMetadata = ({ params }) => {
//     return {
//         title: `Product ${params.productId}`,
//     }
// }

export default function ProductDetails({ params}:Props ) {
    if (params.productId <= 1000) {
        return (
            <h1>Product Details for product {params.productId}</h1>
        )
    }
    else if (params.productId > 1000) {
        return (
            <ErrorProduct params={params} />
        )
    }
}