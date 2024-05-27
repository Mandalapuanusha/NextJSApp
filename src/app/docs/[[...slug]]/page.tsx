import { notFound } from "next/navigation"

export default function Docs({ params }: {
    params: { slug: string[] }
}) {
    if (params.slug?.length == 2) {
        return (<h1>Viewing Docs for  feature {params.slug[0]} and {params.slug[1]} </h1>)
    }
    else if (params.slug?.length == 1) {
        return (<h1>Viewing Docs for  feature {params.slug[0]} </h1>)
    }
    // else if (params.slug?.length == 0) {
        return notFound();
    // }
    // return (<h1>Docs HomePage</h1>)
}