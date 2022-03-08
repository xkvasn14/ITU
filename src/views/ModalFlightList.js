// autor: Lukáš Fuisl
// login: xfuisl00
import React from "react";
import './ModalFlightList.css'

export default function CityFlightDetails(props) {
    return (
        <table className="show">
                    <tr>
                        <th>Číslo letu:</th>
                        <th>{props.view.number}</th>
                    </tr>
                    <tr>
                        <th>Datum:</th>
                        <th>{props.view.day}. {props.view.month}. {props.view.year}</th>
                    </tr>
                    <tr>
                        <th>Čas odletu:</th>
                        <th>{props.view.hour}:{props.view.minute}</th>
                    </tr>
                    <tr>
                        <th>Místo:</th>
                        <th>{props.view.from}</th>
                    </tr>
                    <tr>
                        <th>Pilot:</th>
                        <th>{props.view.pilot}</th>
                    </tr>
                    <tr>
                        <th>Přihlášená kapacita:</th>
                        <th>{props.view.currPass}</th>
                    </tr>
                    <tr>
                        <th>Maximální kapacita:</th>
                        <th>{props.view.maxPass}</th>
                    </tr>
                    <tr>
                        <th>Doprovod:</th>
                        <th>{props.view.doprovod}</th>
                    </tr>
                    <tr>
                        <th>Nosnost:</th>
                        <th>{props.view.weightLimit}kg</th>
                    </tr>
                    <tr>
                        <th>Stav balónu:</th>
                        <th>{props.view.stav}</th>
                    </tr>
        </table>
    );
}
