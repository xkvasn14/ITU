// autor: Lenka Soková
// login: xsokov01
import "./Rewards.css"
//import pRewards from "../models/persons.json"
import {navigate} from "@reach/router";

const serverhost = "http://localhost:4000";

async function RewardPerson (){


    // get username
    console.log(localStorage.getItem("name"));
    let name = localStorage.getItem("name");


    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }


        var pRewards = "";
        var xhr = new XMLHttpRequest();
        xhr.open('GET', serverhost + '/?method=rewards', true);
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                pRewards = JSON.parse(xhr.responseText);
                console.log(pRewards)
                return (pRewards);
            } else if (xhr.status === 400 && xhr.readyState === 4) {
                console.log(400)
            } else if (xhr.status === 404 && xhr.readyState === 4) {
                console.log(404)
            } else if (xhr.status === 0 && xhr.readyState === 4) {
                console.log(0)
            }
        };


        await sleep(100) //wait 5 seconds


        // get person's reward and filter it by month
        const currentMonth = new Date().getMonth();
        const currentDate = new Date().getDate();
        const currentYear = new Date().getFullYear();
        const personRewards = pRewards.persons.find(personRewards => personRewards.username === name);
        console.log(personRewards)
        var personMonthRewards = [];

        for(let i of personRewards.rewards)
        {
            var month = new Date(i.date).getMonth()
            var date = new Date(i.date).getDate()
            var year = new Date(i.date).getFullYear()
            console.log(i)

            if(currentMonth === month && date <= currentDate && year <= currentYear){
                personMonthRewards.push(i);
            }
        }

        //const personMonthRewards = personRewards.rewards.filter(month => ((new Date(month.date).getMonth() === currentMonth) && (new Date(month.date).getDate() <= currentDate)));
        const m = personMonthRewards;
        console.log(personMonthRewards)
        let sum = 0;
        m.forEach(v => {
            sum += parseInt(v.prize)
        });

        return (
            <div className="box">
                <div className="table-wrapper">
                    <table className="fl-table">
                        <thead>
                        <tr className="head">
                            <th colSpan="3">Odmeny za posledný mesiac</th>
                        </tr>
                        <tr className="head2">
                            <th>Dátum</th>
                            <th>Miesto</th>
                            <th>Odmena</th>
                        </tr>
                        </thead>
                        <tbody>
                        {m.map((test, i) => (<tr key={i}>
                            <td>{test.date} </td>
                            <td>{test.place}</td>
                            <td>{test.prize}</td>
                        </tr>))}
                        <tr className="topBottomRow">
                            <td><b>Suma</b></td>
                            <td></td>
                            <td><b>{sum}</b></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )


    }


export default RewardPerson
