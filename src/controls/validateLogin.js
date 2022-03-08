// autor: Jaroslav Kvasnička
// login: xkvasn14
// npm install javascript-stringify
// npm install react-modal
// npm install file-system
// npm install axios
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import osoby from "../models/persons.json";
import {navigate} from "@reach/router";
import {stringify} from "javascript-stringify";

const serverhost = "http://localhost:4000";
toast.configure();
// Popup toast functions
export function validateData() {

    const notify_success = (props) => {
        toast.success(props, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000})
    }

    const notify_error = (props) => {
        toast.error(props, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000})
    }

    const notify_info = (props) => {
        toast.info('Vítejte ' + props, {position: toast.POSITION.TOP_CENTER, autoClose: 3000})
    }

    // User data validation
    var username = document.getElementById("usernameText").value;
    var password = document.getElementById("passwordText").value;

    var xhr = new XMLHttpRequest()
    xhr.open('GET', serverhost + '/?method=get&name=' + username + '&password=' + password, true);
    xhr.send(null);

    xhr.onreadystatechange = function() {
        if (xhr.status === 200 && xhr.readyState === 4) {
            xhr = new XMLHttpRequest()
            xhr.open('GET', serverhost + '/?method=information&username=' + username, true);
            xhr.send(null);

            xhr.onreadystatechange = function () {
                if (xhr.status === 200 && xhr.readyState === 4) {
                    localStorage.setItem("name", username);
                    localStorage.setItem("info",xhr.responseText);

                    notify_success("Log in Successful");
                    navigate("/Navbar");
                }
                else if(xhr.status === 404 && xhr.readyState === 4){
                    notify_error("Something went wrong");
                }
            };
        }
        else if (xhr.status === 400 && xhr.readyState === 4) {
            notify_error("Wrong Username or Password");
        }
        else if(xhr.status === 404 && xhr.readyState === 4){
            notify_error("Something went wrong");
        }
        else if(xhr.status === 0 && xhr.readyState === 4)
        {
            notify_error("Server disconnected")
        }
    };

}

export function validateForm(props) {

    const notify_success = (props) => {
        toast.success(props, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000})
    }

    const notify_error = (props) => {
        toast.error(props, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000})
    }


    var personName = document.getElementById("nameTextForm").value;
    var username = document.getElementById("usernameTextForm").value;
    var password = document.getElementById("passwordTextForm").value;
    var passwordCheck = document.getElementById("passwordTextFormCheck").value;

    if (personName === "") {
        notify_error("Prázdné Jméno a Příjmení");
        return;
    } else if (passwordCheck !== password) {
        notify_error("Hesla se neshodují");
        return;
    } else if (username === "") {
        notify_error("Prázdné Přihlašovací Jméno");
        return;
    } else if (password === "") {
        notify_error("Prázdné Heslo");
        return;
    }


    var xhr = new XMLHttpRequest()

    xhr.open('POST', serverhost, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.send("method=post&username=" + username + "&password=" + password + "&personName=" + personName)

    xhr.onreadystatechange = function() {
        console.log(xhr);
        if (xhr.status === 200 && xhr.readyState === 4) {
            notify_success("User has been registered")
        }
        else if(xhr.status === 400 && xhr.readyState === 4){
            notify_error("User already exists")
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