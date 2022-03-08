// autor: Lukáš Fuisl
// login: xfuisl00
import React from "react";
import CityFlightDetails from "./ModalFlightList";
import "./FlightList.css"
import flights from '../models/flights.json'

const FlightList = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalView, setModalView] = React.useState([]);

    return (
        <div className="FlightList">
            <div className="flight-list">
                <table className="styled-table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Datum</th>
                        <th>Čas</th>
                        <th>Odkud</th>
                        <th>Pilot</th>
                        <th>Obsazenost</th>
                    </tr>
                    </thead>
                    <tbody>
                    {flights.seznam.sort((a,b) => a.hour-b.hour).sort((a,b)=> a.day - b.day).sort((a,b)=> a.month - b.month).sort((a,b)=> a.year - b.year).map((flight, index) => (
                        // eslint-disable-next-line no-sequences
                        <tr key={index} onMouseOver={() => (setModalShow(true), setModalView(flight))} onMouseLeave={() => setModalShow(false)}>
                            <th>{flight.number}</th>
                            <th>{flight.day}. {flight.month}. {flight.year}</th>
                            <th>{flight.hour}:{flight.minute}</th>
                            <th>{flight.from}</th>
                            <th>{flight.pilot}</th>
                            <th>{flight.currPass}/{flight.maxPass}</th>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {modalShow && <CityFlightDetails
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    view={modalView}
                />}
            </div>
        </div>
    );
}

export default FlightList;
