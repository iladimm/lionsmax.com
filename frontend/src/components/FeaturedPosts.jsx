import React from 'react';

const FeaturedPosts = () => {
  const posts = [
    "The Benefits of Omega-3s for Heart Health",
    "Top 5 Vitamins for Boosting Your Immune System",
    "How to Improve Your Sleep Quality Naturally",
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Featured Blog Posts</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{post}</h3>
                <a href="#" className="mt-4 inline-block text-brand-orange hover:text-brand-orange font-semibold">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
