// app/projects/page.tsx

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "rainwater-filter",
    title: "Community Rainwater Filter",
    image: "/images/rainwater.jpeg",
    category: "Environment",
    categoryIcon: "fas fa-tint",
    description: "Install a community rainwater harvesting and filtration system for the neighborhood park.",
    goal: "40kg of plastic bottles",
    goalPercentage: 65,
    collected: "26kg",
    remaining: "14kg",
    participants: 23,
    daysLeft: 15,
    status: "Active",
    details: {
      impact: "This project will provide clean, filtered water for the entire community while reducing plastic waste by an estimated 2,000 bottles per month.",
      timeline: [
        "Collection Phase: 30 days",
        "Construction: 2 weeks",
        "Installation: 1 week"
      ],
      requirements: [
        "Clean plastic bottles (any size)",
        "Remove labels and caps",
        "Rinse thoroughly"
      ],
      participants: [
        { name: "Sarah Johnson", contributed: "3.2kg" },
        { name: "Miguel Rodriguez", contributed: "2.8kg" },
        { name: "Aisha Williams", contributed: "4.1kg" }
      ],
      updates: [
        { date: "2 days ago", title: "Milestone Reached!", text: "We've reached 60% of our goal! Thank you to all participants." },
        { date: "1 week ago", title: "Project Launch", text: "Community Rainwater Filter project is now live and accepting contributions." }
      ]
    }
  },
  {
    id: "solar-lights",
    title: "Solar Street Lights",
    image: "https://source.unsplash.com/400x250/?solar,lights,park",
    category: "Energy",
    categoryIcon: "fas fa-lightbulb",
    description: "Install solar-powered LED street lights along the community walking path.",
    goal: "60kg of metal cans",
    goalPercentage: 42,
    collected: "25kg",
    remaining: "35kg",
    participants: 18,
    daysLeft: 22,
    status: "Active"
  },
  {
    id: "park-benches",
    title: "Recycled Park Benches",
    image: "https://source.unsplash.com/400x250/?park,bench,recycled",
    category: "Community",
    categoryIcon: "fas fa-tree",
    description: "Create park benches from recycled plastic materials for the community garden.",
    goal: "80kg of mixed plastic",
    goalPercentage: 78,
    collected: "62kg",
    remaining: "18kg",
    participants: 31,
    daysLeft: 8,
    status: "Active"
  },
  {
    id: "bike-shelter",
    title: "Community Bike Shelter",
    image: "https://source.unsplash.com/400x250/?bike,shelter,community",
    category: "Infrastructure",
    categoryIcon: "fas fa-bicycle",
    description: "Build a covered bike parking area to encourage sustainable transportation.",
    goal: "50kg of cardboard",
    goalPercentage: 15,
    collected: "7.5kg",
    remaining: "42.5kg",
    participants: 9,
    daysLeft: 45,
    status: "Upcoming"
  },
  {
    id: "compost-bins",
    title: "Community Compost Bins",
    image: "/images/compost.jpeg",
    category: "Environment",
    categoryIcon: "fas fa-seedling",
    description: "Install community composting bins to reduce organic waste and create fertilizer.",
    goal: "30kg of organic waste",
    goalPercentage: 100,
    collected: "30kg",
    remaining: "Goal achieved!",
    participants: 42,
    daysLeft: 0,
    status: "Completed"
  },
  {
    id: "water-fountain",
    title: "Public Water Fountain",
    image: "https://source.unsplash.com/400x250/?water,fountain,public",
    category: "Infrastructure",
    categoryIcon: "fas fa-tint",
    description: "Install a public water fountain to reduce single-use plastic bottle consumption.",
    goal: "35kg of glass bottles",
    goalPercentage: 28,
    collected: "9.8kg",
    remaining: "25.2kg",
    participants: 14,
    daysLeft: 28,
    status: "Active"
  }
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "environment", label: "Environment" },
  { value: "community", label: "Community" },
  { value: "energy", label: "Energy" }
];

