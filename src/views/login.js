// autor: Jaroslav Kvasnička
// login: xkvasn14
import '../views/login.css';
import React from "react";
import {validateData,validateForm} from "../controls/validateLogin.js"
import {useState} from "react";
import Modal from 'react-bootstrap/Modal'




export function Login(props) {

    // User can use button click or Enter click to insert data
    const isEnter = evt =>
    {
        if(evt.key === "Enter"){
            validateData()
        }
    }

    // clear user data
    localStorage.clear();
    const [modalShow, setModalShow] = useState(false);


    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
            >
                <Modal.Header closeButton id={"FormCloseBtn"}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Přihlašovací Formulář
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Jméno a Příjmení</label>
                    <input id= "nameTextForm" onKeyPress={event => {if(event.key === "Enter"){validateForm()}}} type="text" className="form-control" placeholder="Name and Surname"/>
                    <label>Přihlašovací Jméno</label>
                    <input id= "usernameTextForm" onKeyPress={event => {if(event.key === "Enter"){validateForm()}}} type="text" className="form-control" placeholder="Username"/>
                    <label>Heslo</label>
                    <input id="passwordTextForm" onKeyPress={event => {if(event.key === "Enter"){validateForm()}}} type="password" className="form-control" placeholder="Heslo"/>
                    <label>Heslo</label>
                    <input id="passwordTextFormCheck" onKeyPress={event => {if(event.key === "Enter"){validateForm()}}} type="password" className="form-control" placeholder="Znovu Heslo"/>
                </Modal.Body>
                <Modal.Footer>
                    <input type="button" className="btn btn-primary" value="Register" onClick={validateForm}/>
                </Modal.Footer>
            </Modal>
        );
    }






    return (
        <div className="loginApp">
            <div className="navbar bg-primary">
                <p></p>
            </div>
            <div className={"container-fluid"}>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-3">
                        <form>
                            <div className="form-container">
                                <div className="form-group">
                                    <p></p>
                                    <label>Přihlašovací Jméno</label>
                                    <input id= "usernameText" onKeyPress={isEnter} type="text" className="form-control" placeholder="Username"/>
                                    <p></p>
                                    <label>Heslo</label>
                                    <input id="passwordText" onKeyPress={isEnter} type="password" className="form-control" placeholder="Heslo"/>
                                </div>
                                <p></p>
                                <div>
                                <input type="button" onClick={validateData} className="btn btn-primary" value=" Log in "/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="button" className="btn btn-link" onClick={() => setModalShow(true)} value="new user?"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        </div>
    );
}

export default Login;
