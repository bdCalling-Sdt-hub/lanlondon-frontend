/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client"
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useGetNotesQuery, useMakeNotesMutation } from "@/redux/features/brand-dashboardApi/calender";
import { message } from "antd";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);


export default function BigCalendar() {
  const { data , refetch } = useGetNotesQuery(undefined) 
  const [makeNotes] = useMakeNotesMutation()

  const eventsList = data?.map((item: { _id: string; notes: string; date: string; }) => ({
    id: item?._id,
    title: item?.notes,
    start: moment(item?.date).toDate(),
    end: moment(item?.date).toDate(),
  }))

  const [events, setEvents] = useState(eventsList);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    if (data) {
      const eventsList = data?.map((item: { _id: string; notes: string; date: string }) => ({
        id: item?._id,
        title: item?.notes,
        start: moment(item?.date).toDate(),
        end: moment(item?.date).toDate(),
      }));
      setEvents(eventsList);
    }
  }, [data]);

  const handleSelect = async({ start }: { start: Date; }) => {
    const title = window.prompt("Enter Your Note");
    if (title) {
      const newEvent = {
        date:start,
        notes:title,
      };
      // setEvents([...events, newEvent]); 
      await makeNotes(newEvent).then((res) => {
        console.log(res); 
        if(res?.data?.success){
          message.success(res?.data?.message)  
          refetch()
        }else{
          message.error(res?.data?.message)  
        }
      });
    }
  };

  const handleNavigate = (date: Date) => {
    setCurrentDate(date);
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
        date={currentDate}
        events={events}
        style={{ height: "80vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
        onNavigate={handleNavigate}
        eventPropGetter={eventPropGetter}
        components={{
          event: EventComponent,
        }}
      />
    </div>
  );
}
