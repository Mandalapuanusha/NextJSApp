export default function PrivateRoute(){
    return (<h1>You cannot view this in a browser!</h1>)
}
/* If you want to include an underScore in URL segments, 
you can prefix the folder name with %5F, 
which is the URL encoded form of an underscore.
Ex: Rename the folder _lib to %5Flib & 
see the output for https://localhost:3000/_lib
*/