// autor: Lukáš Fuisl
// login: xfuisl00
import Seznam from "../models/flights.json"
import "./CityFlightDetails.css"

export default function CityFlightDetails(props){
    const filtered = Seznam.seznam.filter(search => search.from === props.city);
    var print = false;
    if(filtered.length !== 0)
        print = true;
    return(
        <table className="tabulka">
            {props.show &&
                <thead>
                <tr><td>{props.city}</td></tr>
                </thead>}
            {props.details && print &&
                <tbody>
                <tr><th>Datum letu: {filtered[0].day}. {filtered[0].month}. {filtered[0].year}</th></tr>
                <tr><th>Čas odletu: {filtered[0].hour}:{filtered[0].minute}</th></tr>
                <tr><th>Pilot: {filtered[0].pilot}</th></tr>
                <tr><th>Doprovod: {filtered[0].doprovod}</th></tr>
                <tr><th>Přihlášeno lidí: {filtered[0].currPass}</th></tr>
                </tbody>}
            {props.details &&!print && <tbody>
            <tr><th>Město nemá naplánovaný let</th></tr>
            </tbody>}
        </table>
    );
}
