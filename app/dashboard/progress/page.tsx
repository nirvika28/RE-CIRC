"use client";

import React, { useState } from "react";

import {
    Leaf,
    Trophy,
    Users,
    Coins,
    Sprout,
    Compass,
    Star,
    Recycle,
  } from "lucide-react";
  
  
const levels = [
  {
    title: "Eco Learner",
    icon: <Sprout className="h-5 w-5 text-green-700" />,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=200&fit=crop",
    description: "Just getting started: learns to identify and segregate waste correctly with app guidance.",
    reward: 10,
  },
  {
    title: "Eco Explorer",
    icon: <Compass className="h-5 w-5 text-green-700" />,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop",
    description: "Actively participates in recycling, upcycling, and begins donating or exchanging items.",
    reward: 20,
  },
  {
    title: "Eco Champion",
    icon: <Trophy className="h-5 w-5 text-yellow-600" />,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
    description: "Consistently engages in sustainable habits, inspires peers, and earns high-impact eco-coin rewards.",
    reward: 30,
  },
  {
    title: "Eco Enabler",
    icon: <Users className="h-5 w-5 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
    description: "Drives change by contributing ideas, leading community projects, and mentoring others.",
    reward: 40,
  },
];

const communityTasks = [
  {
    title: "Compost Bin",
    icon: <Recycle className="h-5 w-5 text-green-600" />,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
    description: "Help create a compost bin for the community garden and reduce organic waste.",
    maxCoins: 15,
    id: "compost-bin",
  },
  {
    title: "Recycling Program",
    icon: <Leaf className="h-5 w-5 text-green-600" />,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=200&fit=crop",
    description: "Help implement a comprehensive recycling program for the entire community.",
    maxCoins: 15,
    id: "recycling-program",
  },
];

