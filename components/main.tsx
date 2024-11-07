'use client';

import React from 'react';
import Sidebar from './Sidebar';
import Card from './Card';

const Main: React.FC = () => {
  // Scroll handler function to scroll horizontally with mouse wheel
  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white-100 flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-grow p-6 overflow-x-hidden">
        <header className="flex justify-between items-start mb-6">
          <h1 className="text-5xl p-8 font-bold text-cyan-900">
            Welcome <br />
            <span className="text-[#19647E]">User_name</span>
          </h1>

          <img src="/assets/paperplane.png" className="w-150 h-40" />
        </header>

        {/* Recently Found Section */}
        <section className="mb-10">
          <h2 className="text-2xl text-cyan-900 font-bold mb-4">Recently found</h2>
          <div
            className="flex space-x-6 overflow-x-auto px-2 py-4 scroll-smooth"
            onWheel={handleScroll}
          >
            <Card
              image="/assets/earbuds.jpg"
              title="Earbuds"
              location="Cafeteria"
              time="18:30"
              locationLabel="Found at"
            />
            <Card
              image="/assets/wallet.jpg"
              title="Wallet"
              location="Library"
              time="12:00"
              locationLabel="Found at"
            />
            <Card
              image="/assets/umbrella.jpg"
              title="Umbrella"
              location="Gym"
              time="15:45"
              locationLabel="Found at"
            />
            <Card
              image ="/assets/glasses.jpg"
              title="Glasses"
              location="Cafe"
              time="16:30"
              locationLabel="Found at"
            />
          </div>
        </section>

        {/* Recently Lost Section */}
        <section>
          <h2 className="text-2xl text-cyan-900 font-bold mb-4">Recently lost</h2>
          <div
            className="flex space-x-6 overflow-x-auto px-2 py-4 scroll-smooth"
            onWheel={handleScroll}
          >
            {/* Individual Cards */}
            <Card
              image="/assets/laptop.jpg"
              title="Laptop"
              location="Classroom"
              time="11:15"
              locationLabel="Lost at"
            />
            <Card
              image="/assets/keys.jpg"
              title="Keys"
              location="Hostel Gate"
              time="13:40"
              locationLabel="Lost at"
            />
            <Card
              image="/assets/backpack.jpg"
              title="Backpack"
              location="Library"
              time="09:20"
              locationLabel="Lost at"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
