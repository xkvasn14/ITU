// autor: Lenka Soková
// login: xsokov01
import {Router} from "@reach/router"
import Login from "./views/login.js"
import Schedule from "./views/Schedule"
import Navbar from "./views/Navbar";
import Logout from "./controls/logout";
import FlightList from "./views/FlightList";
import Mapa from "./views/Mapa";
import Weather from "./views/Weather";
import Rewards from "./views/Rewards";
import Information from "./views/Information";
import DetailRewards from "./views/DetailRewards";

window.userpersonname = "admin"

const App = () => (
    <div className="app">
    <Router>
        <Login path="/" />
        <Navbar path="/Navbar" />
        <Schedule path="/schedule" />
        <FlightList path="/flightlist"/>
        <Mapa path="/mapa"/>
        <Weather path="/weather"/>
        <Rewards path="/rewards"/>
        <DetailRewards path="/detailrewards"/>
        <Logout path="nowhere"/>
        <Information path="/information"/>
    </Router>
    </div>
)

export default App
