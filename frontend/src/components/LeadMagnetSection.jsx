import React from 'react';
import LeadMagnetBackground from '../assets/lead-magnet-background.jpg';

const LeadMagnetSection = () => {
  return (
    <section
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${LeadMagnetBackground})` }}
    >
      <div className="bg-black/60 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlock Your Potential</h2>
          <p className="mb-8">Get your FREE "Daily Vitality Habits Checklist" and start building a healthier, more energetic you. Straight to your inbox!</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              className="flex-grow h-12 px-4 rounded-lg border-2 border-transparent focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
              placeholder="Enter your email address"
              required=""
              type="email"
            />
            <button
              className="flex-none min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-all"
              type="submit"
            >
              Download Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
