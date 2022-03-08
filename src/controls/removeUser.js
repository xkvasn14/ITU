import {toast} from "react-toastify";
import Logout from "./logout";

export function removeUser(props) {

    const serverhost = "http://localhost:4000";


    const notify_success = (props) => {
        toast.success(props, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000})
    }

    const notify_error = (props) => {
        toast.error(props, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000})
    }


    var username = document.getElementById("usernameTextFormDelete").value;
    var password = document.getElementById("passwordTextFormDelete").value;

    if (username === "") {
        notify_error("Prázdné Přihlašovací Jméno");
        return;
    } else if (password === "") {
        notify_error("Prázdné Heslo");
        return;
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }



    var usernameCheck = localStorage.getItem("name");
    if(usernameCheck !== username)
    {
        notify_error("Napište svoje jméno a heslo");
        return;
    }


    var xhr = new XMLHttpRequest()

    xhr.open('POST', serverhost, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.send("method=delete&username=" + username + "&password=" + password)

    xhr.onreadystatechange = function() {
        console.log(xhr);
        if (xhr.status === 200 && xhr.readyState === 4) {
            notify_success("User has been removed");
            async function timeSensativeAction(){
                await sleep(1300)
                Logout();
            }
            timeSensativeAction();
        }
        else if(xhr.status === 400 && xhr.readyState === 4){
            notify_error("Wrong Username or Password")
        }
        else if(xhr.status === 500 && xhr.readyState === 4){
            notify_error("Form parsing Error")
        }
        else if(xhr.status === 404 && xhr.readyState === 4){
            notify_error("Something went wrong")
        }
        else if(xhr.status === 0 && xhr.readyState === 4) {
            notify_error("Server disconnected")
        }
    };

}