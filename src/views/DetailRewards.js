// autor: Lenka Soková
// login: xsokov01
import "./DetailRewards.css"
import pRewards from "../models/persons.json"


// Detail Rewards
// Show all of pilot's  rewards from last months and expecting rewards

// Write info about rewards to table
const WriteMonth = ({s, i}) => {
    let currentMonth;
    let currentDate = new Date();
    let sum = 0;

    if(i === 13) { // whether they are expecting rewards
        currentMonth = s.filter(m => currentDate < new Date(m.date));
    }

    else { // whether they are rewards from last months
        currentMonth = s.filter(m => currentDate >= new Date(m.date));
    }


    // whether, is not found any item for looking info
    if(currentMonth.length === 0){
        return (
                <tbody>
                <tr className="topBottomRow">
                <td><b>Suma</b></td>
                <td></td>
                <td><b>{sum}</b></td>
                </tr>
                </tbody>
        );
    }
    else{
        currentMonth.forEach( v => {sum += parseInt(v.prize)});
        return(
                    <tbody>
                {currentMonth.map((m, i) => (<tr key={i}>
                    <td>{m.date}</td>
                    <td>{m.place}</td>
                    <td>{m.prize}</td>
                </tr>))}
                <tr className="topBottomRow">
                    <td><b>Suma</b></td>
                    <td></td>
                    <td><b>{sum}</b></td>
                </tr>
                    </tbody>
        );
    }
}



const WriteDetailInfo = ({s}) => {

    return (
        <div>
        <div className="table-wrapper1">
            <table className="fl-table1">
                <thead>
                    <tr className="head">
                        <th colSpan="3">Očakávané platby</th>
                    </tr>
                    <tr className="head2">
                        <th>Dátum</th>
                        <th>Miesto</th>
                        <th>Odmena</th>
                    </tr>
                </thead>

                <WriteMonth s = {s} i = {13}/>
                <thead>
                    <tr className="head">
                        <th colSpan="3">Ostatné platby</th>
                    </tr>
                    <tr className="head2">
                        <th>Dátum</th>
                        <th>Miesto</th>
                        <th>Odmena</th>
                    </tr>
                </thead>
                <WriteMonth s = {s} i = {12}/>
            </table>
        </div>
    </div>
    );
}



const DetReward = () => {
    // get username
    const name = localStorage.getItem("name");

    // get pilot's rewards and sort it
    const personRewards = pRewards.persons.find(personRewards => personRewards.username === name);
    const sorted = personRewards.rewards.sort((r1, r2) => (r1.date < r2.date) ? 1 : (r1.date > r2.date) ? -1 : 0);

    return(<WriteDetailInfo s = {sorted}/>);
}

export default DetReward;
