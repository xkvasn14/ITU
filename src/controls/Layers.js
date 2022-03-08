// autor: Jaroslav Kvasnička
// login: xkvasn14
import Schedule from "../views/Schedule";
import Mapa from "../views/Mapa";
import FlightList from "../views/FlightList";
import Weather from "../views/Weather";
import Rewards from "../views/Rewards";
import Logout from "./logout";
import Information from "../views/Information";
import DetailRewards from "../views/DetailRewards";

// Render the main window
export function Layers(props){
    return(
        <div>
            {props.show === 0 && ""}
            {props.show === 1 && <FlightList />}
            {props.show === 2 && <Mapa/>}
            {props.show === 3 && <Schedule/>}
            {props.show === 4 && <Weather/>}
            {props.show === 5 && <Rewards/>}
            {props.show === 6 && <DetailRewards/>}
            {props.show === 7 && <Information/>}
            {props.show === 8 && <Logout/>}
        </div>);
}