const statuses = [
  { value: "all", label: "All Projects" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
  { value: "upcoming", label: "Upcoming" }
];

const materials = [
  { value: "all", label: "All Materials" },
  { value: "plastic", label: "Plastic" },
  { value: "paper", label: "Paper" },
  { value: "metal", label: "Metal" },
  { value: "glass", label: "Glass" }
];

function ProjectModal({ project, onClose }: { project: any, onClose: () => void }) {
  const [tab, setTab] = useState("details");
  if (!project) return null;
  return (
    <div className="modal show" id="projectModal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Project Details</h2>
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-grid">
            <div className="modal-image">
              <Image src={project.image} alt="" width={250} height={150} />
            </div>
            <div className="modal-details">
              <div className="modal-category">
                <i className={project.categoryIcon}></i> {project.category}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="modal-goal">
                <div className="goal-header">
                  <span>{`Goal: ${project.goal}`}</span>
                  <span>{`${project.goalPercentage}%`}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${project.goalPercentage}%` }}></div>
                </div>
                <div className="goal-details">
                  <span>{project.collected} collected</span>
                  <span>{project.remaining} remaining</span>
                </div>
              </div>
              <div className="modal-stats">
                <div className="stat">
                  <i className="fas fa-users"></i>
                  <span>{project.participants} participants</span>
                </div>
                <div className="stat">
                  <i className="fas fa-calendar"></i>
                  <span>{project.daysLeft > 0 ? `${project.daysLeft} days left` : "Completed"}</span>
                </div>
                <div className="stat">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Portland Community Center</span>
                </div>
              </div>
              <div className="modal-actions">
                <button className="btn btn-primary">
                  <i className="fas fa-hand-holding-heart"></i>
                  Participate Now
                </button>
                <button className="btn btn-outline">
                  <i className="fas fa-share-alt"></i>
                  Invite Friends
                </button>
                <button className="btn btn-outline">
                  <i className="fas fa-map"></i>
                  View Drop Points
                </button>
              </div>
              <div className="modal-tabs">
                <div className="tab-list">
                  <button className={`tab${tab === "details" ? " active" : ""}`} onClick={() => setTab("details")}>Details</button>
                  <button className={`tab${tab === "participants" ? " active" : ""}`} onClick={() => setTab("participants")}>Participants</button>
                  <button className={`tab${tab === "updates" ? " active" : ""}`} onClick={() => setTab("updates")}>Updates</button>
                </div>
                <div className="tab-content">
                  {tab === "details" && (
                    <div className="tab-pane active" id="details">
                      <div className="project-details">
                        <h4>Project Impact</h4>
                        <p>{project.details.impact}</p>
                        <h4>Timeline</h4>
                        <ul>
                          {project.details.timeline.map((t: string, i: number) => <li key={i}>{t}</li>)}
                        </ul>
                        <h4>Requirements</h4>
                        <ul>
                          {project.details.requirements.map((r: string, i: number) => <li key={i}>{r}</li>)}
                        </ul>
                      </div>
                    </div>
                  )}
                  {tab === "participants" && (
                    <div className="tab-pane active" id="participants">
                      <div className="participants-list">
                        {project.details.participants.map((p: any, i: number) => (
                          <div className="participant" key={i}>
                            <div className="participant-avatar"></div>
                            <div className="participant-info">
                              <h5>{p.name}</h5>
                              <p>Contributed {p.contributed}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {tab === "updates" && (
                    <div className="tab-pane active" id="updates">
                      <div className="updates-list">
                        {project.details.updates.map((u: any, i: number) => (
                          <div className="update" key={i}>
                            <div className="update-date">{u.date}</div>
                            <h5>{u.title}</h5>
                            <p>{u.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [filters, setFilters] = useState({ category: "all", status: "all", material: "all", search: "" });
  const [modalProject, setModalProject] = useState<any>(null);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.id]: e.target.value });
  };

  const filteredProjects = projects.filter((p) => {
    let match = true;
    if (filters.category !== "all" && p.category.toLowerCase() !== filters.category) match = false;
    if (filters.status !== "all" && p.status.toLowerCase() !== filters.status) match = false;
    if (filters.material !== "all") {
      const mat = filters.material;
      if (
        !p.goal.toLowerCase().includes(mat)
      ) match = false;
    }
    if (filters.search && !p.title.toLowerCase().includes(filters.search.toLowerCase())) match = false;
    return match;
  });

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar" id="sidebar">
        <div className="sidebar-header">
          <Link href="/" className="logo">
            <div className="logo-icon">
              <i className="fas fa-recycle"></i>
            </div>
            <span className="logo-text">ReCircle</span>
          </Link>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link href="/dashboard">
                <i className="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/recycling">
                <i className="fas fa-recycle"></i>
                <span>Recycling</span>
              </Link>
            </li>
            <li>
              <Link href="/community">
                <i className="fas fa-users"></i>
                <span>Community</span>
              </Link>
            </li>
            <li className="active">
              <Link href="/projects">
                <i className="fas fa-hammer"></i>
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/marketplace">
                <i className="fas fa-store"></i>
                <span>Marketplace</span>
              </Link>
            </li>
            <li>
              <Link href="/tracker">
                <i className="fas fa-chart-bar"></i>
                <span>Tracker</span>
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <i className="fas fa-cog"></i>
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <Link href="/">
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Mobile Header */}
        <header className="mobile-header">
          <button className="menu-toggle" id="sidebar-toggle">
            <i className="fas fa-bars"></i>
          </button>
          <Link href="/" className="logo">
            <div className="logo-icon">
              <i className="fas fa-recycle"></i>
            </div>
            <span className="logo-text">ReCircle</span>
          </Link>
        </header>

        <div className="dashboard-content">
          <div className="projects-header">
            <div className="header-content">
              <h1>Community Projects</h1>
              <p>Help fund community upgrades by contributing recyclable materials</p>
            </div>
            <div className="header-actions">
              <button className="btn btn-outline">
                <i className="fas fa-lightbulb"></i>
                Suggest Project
              </button>
              <button className="btn btn-primary">
                <i className="fas fa-plus"></i>
                Create Project
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="projects-filters">
            <div className="filter-group">
              <label htmlFor="category">Category</label>
              <select id="category" value={filters.category} onChange={handleFilterChange}>
                {categories.map((cat) => (
                  <option value={cat.value} key={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="status">Status</label>
              <select id="status" value={filters.status} onChange={handleFilterChange}>
                {statuses.map((s) => (
                  <option value={s.value} key={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="material">Material Needed</label>
              <select id="material" value={filters.material} onChange={handleFilterChange}>
                {materials.map((m) => (
                  <option value={m.value} key={m.value}>{m.label}</option>
                ))}
              </select>
            </div>
            <div className="search-group">
              <input
                type="text"
                placeholder="Search projects..."
                id="search"
                value={filters.search}
                onChange={handleFilterChange}
              />
              <i className="fas fa-search"></i>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div className="project-card" key={project.id} data-project={project.id}>
                <div className="project-image" onClick={() => setModalProject(project.id === "rainwater-filter" ? project : null)}>
                  <Image src={project.image} alt={project.title} width={400} height={250} />
                  <div className={`project-status ${project.status.toLowerCase()}`}>{project.status}</div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-category">
                      <i className={project.categoryIcon}></i>
                      {project.category}
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-goal">
                    <div className="goal-header">
                      <span>Goal: {project.goal}</span>
                      <span className="goal-percentage">{project.goalPercentage}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: `${project.goalPercentage}%` }}></div>
                    </div>
                    <div className="goal-details">
                      <span>{project.collected} collected</span>
                      <span>{project.remaining} remaining</span>
                    </div>
                  </div>
                  <div className="project-stats">
                    <div className="stat">
                      <i className="fas fa-users"></i>
                      <span>{project.participants} participants</span>
                    </div>
                    <div className="stat">
                      <i className="fas fa-calendar"></i>
                      <span>{project.daysLeft > 0 ? `${project.daysLeft} days left` : "Completed"}</span>
                    </div>
                  </div>
                  <div className="project-actions">
                    <button className="btn btn-primary btn-sm">Participate</button>
                    <button className="btn btn-outline btn-sm">
                      <i className="fas fa-share"></i>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {modalProject && (
        <ProjectModal
          project={projects.find((p) => p.id === "rainwater-filter")}
          onClose={() => setModalProject(null)}
        />
      )}
    </div>
  );
}
