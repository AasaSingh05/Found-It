import React from 'react';

interface CardProps {
  title: string;
  location: string;
  time: string;
  image: string; 
  locationLabel?: string; // New optional prop for location label
}

const Card: React.FC<CardProps> = ({ title, location, time, image, locationLabel = "Found at" }) => {
  return (
    <div
      className="bg-[#28AFB096] p-4 rounded-lg shadow-md"
      style={{ width: '330px', height: '310px' }} // Fixed card size
    >
      <img
        src={image} // Use the image prop
        alt={title}
        className="rounded-lg mb-4"
        style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Fixed image size
      />
      <h5 className="text-[#19647E] text-lg font-semibold">{title}</h5>
      <p className="text-sm">{locationLabel}: {location}</p> {/* Customizable label */}
      <p className="text-sm">Time: {time}</p>
    </div>
  );
};

export default Card;
