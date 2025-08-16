"use client";

import { useState } from "react";

export default function AddEvent() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const startAt = new Date(`${formData.date}T${formData.startTime}`);
  const endAt = new Date(`${formData.date}T${formData.endTime}`);

  const eventData = {
    title: formData.title,
    startAt: startAt.toISOString(), 
    endAt: endAt.toISOString(),     
    location: formData.location,
    description: formData.description,
    image: formData.image,
  };

  try {
    const res = await fetch("https://sge-event-management.vercel.app/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to add event");

    alert("Event added successfully!");
    setFormData({
      title: "",
      date: "",
      startTime: "",
      endTime: "",
      location: "",
      description: "",
      image: "",
    });
  } catch (err) {
    alert(err.message);
  }
};


  return (
    <div className="min-h-screen py-5 flex justify-center items-center bg-gray-100">
       <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-8 rounded-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6">Add New Event</h2>

        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
          required
        />

        <div className="mb-4">
          <label className="block mb-2">Event Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2">Start Time</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2">End Time</label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          {formData.date && formData.startTime && formData.endTime && (
            <div className="mt-2 p-2 bg-gray-50 rounded">
              <p>Preview in your local time:</p>
              <p className="font-medium">
                {new Date(`${formData.date}T${formData.startTime}`).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })} - {new Date(`${formData.date}T${formData.endTime}`).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
              <p className="text-sm">
                {new Date(formData.date).toLocaleDateString(undefined, {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          )}
        </div>

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
          required
        />

        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
          required
          rows={4}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded w-full"
        >
          Add Event
        </button>
      </form>
    </div>
  );
}