import React from 'react';
import BundleCard from './BundleCard';
import VitalityPack from '../assets/vitality-pack.jpg';
import MindBodyDuo from '../assets/mind-body-duo.jpg';
import WellnessWarriorSet from '../assets/wellness-warrior-set.jpg';

const Bundles = () => {
  const bundles = [
    {
      imageUrl: VitalityPack,
      altText: 'Collection of three supplement bottles for vitality',
      name: 'Vitality Starter Pack',
      price: '$79.99',
    },
    {
      imageUrl: MindBodyDuo,
      altText: 'Two supplement bottles for mind and body',
      name: 'Mind & Body Duo',
      price: '$54.99',
    },
    {
      imageUrl: WellnessWarriorSet,
      altText: 'Wellness set with yoga mat and water bottle',
      name: 'Wellness Warrior Set',
      price: '$129.99',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800/50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Save with Bundles</h2>
        <div className="overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-6">
            {bundles.map((bundle, index) => (
              <BundleCard
                key={index}
                imageUrl={bundle.imageUrl}
                altText={bundle.altText}
                name={bundle.name}
                price={bundle.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bundles;
