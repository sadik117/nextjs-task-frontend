"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/events/${id}`)
        .then((res) => setEvent(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  if (!event) return <p>Loading...</p>;

  const [startDate, startTime] = event.startAtFormatted.split(" at ");
  const [endDate, endTime] = event.endAtFormatted.split(" at ");

  return (
    <div className="max-w-3xl mx-auto py-8">
      <img
        src={event.image}
        alt={event.title}
        className="rounded-lg w-fit h-80 object-contain md:object-cover mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>

      <p className="mb-2">{event.description}</p>

      <p className="mb-2">
        <span className="text-md font-bold">Date: </span>
        {startDate}  
      </p>

      <p className="mb-2">
        <span className="text-md font-bold">Time: </span>
        {startTime} - {endTime}
      </p>

      <p className="mb-4">
        <span className="text-md font-bold">Location: </span>
        {event.location}
      </p>

    </div>
  );
}
