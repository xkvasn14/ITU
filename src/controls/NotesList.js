// autor: Jaroslav Kvasnička
// login: xkvasn14
import Note from "../views/Note";
import {BsCheckCircle, BsExclamationTriangle, BsInfoCircle, BsXCircle} from "react-icons/bs";


// Creates list of Notes and generates each new Note
const NotesList = ({notes, handleDeleteNote}) =>{
    const icon=(props)=>{
        if(props === "note-info"){
            return <BsInfoCircle />;
        }
        if(props === "note-error"){
            return <BsXCircle/>;
        }
        if(props === "note-warning"){
            return <BsExclamationTriangle/>;
        }
        if(props === "note-success"){
            return <BsCheckCircle/>;
        }
    }
        return (
            <div className="notes-list">
                {
                    notes.map((note) => (
                        <Note
                            icon={icon(note.type)}
                            type={note.type}
                            text={note.text}
                            date={note.date}
                            id={note.id}
                            handleDeleteNote={handleDeleteNote}
                        />
                    ))
                }
            </div>
        );
}

export default NotesList;
