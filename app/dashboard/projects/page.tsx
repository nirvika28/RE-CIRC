// app/projects/page.tsx

"use client";
import React from "react";

const projects = [
  {
    title: "Community Rainwater Filter",
    description: "Install a community rainwater harvesting and filtration system for the neighborhood park.",
    category: "Environment",
    status: "Active",
    goal: "40kg of plastic bottles",
    goalPercentage: 65,
    collected: "26kg collected",
    image: "/images/rainwater.jpeg",
  },
  {
    title: "Solar Street Lights",
    description: "Install solar-powered LED street lights along the community walking path.",
    category: "Energy",
    status: "Active",
    goal: "60kg of metal cans",
    goalPercentage: 42,
    collected: "25kg collected",
    image: "https://source.unsplash.com/400x250/?solar,lights,park",
  },
  {
    title: "Recycled Park Benches",
    description: "Create park benches from recycled plastic materials for the community garden.",
    category: "Community",
    status: "Active",
    goal: "80kg of mixed plastic",
    goalPercentage: 78,
    collected: "62kg collected",
    image: "https://source.unsplash.com/400x250/?park,bench,recycled",
  },
  {
    title: "Community Bike Shelter",
    description: "Build a covered bike parking area to encourage sustainable transportation.",
    category: "Infrastructure",
    status: "Upcoming",
    goal: "50kg of cardboard",
    goalPercentage: 15,
    collected: "7.5kg collected",
    image: "https://source.unsplash.com/400x250/?bike,shelter,community",
  },
  {
    title: "Community Compost Bins",
    description: "Install community composting bins to reduce organic waste and create fertilizer.",
    category: "Environment",
    status: "Completed",
    goal: "30kg of organic waste",
    goalPercentage: 100,
    collected: "30kg collected",
    image: "/images/compost.jpeg",
  },
  {
    title: "Public Water Fountain",
    description: "Install a public water fountain to reduce single-use plastic bottle consumption.",
    category: "Infrastructure",
    status: "Active",
    goal: "35kg of glass bottles",
    goalPercentage: 28,
    collected: "9.8kg collected",
    image: "https://source.unsplash.com/400x250/?water,fountain,public",
  },
];

const statusColors: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Completed: "bg-gray-200 text-gray-600",
  Upcoming: "bg-yellow-100 text-yellow-700",
};

const categoryIcons: Record<string, string> = {
  Environment: "🌱",
  Energy: "💡",
  Community: "🌳",
  Infrastructure: "🏗️",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Community Projects</h1>
          <p className="text-lg text-gray-600">Help fund community upgrades by contributing recyclable materials</p>
        </header>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-2xl w-full h-48 object-cover"
                />
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold shadow ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center mb-2 gap-2">
                  <span className="text-xl">{categoryIcons[project.category]}</span>
                  <span className="text-sm font-medium text-gray-500">{project.category}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-800 mb-1">{project.title}</h2>
                <p className="text-gray-600 mb-3 flex-1">{project.description}</p>
                <div className="mb-3">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-semibold">{project.goal}</span>
                    <span className="font-semibold">{project.goalPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        project.status === "Completed"
                          ? "bg-green-500"
                          : project.status === "Upcoming"
                          ? "bg-yellow-400"
                          : "bg-blue-500"
                      }`}
                      style={{ width: `${project.goalPercentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{project.collected}</span>
                    <span>
                      {project.status === "Completed"
                        ? "Goal achieved!"
                        : `${parseInt(project.goal.split(' ')[1]) - parseFloat(project.collected) || ""}kg remaining`}
                    </span>
                  </div>
                </div>
                <button
                  className={`mt-auto py-2 px-4 rounded-lg font-semibold transition ${
                    project.status === "Completed"
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
                  disabled={project.status === "Completed"}
                >
                  {project.status === "Completed" ? "View Results" : "Participate"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
