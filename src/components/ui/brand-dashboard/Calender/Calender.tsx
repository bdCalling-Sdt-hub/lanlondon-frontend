/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const eventsList = [
  {
    id: 0,
    title: "All Day Event",
    allDay: true,
    start: new Date(2025, 1, 15),
    end: new Date(2025, 1, 16),
  },
  {
    id: 1,
    title: "Conference",
    start: new Date(2023, 11, 17),
    end: new Date(2023, 11, 18),
  },
];

export default function Calender() {
  const [events, setEvents] = useState(eventsList);

  // Function to handle adding a new event
  const handleSelect = ({ start, end }: { start: Date; end: Date }) => {
    const title = window.prompt("Enter event title:");
    if (title) {
      const newEvent = {
        id: events.length, 
        start,
        end,
        title,
      };
      setEvents([...events, newEvent]);
    }
  };

  const eventPropGetter = () => {
    return {
      style: {
        backgroundColor: "#dcd4f7", 
        color: "#5f3dc4",
        borderLeft: "5px solid #7b6ed6", 
        borderRadius: "0px",
        padding: "5px", 
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%", 
      },
    };
  };

  // Custom component for event rendering
  const EventComponent = ({ event }: { event: { title: string } }) => (
    <div>
      <span>{event.title}</span>
    </div>
  );

  return (
    <div>
      <Calendar
       views={["month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}      
        events={events}
        style={{ height: "80vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
        eventPropGetter={eventPropGetter} 
        components={{
          event: EventComponent,
        }}
      />
    </div>
  );
}
