"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomePage() {
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:5000/events")
      .then((res) => {
        const events = res.data;
        const now = new Date();

        const ongoing = events.filter(
          (event) =>
            new Date(event.startAt) <= now && now <= new Date(event.endAt)
        );
        const upcoming = events.filter(
          (event) => new Date(event.startAt) > now
        );
        const past = events.filter((event) => new Date(event.endAt) < now);

        setOngoingEvents(ongoing);
        setUpcomingEvents(upcoming);
        setPastEvents(past);
      })
      .catch((err) => console.error(err));
  }, []);

  const renderSwiper = (events) => (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1} 
      loop={true} 
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {events.map((event) => (
        <SwiperSlide key={event._id}>
          <div
            className="cursor-pointer flex justify-center items-center"
            onClick={() => router.push(`/event/${event._id}`)}
          >
            <img
              src={event.image}
              alt={event.title}
              className="rounded-lg shadow-lg w-fit h-96 object-cover hover:scale-105 transition-transform"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className="max-w-7xl mx-auto py-8">
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-center">Ongoing Events</h2>
        {ongoingEvents.length > 0 ? (
          renderSwiper(ongoingEvents)
        ) : (
          <p className="text-center">No ongoing events today..</p>
        )}
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-center">Upcoming Events</h2>
        {upcomingEvents.length > 0 ? (
          renderSwiper(upcomingEvents)
        ) : (
          <p className="text-center">No upcoming events!!</p>
        )}
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">Past Events</h2>
        {pastEvents.length > 0 ? (
          renderSwiper(pastEvents)
        ) : (
          <p className="text-center">No past events!!</p>
        )}
      </section>
    </div>
  );
}
