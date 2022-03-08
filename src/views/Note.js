// autor: Jaroslav Kvasnička
// login: xkvasn14
import "./Note.css";
import {BsTrash} from "react-icons/all";


// printing Note by the css
const Note = ({id, date, type, text, icon,handleDeleteNote}) => {
    return (
        <div className={type}>
            {icon}
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <button className="btn" onClick={()=>{handleDeleteNote(id)}}><BsTrash/></button>
            </div>
        </div>
    );
}

export default Note;
