import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Iced Strawberry Matcha",
    category: "Matcha",
    desc: "Refreshing strawberry puree layered with premium organic matcha and oat milk.",
    price: "$5.50",
    img: "/iced-strawberry-matcha-.webp"
  },
  {
    id: 2,
    name: "Classic Iced Latte",
    category: "Coffee",
    desc: "Smooth espresso over ice with creamy whole milk and a touch of vanilla syrup.",
    price: "$4.50",
    img: "/iced latte.png"
  },
  {
    id: 3,
    name: "Mango Green Tea",
    category: "Tea",
    desc: "Tropical mango nectar shaken with iced green tea for a light, refreshing lift.",
    price: "$5.00",
    img: "/MANGO-TEA.webp"
  }
];

export default function Products() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Matcha', 'Coffee', 'Tea'];

  const filtered = activeTab === 'All' ? products : products.filter(p => p.category === activeTab);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase mb-6 tracking-tight">
            Just look at these drinks
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-bold border-b border-gray-100 pb-4">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-2 py-1 transition-colors ${activeTab === tab ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 pb-12">
          {filtered.map(product => (
            <div key={product.id} className="flex flex-col items-center text-center group">
              <div className="w-56 h-56 mb-8 relative rounded-full p-2 bg-white shadow-xl shadow-pink-100/50 transition-transform duration-300 group-hover:-translate-y-2">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-full mix-blend-multiply"
                />
              </div>
              
              <h3 className="font-bold text-lg text-text-main mb-3">{product.name}</h3>
              <p className="text-xs text-text-muted mb-6 leading-relaxed max-w-[250px]">
                {product.desc}
              </p>
              
              <button className="w-48 py-3 rounded-full bg-primary text-white font-bold tracking-wide hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all active:scale-95">
                View the Menu
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
