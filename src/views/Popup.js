// autor: Lenka Soková
// login: xsokov01
import "./Popup.css"


const Popup = ({children, text}) => (
    <div className="popup">
        {children}
        <table className="body">
            <thead>
                <tr>
                    <th colSpan="2">
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/hot-air-balloon.png" height="10%" width="10%" alt=""/>
                        {text.pilot}
                    </th>
                    <th className="Topright">
                        <i className="cursive">číslo letu:</i><t/><b>{text.number}</b>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="left">
                        <i>Odlet:</i><br/><b>{text.hour}:{text.minute}</b><br/></td>
                    <td className="center"><i className='fas fa-map-marker-alt'/> {text.from}</td>
                    <td className="right"><i>doprovod</i>:<br/> <b>{text.doprovod}</b></td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default Popup
