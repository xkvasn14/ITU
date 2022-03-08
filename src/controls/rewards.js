import pRewards from "../models/persons.json"

export const getMonthRewards = () => {
    // get username
    let name = localStorage.getItem("name");

    // get person's reward and filter it by month
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    const personRewards = pRewards.persons.find(personRewards => personRewards.username === name);
    const personMonthRewards = personRewards.rewards.filter(month => ((new Date(month.date).getMonth() === currentMonth) && (new Date(month.date).getDate() <= currentDate)));

    return personMonthRewards
}

export const getDataRewards = () => {
    // get username
    const name = localStorage.getItem("name");

    // get pilot's rewards and sort it
    const personRewards = pRewards.persons.find(personRewards => personRewards.username === name);
    const sorted = personRewards.rewards.sort((r1, r2) => (r1.date < r2.date) ? 1 : (r1.date > r2.date) ? -1 : 0);

    return sorted
}

export const getExpectRewards = (data) => {
    let currentDate = new Date();
    return data.filter(m => currentDate < new Date(m.date));
}

export const getLastMonthRewards = (data) => {
    let currentDate = new Date();
    return data.filter(m => currentDate >= new Date(m.date));
}

export const getSumForMonth = (m) => {
    let sum = 0;
    m.forEach( v => {sum += parseInt(v.prize)});

    return sum;
}