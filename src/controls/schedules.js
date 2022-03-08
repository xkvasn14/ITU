// autor: Lenka Soková
// login: xsokov01
import {dateFnsLocalizer} from 'react-big-calendar'
import {startOfWeek, getDay, parse, format} from 'date-fns'
import cs from 'date-fns/locale/cs'
import flights from "../models/flights.json"

export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), {weekStartsOn: 1}),
    getDay,
    locales: {cs},
})

export const getFlightsInfo = () => {
    const events = (flights.seznam).map(v => ({...v, start: new Date(v.year, v.month-1, v.day, 7, 0),
        end: new Date(v.year, v.month-1, v.day, 11, 0), 'allDay': false}))

    return events
}

export const messages = {
    allDay: 'Celý deň',
    previous: 'Predošlý',
    next: 'Ďalší',
    today: 'Dnes',
    month: 'Mesiac',
    week: 'Týždeň',
    day: 'Deň',
    agenda: 'Agenda',
    date: 'Dátum',
    time: 'Čas',
    event: 'Udalosť',
    noEventsInRange: 'Žiadne udalosti vo výbere',
    work_week: 'Pracovný týždeň', // eslint-disable-line camelcase
}
