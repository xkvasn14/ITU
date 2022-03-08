// autor: Lenka Soková
// login: xsokov01
import {Calendar as BigCalendar, Views} from 'react-big-calendar'
import {localizer, messages, getFlightsInfo} from '../controls/schedules'
import ScheduleWrapper from "./ScheduleWrapper"
import Popup from "./Popup";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import "./Schedule.css"

// eslint-disable-next-line no-extend-native
Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

// function of schedule event
const ScheduleEvent = ({event}) => {
    return (
        <>
            <div className="event">
                <b>{event.pilot}</b>
            </div>
            <Popup text = {event}/>
        </>
    )
}

const EventWrapper = ({children}) => (
    <div style={{position: "relative"}}>
        {children}
    </div>
)


// Write Calendar
const Calendar = () =>{
    return (
        <ScheduleWrapper>
            <BigCalendar
                events={getFlightsInfo()}
                views={[Views.MONTH, Views.WEEK]}
                defaultDate={new Date()}
                localizer={localizer}
                messages={messages}
                step={60}
                components={{
                    event: ScheduleEvent,
                    eventWrapper: EventWrapper
                }}
            />
        </ScheduleWrapper>
    )
}

export default Calendar
