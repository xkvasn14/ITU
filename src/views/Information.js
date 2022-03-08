// autor: Jaroslav Kvasnička
// login: xkvasn14
import NotesList from "../controls/NotesList";
import info from "../models/information.json";
import {toast} from "react-toastify";
import {navigate} from "@reach/router";
const serverhost = "http://localhost:4000";


function Information(){
    var notes = JSON.parse(localStorage.getItem("info")).infos;

    const notify_success = (props) => {
        toast.success(props, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000})
    }
    const notify_error = (props) => {
        toast.error(props, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000})
    }

    const deleteNote = (id) =>{
        var username = localStorage.getItem("name");

        var xhr = new XMLHttpRequest()
        xhr.open('POST', serverhost, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("method=information&id=" + id + "&username=" + username);

        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                localStorage.setItem("info",xhr.responseText);
                notify_success("Note deleted");
                navigate("/Navbar");
            }
            else if(xhr.status === 404 && xhr.readyState === 4){
                notify_error("Something went wrong");
            }
            else if(xhr.status === 0 && xhr.readyState === 4) {
                notify_error("Server disconnected")
            }
        };
    }

    return(
        <div className="container">
            <NotesList
                notes={notes}
                handleDeleteNote={deleteNote}
            />
        </div>
    );
}

export default Information;
