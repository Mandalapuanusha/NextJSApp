/* Route Groups - 
It allows us to logically group our routes and project files
without effecting the URL path structure. 
Here auth folder is a Route Group created to group authentication flow.
wrapping auth folder in () will not affect the URL route below.
https:localhost:3000/login.
*/

export default function Login(){
    return(
        <h1>Login</h1>
    )
}
