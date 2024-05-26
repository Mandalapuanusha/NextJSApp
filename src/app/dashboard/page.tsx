import { Overview } from "@/components/Overview";

export default function Dashboard() {
    return (<><h1>Dashboard</h1>
        <Overview /></>)
}
//you must write export default to render the component in page.tsx
// Here if you try to render with the below component it wil throw error.
// export  function Dashboard1() {
//     return (<><h1>Dashboard1</h1></>)
// }