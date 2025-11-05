import React from 'react';

const TrustBadgeBar = () => {
  return (
    <section className="py-12 bg-background-light dark:bg-background-dark">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 shadow-sm">
            <span className="material-symbols-outlined text-3xl text-primary">eco</span>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold">Natural Ingredients</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Pure, effective, and sustainably sourced.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 shadow-sm">
            <span className="material-symbols-outlined text-3xl text-primary">science</span>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold">Backed by Science</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Clinically-studied for proven results.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 shadow-sm">
            <span className="material-symbols-outlined text-3xl text-primary">spark</span>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold">Designed for 50+ Vitality</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Tailored to support your wellness journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgeBar;
