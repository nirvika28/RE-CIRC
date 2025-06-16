// app/tracker/page.tsx

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { icon: "fas fa-fire", value: 14, label: "Current Streak" },
  { icon: "fas fa-trophy", value: 28, label: "Longest Streak" },
  { icon: "fas fa-calendar-check", value: 89, label: "Total Days" },
  { icon: "fas fa-percentage", value: "73%", label: "This Month" }
];

const achievements = [
  {
    icon: "fas fa-seedling",
    title: "First Steps",
    desc: "Complete your first day of waste segregation",
    date: "Earned 3 months ago",
    earned: true
  },
  {
    icon: "fas fa-fire",
    title: "Week Warrior",
    desc: "Maintain a 7-day segregation streak",
    date: "Earned 2 months ago",
    earned: true
  },
  {
    icon: "fas fa-calendar-alt",
    title: "Monthly Master",
    desc: "Segregate waste for 30 consecutive days",
    date: "Earned 1 month ago",
    earned: true
  },
  {
    icon: "fas fa-crown",
    title: "Century Club",
    desc: "Reach 100 total segregation days",
    progress: "89/100 days",
    earned: false
  },
  {
    icon: "fas fa-star",
    title: "Perfect Month",
    desc: "Complete every day in a calendar month",
    progress: "22/31 days this month",
    earned: false
  },
  {
    icon: "fas fa-trophy",
    title: "Streak Legend",
    desc: "Maintain a 50-day streak",
    progress: "14/50 days",
    earned: false
  }
];

const videos = [
  {
    img: "https://source.unsplash.com/300x200/?recycling,education",
    title: "Waste Segregation Basics",
    desc: "Learn the fundamentals of proper waste separation",
    duration: "5:30",
    views: "1.2k"
  },
  {
    img: "https://source.unsplash.com/300x200/?composting,organic",
    title: "Composting at Home",
    desc: "Turn your organic waste into nutrient-rich compost",
    duration: "8:15",
    views: "890"
  },
  {
    img: "https://source.unsplash.com/300x200/?plastic,recycling",
    title: "Plastic Recycling Guide",
    desc: "Understanding plastic types and recycling codes",
    duration: "6:45",
    views: "2.1k"
  }
];

const guides = [
  {
    icon: "fas fa-recycle",
    title: "Complete Waste Segregation Guide",
    desc: "A comprehensive guide to separating different types of waste materials effectively.",
    tags: ["Beginner", "Essential"]
  },
  {
    icon: "fas fa-leaf",
    title: "Organic Waste Management",
    desc: "Learn how to handle kitchen scraps, garden waste, and other organic materials.",
    tags: ["Intermediate", "Composting"]
  },
  {
    icon: "fas fa-microchip",
    title: "E-Waste Disposal",
    desc: "Safe and responsible disposal of electronic waste and batteries.",
    tags: ["Advanced", "Safety"]
  }
];

const quiz = {
  question: "Which bin should you use for food scraps and vegetable peels?",
  options: [
    { value: "a", label: "Blue bin (Recyclable)" },
    { value: "b", label: "Green bin (Organic)" },
    { value: "c", label: "Red bin (General waste)" },
    { value: "d", label: "Yellow bin (Hazardous)" }
  ],
  current: 1,
  total: 5,
  progress: 20
};

const tips = [
  {
    icon: "fas fa-lightbulb",
    title: "Clean Before Recycling",
    desc: "Always rinse containers before putting them in recycling bins to avoid contamination."
  },
  {
    icon: "fas fa-clock",
    title: "Set Daily Reminders",
    desc: "Use phone reminders to build a consistent habit of checking your waste segregation."
  },
  {
    icon: "fas fa-users",
    title: "Involve Your Family",
    desc: "Make waste segregation a family activity to increase consistency and awareness."
  },
  {
    icon: "fas fa-tags",
    title: "Label Your Bins",
    desc: "Clear labeling helps everyone in your household segregate waste correctly."
  },
  {
    icon: "fas fa-chart-line",
    title: "Track Your Progress",
    desc: "Regular tracking helps maintain motivation and identify areas for improvement."
  },
  {
    icon: "fas fa-recycle",
    title: "Learn Local Rules",
    desc: "Different areas have different recycling rules. Know your local guidelines."
  }
];

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const days = ["Mon", "Wed", "Fri"];

function HeatmapGrid() {
  // Example: 53 weeks x 7 days = 371 squares, but only 365 used
  const totalDays = 365;
  const squares = [];
  for (let i = 0; i < totalDays; i++) {
    // Assign a random level for demo
    const level = Math.floor(Math.random() * 5);
    squares.push(
      <div key={i} className={`heatmap-square level-${level}`}></div>
    );
  }
  return <div className="heatmap-grid">{squares}</div>;
}

