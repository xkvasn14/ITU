// autor: Jaroslav Kvasnička
// login: xkvasn14
import React, {useState} from "react";
import {Layers} from "../controls/Layers";
import './Navbar.css';
import {FiSettings} from "react-icons/fi";
import Modal from "react-bootstrap/Modal";
import {removeUser} from "../controls/removeUser";


export default function Navbar(props) {
    // Init of values to show and layers
    const [collapse_lety,setLety] = useState("collapse");
    const [collapse_odmeny,setOdmeny] = useState("collapse");
    const [collapse_settings,setSettings] = useState("collapse");
    const [show,setShow] = useState(7);
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
                        Opravdu chete odstranit uživatele?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Přihlašovací Jméno</label>
                    <input id= "usernameTextFormDelete" onKeyPress={event => {if(event.key === "Enter"){}}} type="text" className="form-control" placeholder="Jméno"/>
                    <label>Heslo</label>
                    <input id="passwordTextFormDelete" onKeyPress={event => {if(event.key === "Enter"){}}} type="password" className="form-control" placeholder="Heslo"/>
                </Modal.Body>
                <Modal.Footer>
                    <input type="button" className="btn btn-danger" value="Remove" onClick={removeUser}/>
                </Modal.Footer>
            </Modal>
        );
    }




    // print navigation bar
    return (
        <div>
            <div className="Navbar">
                <nav className={"navbar navbar-dark  bg-primary navbar-expand-lg"}>
                    <div className="navbarItems">
                    <button className="btn btn-primary" onClick={()=>(setLety(""),setOdmeny("collapse"),setSettings("collapse"))} >Lety</button>
                    <button className="btn btn-primary" onClick={()=>(setLety("collapse"),setOdmeny("collapse"), setShow(3),setSettings("collapse"))} >Kalendář</button>
                    <button className="btn btn-primary" onClick={()=>(setLety("collapse"),setOdmeny("collapse"),setShow(4),setSettings("collapse"))} >Počasí</button>
                    <button className="btn btn-primary" onClick={()=>(setLety("collapse"),setOdmeny(""),setSettings("collapse"))} >Odměny</button>
                    <button className="btn btn-primary" onClick={()=>(setLety("collapse"),setOdmeny("collapse"),setShow(7),setSettings("collapse"))} >Informace</button>
                    </div>
                    <button className="btn btn-primary" onClick={()=>setLety("collapse",setOdmeny("collapse"),setSettings(""))}><FiSettings/></button>
                </nav>
                <nav className={"navbar navbar-dark bg-primary navbar-expand-lg " + collapse_lety}>
                    <button className="btn btn-primary"  onClick={()=>setShow(1)}>Přehled</button>
                    <button className="btn btn-primary"  onClick={()=>setShow(2)}>Mapa</button>
                </nav>
                <nav className={"navbar navbar-dark  bg-primary navbar-expand-lg " + collapse_odmeny}>
                    <button className="btn btn-primary" onClick={()=>setShow(5)} >Shrnutí</button>
                    <button className="btn btn-primary" onClick={()=>setShow(6)} >Detailní</button>
                </nav>
                <nav className={"navbar navbar-dark  bg-primary navbar-expand-l " + collapse_settings}>
                    <div>
                    </div>
                    <div>
                        <button className="btn btn-close-white" onClick={()=> setModalShow(true)} >Remove</button>
                        <button className="btn btn-primary" onClick={() =>setShow(8)}>Odhlásit</button>
                    </div>
                </nav>
                <Layers show={show}/>
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
