"use client";

import React, { useState } from "react";
import { Heart, Plus, Search, Store, Hammer, Users, LayoutDashboard, Recycle, Calendar, Map, Settings, LogOut, BarChart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = [
  "All Categories", "Furniture", "Electronics", "Clothing", "Books", "Home & Garden", "Sports"
];
const conditions = [
  "All Conditions", "Like New", "Good", "Fair", "Upcycled"
];
const prices = [
  "All Prices", "Free", "₹0 - ₹25", "₹25 - ₹100", "₹100 - ₹500", "₹500+"
];
const locations = [
  "All Locations", "Within 1km", "Within 5km", "Within 10km"
];

const items = [
  {
    title: "Vintage Wooden Chair",
    price: "₹150",
    condition: "Upcycled • Like New",
    location: "2.3km away",
    badges: ["Upcycled"],
    ecoScore: 9.2,
    image: "/images/chair.avif",
    seller: { name: "Sarah J.", rating: 4.8 }
  },
  {
    title: "Refurbished Laptop",
    price: "₹2,500",
    condition: "Electronics • Good",
    location: "1.8km away",
    badges: ["Refurbished"],
    ecoScore: 8.5,
    image: "/images/laptop.avif",
    seller: { name: "Mike R.", rating: 4.9 }
  },
  // ...add more items as needed
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [condition, setCondition] = useState(conditions[0]);
  const [price, setPrice] = useState(prices[0]);
  const [location, setLocation] = useState(locations[0]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (reuse your sidebar component in production) */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r">
        <div className="flex items-center px-4 py-4 border-b">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center">
              <Recycle className="text-white" />
            </div>
            <span className="font-bold text-xl text-green-800">ReCircle</span>
          </Link>
        </div>
        <nav className="flex-1 px-2 py-4">
          <ul className="space-y-1">
            <li><Link href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-green-50"><LayoutDashboard className="h-5 w-5" />Dashboard</Link></li>
            <li><Link href="/dashboard/recycling" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-green-50"><Recycle className="h-5 w-5" />Recycling</Link></li>
            <li><Link href="/dashboard/community" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-green-50"><Users className="h-5 w-5" />Community</Link></li>
            <li><Link href="/dashboard/projects" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-green-50"><Hammer className="h-5 w-5" />Projects</Link></li>
            <li><Link href="/dashboard/marketplace" className="flex items-center gap-2 px-3 py-2 rounded bg-green-100 text-green-700"><Store className="h-5 w-5" />Marketplace</Link></li>
            <li><Link href="/dashboard/progress" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-green-50"><BarChart className="h-5 w-5" />Progress</Link></li>
            <li><Link href="/dashboard/events" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-green-50"><Calendar className="h-5 w-5" />Events</Link></li>
            <li><Link href="/dashboard/map" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-green-50"><Map className="h-5 w-5" />Local Map</Link></li>
            <li><Link href="/dashboard/settings" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-green-50"><Settings className="h-5 w-5" />Settings</Link></li>
          </ul>
        </nav>
        <div className="p-4 border-t">
          <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 text-gray-600"><LogOut className="h-5 w-5" />Logout</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Eco Marketplace</h1>
            <p className="text-gray-600">Buy, sell, and trade pre-owned items in your community</p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline flex items-center gap-2 border rounded px-3 py-2"><Heart className="h-4 w-4" />Wishlist (3)</button>
            <button className="btn btn-primary flex items-center gap-2 bg-green-600 text-white rounded px-3 py-2"><Plus className="h-4 w-4" />List Item</button>
          </div>
        </header>

        {/* Search & Filters */}
        <section className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 flex items-center border rounded px-3 py-2 bg-white">
            <Search className="h-4 w-4 mr-2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for items..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 outline-none"
            />
          </div>
          <select value={category} onChange={e => setCategory(e.target.value)} className="border rounded px-2 py-1">
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={condition} onChange={e => setCondition(e.target.value)} className="border rounded px-2 py-1">
            {conditions.map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={price} onChange={e => setPrice(e.target.value)} className="border rounded px-2 py-1">
            {prices.map(p => <option key={p}>{p}</option>)}
          </select>
          <select value={location} onChange={e => setLocation(e.target.value)} className="border rounded px-2 py-1">
            {locations.map(l => <option key={l}>{l}</option>)}
          </select>
        </section>

        {/* Items Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded shadow p-4 flex flex-col">
              <div className="relative">
                <img src={item.image} alt={item.title} className="rounded object-cover w-full h-40" />
                <div className="absolute top-2 left-2 flex gap-2">
                  {item.badges?.map(badge => (
                    <span key={badge} className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">{badge}</span>
                  ))}
                </div>
                <span className="absolute top-2 right-2 bg-white bg-opacity-80 rounded px-2 py-1 text-xs font-semibold">Eco Score: {item.ecoScore}</span>
                <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow"><Heart className="h-4 w-4 text-gray-400" /></button>
              </div>
              <div className="mt-4 flex-1 flex flex-col">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-green-700 font-bold">{item.price}</p>
                <p className="text-xs text-gray-500">{item.condition}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1"><Map className="h-3 w-3" />{item.location}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full" />
                  <span className="text-xs">{item.seller.name}</span>
                  <span className="flex items-center text-xs text-yellow-600"><StarIcon />{item.seller.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

// Star icon for ratings
function StarIcon() {
  return <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.36 13.95,11.64 16.54,18 10,13.72 3.46,18 6.05,11.64 0.49,7.36 7.41,7.36" /></svg>;
}
