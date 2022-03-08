// autor: Jaroslav Kvasnička
// login: xkvasn14
import {navigate} from "@reach/router";
import Login from "../views/login";

export function Logout(){


    // Clearn information after user
    localStorage.clear();

    // RE-RENDER THE ENTIRE THING and call Login
    navigate("/");
    window.location.reload();


    return(
            <Login/>
    );
}

export default Logout;
