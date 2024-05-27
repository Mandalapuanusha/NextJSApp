import ErrorProduct from "./ErrorProduct";
import { Metadata } from "next";

type Props = {
    params:
    {
        productId: number;
    }
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`iphone ${params.productId}`)
        }, 100)
    });
    return {
        title: `Product ${title}`,
    }
}
// <!---------IMPORTANT----->
// You can not import both const metadata and generateMetadata from a same file.
// Using Jsx, we can pass it as below.
// export const generateMetadata = ({ params }) => {
//     return {
//         title: `Product ${params.productId}`,
//     }
// }
// export const generateMetadata = async ({ params }) => {
//     const title = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`iphone ${params.productId}`)
//         }, 100)
//     });
//     return {
//         title: `Product ${title}`,
//     }
// }

export default function ProductDetails({ params }: Props) {
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