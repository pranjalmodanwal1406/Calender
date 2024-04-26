import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"

const Calender = () => {
  return (
    <div>
        <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"} 
          headerToolbar={{
            start:"today prev, next",
            center: "",
            end: "dayGridMonth, timeGridWeek, timeGridDay",
          }}
          height={"90vh"}
        />
    </div>
  )
}

export default Calender;
