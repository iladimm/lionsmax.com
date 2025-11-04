import React from 'react';
import VitalityPack from '../assets/vitality-pack.png';
import MindBodyDuo from '../assets/mind-body-duo.png';
import WellnessWarriorSet from '../assets/wellness-warrior-set.png';

const BundlesSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800/50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Save with Bundles</h2>
        <div className="overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-6">
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-background-light dark:bg-gray-800 shadow-lg min-w-64">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
                style={{ backgroundImage: `url(${VitalityPack})` }}
                data-alt="Collection of three supplement bottles for vitality"
              ></div>
              <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                <div>
                  <p className="font-medium">Vitality Starter Pack</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">$79.99</p>
                </div>
                <button className="w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold hover:bg-primary/30 transition-colors">
                  <span className="truncate">View Bundle</span>
                </button>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-background-light dark:bg-gray-800 shadow-lg min-w-64">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
                style={{ backgroundImage: `url(${MindBodyDuo})` }}
                data-alt="Two supplement bottles for mind and body"
              ></div>
              <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                <div>
                  <p className="font-medium">Mind & Body Duo</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">$54.99</p>
                </div>
                <button className="w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold hover:bg-primary/30 transition-colors">
                  <span className="truncate">View Bundle</span>
                </button>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-background-light dark:bg-gray-800 shadow-lg min-w-64">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
                style={{ backgroundImage: `url(${WellnessWarriorSet})` }}
                data-alt="Wellness set with yoga mat and water bottle"
              ></div>
              <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                <div>
                  <p className="font-medium">Wellness Warrior Set</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">$129.99</p>
                </div>
                <button className="w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold hover:bg-primary/30 transition-colors">
                  <span className="truncate">View Bundle</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;
