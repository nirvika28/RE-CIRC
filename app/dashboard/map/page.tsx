"use client";

import { useEffect } from "react";

const communities = [
  { id: 1, name: "Vrishi Inn", description: "A vibrant community near Allalasandra Lake." },
  { id: 2, name: "Food Planks", description: "Known for food drives and social events." },
  { id: 3, name: "Royal Orchid Resort", description: "Community with regular meetups." },
  // ...add more
];

export default function MapPage() {
  useEffect(() => {
    // Any client-side effects related to the map can be added here if needed
  }, []);

  return (
    <main className="map-page">
      <div className="content-row">
        {/* Communities List */}
        <aside className="communities-list">
          <h2>Communities</h2>
          <ul>
            {communities.map((community) => (
              <li key={community.id}>
                <strong>{community.name}</strong>
                <p>{community.description}</p>
              </li>
            ))}
          </ul>
        </aside>
        {/* Map */}
       <section className="map-container" style={{ position: 'relative' }}>
  <h1>Community Map</h1>
  <p>
    This map shows the communities and your current location. Hover over
    the markers for more details!
  </p>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.542382428193!2d77.5899319152997!3d13.08388391683706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae197b1c2d1c6b%3A0x8e2d3b3b2c3a5c9d!2sRMZ%20Galleria!5e0!3m2!1sen!2sin!4v1627894567890!5m2!1sen!2sin"
    style={{
      width: "100%",
      height: "500px",
      border: "none",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    }}
    loading="lazy"
    allowFullScreen=""
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  {/* Decorative trees/leaves */}
  <img
    src="/images/tree1.svg"
    alt=""
    className="tree tree-1"
    style={{
      position: 'absolute',
      left: 10,
      top: 30,
      width: 60,
      pointerEvents: 'none',
      opacity: 0.7
    }}
  />
  <img
    src="/images/tree2.svg"
    alt=""
    className="tree tree-2"
    style={{
      position: 'absolute',
      right: 10,
      bottom: 30,
      width: 80,
      pointerEvents: 'none',
      opacity: 0.7
    }}
  />
</section>

      </div>
      <style jsx>{`
        .map-page {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .content-row {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .communities-list {
          flex: 0 0 250px;
          background: #f7f7f7;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .communities-list h2 {
          margin-top: 0;
        }
        .communities-list ul {
          list-style: none;
          padding: 0;
        }
        .communities-list li {
          margin-bottom: 18px;
        }
        .map-container {
          flex: 1;
          min-width: 0;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </main>
  );
}