export default function TrackerPage() {
  const [tab, setTab] = useState("videos");
  const [quizAnswer, setQuizAnswer] = useState("");

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
            <li>
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
            <li className="active">
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
          <div className="tracker-header">
            <div className="header-content">
              <h1>Waste Segregation Tracker</h1>
              <p>Track your daily waste segregation habits and build sustainable streaks</p>
            </div>
            <div className="header-actions">
              <button className="btn btn-primary" id="markTodayBtn">
                <i className="fas fa-check"></i>
                Mark Today
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="tracker-stats">
            {stats.map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-icon">
                  <i className={s.icon}></i>
                </div>
                <div className="stat-content">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Heatmap Section */}
          <div className="heatmap-section">
            <div className="heatmap-header">
              <h2>365 Day Activity</h2>
              <div className="heatmap-legend">
                <span>Less</span>
                <div className="legend-squares">
                  {[0,1,2,3,4].map((level) => (
                    <div key={level} className={`legend-square level-${level}`}></div>
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
            <div className="heatmap-container">
              <div className="heatmap-months">
                {months.map((m) => <span key={m}>{m}</span>)}
              </div>
              <HeatmapGrid />
              <div className="heatmap-days">
                {days.map((d) => <span key={d}>{d}</span>)}
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="achievements-section">
            <h2>Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((a, i) => (
                <div className={`achievement-card${a.earned ? " earned" : ""}`} key={i}>
                  <div className="achievement-icon">
                    <i className={a.icon}></i>
                  </div>
                  <div className="achievement-content">
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                    {a.earned ? (
                      <div className="achievement-date">{a.date}</div>
                    ) : (
                      <div className="achievement-progress">{a.progress}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Content Section */}
          <div className="education-section">
            <h2>Learn &amp; Improve</h2>
            <div className="education-tabs">
              <div className="tab-list">
                <button className={`tab${tab === "videos" ? " active" : ""}`} onClick={() => setTab("videos")}>Videos</button>
                <button className={`tab${tab === "guides" ? " active" : ""}`} onClick={() => setTab("guides")}>Guides</button>
                <button className={`tab${tab === "quiz" ? " active" : ""}`} onClick={() => setTab("quiz")}>Quiz</button>
                <button className={`tab${tab === "tips" ? " active" : ""}`} onClick={() => setTab("tips")}>Tips</button>
              </div>
              {/* Videos Tab */}
              {tab === "videos" && (
                <div className="tab-pane active" id="videos">
                  <div className="content-grid">
                    {videos.map((v, i) => (
                      <div className="content-card" key={i}>
                        <div className="content-thumbnail">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={v.img} alt={v.title} />
                          <div className="play-button">
                            <i className="fas fa-play"></i>
                          </div>
                        </div>
                        <div className="content-info">
                          <h4>{v.title}</h4>
                          <p>{v.desc}</p>
                          <div className="content-meta">
                            <span><i className="fas fa-clock"></i> {v.duration}</span>
                            <span><i className="fas fa-eye"></i> {v.views} views</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Guides Tab */}
              {tab === "guides" && (
                <div className="tab-pane active" id="guides">
                  <div className="guides-list">
                    {guides.map((g, i) => (
                      <div className="guide-item" key={i}>
                        <div className="guide-icon">
                          <i className={g.icon}></i>
                        </div>
                        <div className="guide-content">
                          <h4>{g.title}</h4>
                          <p>{g.desc}</p>
                          <div className="guide-tags">
                            {g.tags.map((tag, j) => (
                              <span className="tag" key={j}>{tag}</span>
                            ))}
                          </div>
                        </div>
                        <button className="btn btn-outline btn-sm">Read Guide</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Quiz Tab */}
              {tab === "quiz" && (
                <div className="tab-pane active" id="quiz">
                  <div className="quiz-container">
                    <div className="quiz-header">
                      <h3>Test Your Knowledge</h3>
                      <p>Take our interactive quiz to test your waste segregation knowledge</p>
                    </div>
                    <div className="quiz-question">
                      <h4>Question {quiz.current} of {quiz.total}</h4>
                      <p>{quiz.question}</p>
                      <div className="quiz-options">
                        {quiz.options.map((opt) => (
                          <label className="quiz-option" key={opt.value}>
                            <input
                              type="radio"
                              name="q1"
                              value={opt.value}
                              checked={quizAnswer === opt.value}
                              onChange={() => setQuizAnswer(opt.value)}
                            />
                            <span className="option-text">{opt.label}</span>
                          </label>
                        ))}
                      </div>
                      <div className="quiz-actions">
                        <button className="btn btn-primary">Next Question</button>
                      </div>
                    </div>
                    <div className="quiz-progress">
                      <div className="progress-bar">
                        <div className="progress" style={{ width: `${quiz.progress}%` }}></div>
                      </div>
                      <span>{quiz.current}/{quiz.total} Questions</span>
                    </div>
                  </div>
                </div>
              )}
              {/* Tips Tab */}
              {tab === "tips" && (
                <div className="tab-pane active" id="tips">
                  <div className="tips-grid">
                    {tips.map((t, i) => (
                      <div className="tip-card" key={i}>
                        <div className="tip-icon">
                          <i className={t.icon}></i>
                        </div>
                        <h4>{t.title}</h4>
                        <p>{t.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
