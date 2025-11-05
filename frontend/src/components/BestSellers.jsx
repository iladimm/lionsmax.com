import React from 'react';
import ProductCard from './ProductCard';

const bestSellers = [
  {
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfI6i5JmVasu8vXzBGc_qaKWeATbfwzobx-MIC2bXFErKf8PLXZKv5vh5E-gIWhhFUWPrPOgdKa2INVEGxMASDBr5I3J3pPjS60PuFDwkdYTv5Q6d7I9RGrexqibPg9OsgWQohjP0F60ninNdAdfSKPse3NWPXD0MpgmnTGsw6CTcimt-dLTyZYq0Au5PlOk8f0th1gtg2OCj2X-mScij_YfdYHTcTe_dgLgpX3PJ_JdP7SnuK5Wf1EeS-NmDnPC_09_ih3xw5zA",
    alt: "Bottle of Omega-3 supplement",
    name: "Omega-3 Rich Formula",
    price: "$29.99"
  },
  {
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzQVj9C2gZKSjFqRft1UWOupYaP4ZAZBhxzkfg5NggtRmNtnELMZMKt4p_z9yY-W4GmyWzyxtCQQQ1Y9cXljaCm880Tt0bjvF52Wfq_6YfwYzoKR1i3dIDa0YWd61-1PhAl5CGmvCJtWwTSggA3AN77OXF8uaUGKGUozQ9Xru8IAPl46vEFXPpjG7HopLm5IyvH4S4-ubeVEelVx4G_nnHm2P6qCd-Vrq9XdN7yxOlR8fxPMOGtGXG_5cp_jxPQPIEzafkW9Duzw",
    alt: "Bottle of Vitamin D3 supplement",
    name: "Sunshine Vitamin D3",
    price: "$19.99"
  },
  {
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuZUjuL3fZb12kn-5qdvnnwNBjvwJveOIzX3J_b-Q1zd3CcqVTX3U0JPhOlLRapEPpwlXKBsUc9EhM0zSt9y7iMsWRvUluTwT7lwOGIAjYHkZUNHMZbV9loYNeWx9MVyh15WovOBvwOZjtW3tNNaD5Gt9siF6fZsNaUQtyJ3wx2AxJhRen9ZU8yeENxJ2JFVKVshW598Ky3NtZrXSqfzF4Hxv9BVVSiyOH8CNKftwwLfY5kHIykCVEpuHI0p2-dvme9oGpvNaLmQ",
    alt: "Bottle of Probiotic supplement",
    name: "Advanced Probiotic Blend",
    price: "$34.99"
  },
  {
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8o3Esm_iF1qERW-760VdCBn6E420SRKyvzA6ppXvm_2Xl-GKZ99DwE82NS8eq37DyvCC1QQISUXKuZVuBam3fWmE8f_UUidBe7AWLbzqocoh1NU36JiDN8AkittHuBlgojL7r0q7J1TPG_b0EMz50mzuLVz16GTK7aZrR7iXf4czZCKfrpZoG4Cn4U10YXw-1OfFyO-yvaSxQnf0cuto-qNtW-LgE-MXO-QIVjWpE1yoQQsYwUZcfmf5VlQJJMz8aVIfXB1tE4A",
    alt: "Bottle of Turmeric supplement",
    name: "Turmeric Joint Complex",
    price: "$27.99"
  }
];

const BestSellers = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              alt={product.alt}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
