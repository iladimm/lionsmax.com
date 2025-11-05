import React from 'react';
import BundleCard from './BundleCard';

const bundles = [
  {
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8TFfSgWrq_UtgdkVdCbYMao_unw7S3aABoEiPgtmcyAiICipYWUv7AzMCtQmbj8wzLa2rolL-x4qTpcn0c6D5aOBiFOH-0qUeJArYDnfE96B0tWzMztOF2fhd7qb08Q7Aqi97xk-8okD_NZcDPJ-3hQ-jOmYUcIsqvJ1AStZFFzy0nmWohVnotrWbb0Eo182UkdP85Wgf5svEUQXtgWT5UXKJjTTuValgY2y9jIjWlaTHC8KQMbct5T-FYDIlzV58okWh5eplhw",
    alt: "Collection of three supplement bottles for vitality",
    name: "Vitality Starter Pack",
    price: "$79.99"
  },
  {
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC49LjW9pXuECQGVIoffGb_acAn5oVVNPKMZPPS33gYYHeGicGcxNps3HNckhBvKWSfThPwrTT6XxCfmKs20JXLukKL9dFCfnkjxr0fpGH-kWpFPINdYg1E4YT7-m_Tp5WjZygP7eQb81DbHaVhG72jdJ2JBnMmpxnIH8RvKKphyU5juvmhMl0tzpqNSd-UsMHR9gU_aULBqk8ELqXEOemUxKHyFtD3hcvd5eO7vVwg3-Yq6QE8N2bz6CuQ5cqg4P_aQlmSdRJvdw",
    alt: "Two supplement bottles for mind and body",
    name: "Mind & Body Duo",
    price: "$54.99"
  },
  {
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnGqjVEXB9mVZyz_6l5CwMNatuVzclWtglNHHUc2TxEhLfeuq8p0up0ZdRWU1Uq8xQ1tjTp6evstmU6ESoZZkpz_oR48B-h3dBiJNdMDNMle-2KbImNrQEXZ182aYQ7GQc8TD89vvffmHX1VJiA6UYMN4Ldemgo0H3bwiSnHQdWV0S0StRSET80mNTYG4gX6CwK7rgQvKfPPyN8N8B3IWJd2cSpt_jheqOIVQGU8wAU7B22gsxeQKaqVscmVckfQ2LLPMt8s1rrQ",
    alt: "Wellness set with yoga mat and water bottle",
    name: "Wellness Warrior Set",
    price: "$129.99"
  }
];

const BundlesSection = () => {
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
                alt={bundle.alt}
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

export default BundlesSection;