export default function ProgressPage() {
  const [showEcoCoins, setShowEcoCoins] = useState(false);
  const [taskProgress, setTaskProgress] = useState({ "compost-bin": 0, "recycling-program": 0 });

  const totalCoins = taskProgress["compost-bin"] + taskProgress["recycling-program"];
  const maxCoins = 30;
  const progressPercent = Math.floor((totalCoins / maxCoins) * 100);

  const handleSlider = (taskId: string, value: number) => {
    setTaskProgress((prev) => ({ ...prev, [taskId]: value }));
  };

  return (
    <div className="pb-10 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      {/* Header */}
      <nav className="bg-gradient-to-r from-green-700 to-green-600 shadow-lg sticky top-0 z-40 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-center px-4">
          <span className="text-white text-2xl font-bold flex items-center gap-2">
            <Leaf className="h-6 w-6" />
            Sustainability Levels
          </span>
        </div>
      </nav>

      {/* Eco Coins Section */}
      <section className="max-w-2xl mx-auto mt-8 px-4">
        <button
          className="w-full bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
          onClick={() => setShowEcoCoins((v) => !v)}
        >
          💰 Eco Coins Balance
        </button>
        {showEcoCoins && (
          <div className="bg-white rounded-2xl shadow-lg border mt-4 p-8 animate-fade-in">
            {/* Current Balance */}
            <div className="mb-8">
              <div className="text-lg font-semibold flex items-center gap-2">
                Current Balance:
              </div>
              <div className="text-2xl font-bold text-green-600">50 Eco Coins</div>
              <div className="italic text-gray-500 mt-1">
                Your sustainable actions are making a real difference! Every coin earned reflects your positive impact on the planet and your community.
              </div>
            </div>
            {/* Achievements */}
            <div className="mb-8">
              <div className="text-lg font-semibold flex items-center gap-2">🌱 Recent Achievements</div>
              <ul>
                <li className="bg-gray-50 rounded-lg border-l-4 border-green-700 p-4 mb-2">
                  <span className="font-semibold">Recycled plastic bottles: +5 coins</span>
                  <div className="text-gray-500 text-sm">Kept waste out of landfills and contributed to a cleaner environment.</div>
                </li>
                <li className="bg-gray-50 rounded-lg border-l-4 border-green-700 p-4 mb-2">
                  <span className="font-semibold">Donated clothes to charity: +5 coins</span>
                  <div className="text-gray-500 text-sm">Extended the life of clothing and supported those in need.</div>
                </li>
                <li className="bg-gray-50 rounded-lg border-l-4 border-green-700 p-4 mb-2">
                  <span className="font-semibold">Upcycled old t-shirts: +10 coins</span>
                  <div className="text-gray-500 text-sm">Transformed waste into something useful and creative.</div>
                </li>
                <li className="bg-gray-50 rounded-lg border-l-4 border-green-700 p-4">
                  <span className="font-semibold">Joined a community clean-up: +15 coins</span>
                  <div className="text-gray-500 text-sm">Helped restore your local area and inspired others to join the cause.</div>
                </li>
              </ul>
            </div>
            {/* Milestones */}
            <div className="mb-8">
              <div className="text-lg font-semibold flex items-center gap-2">🏆 Your Sustainability Milestones</div>
              <ul>
                <li className="bg-yellow-100 rounded-lg p-3 mb-2 font-medium"><b>Eco Hero:</b> Completed 5 unique eco-friendly actions</li>
                <li className="bg-yellow-100 rounded-lg p-3 mb-2 font-medium"><b>Community Champion:</b> Participated in 3 group challenges</li>
                <li className="bg-yellow-100 rounded-lg p-3 mb-2 font-medium"><b>Carbon Saver:</b> Reduced your carbon footprint by 10kg this month</li>
                <li className="bg-yellow-100 rounded-lg p-3 font-medium"><b>Marketplace Contributor:</b> Redeemed coins for eco-friendly products or donated to green causes</li>
              </ul>
            </div>
            {/* Impact at a Glance */}
            <div className="mb-8">
              <div className="text-lg font-semibold flex items-center gap-2">🌍 Impact at a Glance</div>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="bg-gradient-to-r from-green-700 to-green-600 text-white rounded-lg p-4 text-center shadow">
                  <div className="text-xl font-bold">2,500</div>
                  <div className="text-sm">Total Community Coins</div>
                </div>
                <div className="bg-gradient-to-r from-green-700 to-green-600 text-white rounded-lg p-4 text-center shadow">
                  <div className="text-xl font-bold">20</div>
                  <div className="text-sm">Trees Planted</div>
                </div>
                <div className="bg-gradient-to-r from-green-700 to-green-600 text-white rounded-lg p-4 text-center shadow">
                  <div className="text-xl font-bold">1,200</div>
                  <div className="text-sm">Bottles Recycled</div>
                </div>
                <div className="bg-gradient-to-r from-green-700 to-green-600 text-white rounded-lg p-4 text-center shadow">
                  <div className="text-xl font-bold">150 kg</div>
                  <div className="text-sm">CO₂ Offset</div>
                </div>
              </div>
              <div className="italic text-gray-500 mt-3">
                Track your real-world impact and see how your actions contribute to a greener future.
              </div>
            </div>
            {/* Redeem Options */}
            <div>
              <div className="text-lg font-semibold flex items-center gap-2">🎁 Redeem Your Coins</div>
              <div className="bg-gray-100 rounded-lg p-4 mt-2">
                <div className="mb-2"><b>Fund Community Projects:</b> Use your combined Eco Coins to unlock new green infrastructure—like a community compost bin, water refill station, or shared gardening tools.</div>
                <div className="mb-2"><b>Organize Environmental Events:</b> Redeem coins to host tree-planting days, neighborhood clean-ups, or sustainability workshops that benefit all residents.</div>
                <div><b>Upgrade Shared Spaces:</b> Invest in eco-friendly playground upgrades, bike racks, or green spaces that everyone can enjoy.</div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Main Card */}
      <section className="max-w-4xl mx-auto mt-8 px-4">
        <div className="rounded-2xl shadow-xl border bg-white overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-700 to-green-600 text-white text-center py-10 px-6 relative">
            <div className="relative z-10">
              <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
                <Sprout className="h-7 w-7" />
                Sustainability Journey
              </h1>
              <p className="text-lg opacity-90 max-w-xl mx-auto mt-2">
                Progress through gamified sustainability levels and encourage long-term behaviour change
              </p>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="p-8 bg-white">
            <div className="bg-gray-100 h-4 rounded-lg overflow-hidden shadow-inner">
              <div
                className="h-4 bg-gradient-to-r from-green-700 to-yellow-400 rounded-lg transition-all"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <div className="text-center mt-3 font-semibold text-gray-600">{progressPercent}% Complete</div>
          </div>
          {/* Levels */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {levels.map((level, idx) => (
                <div key={idx} className="rounded-2xl border shadow-md hover:shadow-xl transition cursor-pointer bg-white overflow-hidden">
                  <img src={level.image} alt={level.title} className="w-full h-40 object-cover" />
                  <div className="p-6">
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-2">{level.icon}{level.title}</h2>
                    <p className="text-gray-600 mb-3">{level.description}</p>
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded font-semibold text-sm">
                      <Coins className="h-4 w-4" />
                      Reward: {level.reward} coins
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Community Tasks */}
          <div className="p-8 border-t bg-gray-50">
            <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2 mb-6">
              <Users className="h-6 w-6" />
              Community Tasks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {communityTasks.map((task) => (
                <div key={task.id} className="rounded-2xl border shadow-lg bg-white overflow-hidden">
                  <img src={task.image} alt={task.title} className="w-full h-40 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-2">{task.icon}{task.title}</h3>
                    <p className="text-gray-600 mb-4">{task.description}</p>
                    <input
                      type="range"
                      min={0}
                      max={task.maxCoins}
                      value={taskProgress[task.id]}
                      onChange={(e) => handleSlider(task.id, Number(e.target.value))}
                      className="w-full accent-green-600"
                    />
                    <div className="font-semibold mt-2">Progress: {taskProgress[task.id]}/{task.maxCoins}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Success Message */}
            {(taskProgress["compost-bin"] === 15 || taskProgress["recycling-program"] === 15) && (
              <div className="mt-8 bg-gradient-to-r from-green-700 to-green-600 text-white rounded-2xl py-8 px-6 text-center shadow-lg animate-fade-in">
                <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-2">
                  <Star className="h-6 w-6 text-yellow-400" />
                  Congratulations!
                </h2>
                <p>You have unlocked the community task and earned 50 eco-coins for your contribution!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
