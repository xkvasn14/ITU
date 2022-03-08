// autor: Lukáš Fuisl
// login: xfuisl00
import image from './czech_map.png'
import ImageMapper from 'react-image-mapper'
import CityFlightDetails from './CityFlightDetails'
import React from "react";

export default function Mapa() {
    var MAP = {
        name: "my-map",
        areas:[
            {name: "Praha", shape: "circle", coords: [365, 260, 15], preFillColor: "red", fillColor: "blue"},
            {name: "Pardubice", shape: "circle", coords: [560, 285, 15], preFillColor: "red", fillColor: "blue"},
            {name: "Plzeň", shape: "circle", coords: [192, 342, 15], preFillColor: "red", fillColor: "blue"},
            {name: "České Budějovice", shape: "circle", coords: [355, 523, 15], preFillColor: "red", fillColor: "blue"},
            {name: "Brno", shape: "circle", coords: [675, 475, 15], preFillColor: "red", fillColor: "blue"},
            {name: "Ostrava", shape: "circle", coords: [935, 315, 15], preFillColor: "red", fillColor: "blue"}
        ]
    }
    const [modalShow, setModalShow] = React.useState(false);
    const [city, setCity] = React.useState([]);
    const [details, setDetails] = React.useState(false);

    return (
        <div>
            <div align="center">
                <ImageMapper
                    src={image}
                    map={MAP}
                    onMouseEnter={ area =>(setModalShow(true), setCity(area.name))}
                    onMouseLeave={() => (setModalShow(false), setDetails(false))}
                    onClick={() => setDetails(true)}
                    onImageClick={() => setDetails(false)}
                />
            </div>
            <CityFlightDetails
                show={modalShow}
                onHide={() => setModalShow(false)}
                city={city}
                details={details}
            />
        </div>
    )
}
