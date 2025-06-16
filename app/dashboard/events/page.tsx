import React from "react";

const events = [
  {
    id: 1,
    title: "Community Cleanup Day",
    type: "cleanup",
    date: "Sep 15, 2023, 9:00 AM - 12:00 PM",
    location: "Riverside Park",
    attendees: 24,
    description:
      "Join us for a community cleanup day at Riverside Park. We'll provide gloves, bags, and tools. Help us keep our parks clean!",
  },
  {
    id: 2,
    title: "Recycling Workshop",
    type: "workshop",
    date: "Sep 18, 2023, 6:30 PM - 8:00 PM",
    location: "Community Center",
    attendees: 18,
    description:
      "Learn how to properly sort and recycle different materials. This workshop will cover common recycling mistakes and how to avoid them.",
  },
  {
    id: 3,
    title: "Sustainable Living Fair",
    type: "fair",
    date: "Sep 23, 2023, 10:00 AM - 4:00 PM",
    location: "Downtown Plaza",
    attendees: 120,
    description:
      "A day-long fair featuring local sustainable businesses, workshops, food, and activities for all ages. Learn about sustainable living practices.",
  },
];

export default function EventsPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 h-screen bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-4">ReCircle</h1>
        <nav>
          <ul>
            <li className="mb-2">
              <a
                href="/dashboard"
                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              >
                <i className="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/recycling"
                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              >
                <i className="fas fa-recycle"></i>
                <span>Recycling</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/community"
                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              >
                <i className="fas fa-users"></i>
                <span>Community</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/events"
                className="flex items-center space-x-2 p-2 bg-gray-700 rounded"
              >
                <i className="fas fa-calendar-alt"></i>
                <span>Events</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/map"
                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              >
                <i className="fas fa-map-marker-alt"></i>
                <span>Local Map</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/settings"
                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              >
                <i className="fas fa-cog"></i>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Events</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <i className="fas fa-plus"></i> Create Event
          </button>
        </header>

        {/* Filter Section */}
        <div className="flex space-x-4 mb-6">
          <select className="border p-2 rounded w-1/3">
            <option value="all">All Types</option>
            <option value="cleanup">Cleanup</option>
            <option value="workshop">Workshop</option>
            <option value="fair">Fair</option>
          </select>
          <select className="border p-2 rounded w-1/3">
            <option value="upcoming">Upcoming</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
          </select>
          <select className="border p-2 rounded w-1/3">
            <option value="all">All Locations</option>
            <option value="portland">Portland, OR</option>
          </select>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-3 gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="border rounded-lg shadow p-4 bg-white"
            >
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <i className="fas fa-calendar-alt"></i> {event.date}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <i className="fas fa-map-marker-alt"></i> {event.location}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <i className="fas fa-users"></i> {event.attendees} attending
              </p>
              <p className="text-gray-800 mb-4">{event.description}</p>
              <div className="flex space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  RSVP
                </button>
                <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300">
                  <i className="fas fa-share"></i> Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
