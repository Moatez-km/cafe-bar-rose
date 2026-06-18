import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Iced Strawberry Matcha",
    category: "Matcha",
    desc: "Erfrischendes Erdbeerpüree geschichtet mit feinstem Bio-Matcha und Hafermilch.",
    price: "$5.50",
    img: "/iced-strawberry-matcha-.webp"
  },
  {
    id: 2,
    name: "Classic Iced Latte",
    category: "Kaffee",
    desc: "Milder Espresso auf Eis mit cremiger Vollmilch und einer Note Vanillesirup.",
    price: "$4.50",
    img: "/iced latte.png"
  },
  {
    id: 3,
    name: "Mango Green Tea",
    category: "Tee",
    desc: "Tropischer Mangonektar geschüttelt mit Eistee (Grüntee) für einen leichten, erfrischenden Kick.",
    price: "$5.00",
    img: "/MANGO-TEA.webp"
  }
];

export default function Products() {
  const [activeTab, setActiveTab] = useState('Alle');
  const tabs = ['Alle', 'Matcha', 'Kaffee', 'Tee'];

  const filtered = activeTab === 'Alle' ? products : products.filter(p => p.category === activeTab);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase mb-6 tracking-tight">
            Werfen Sie einen Blick auf diese Getränke
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
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <h3 className="font-bold text-lg text-text-main mb-3">{product.name}</h3>
              <p className="text-xs text-text-muted leading-relaxed max-w-[250px]">
                {product.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Centered Menu button */}
        <div className="flex justify-center mt-6">
          <button className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95 cursor-pointer">
            Menü ansehen
          </button>
        </div>
      </div>
    </section>
  );
}
