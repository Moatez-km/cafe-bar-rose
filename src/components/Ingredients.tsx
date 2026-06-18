export default function Ingredients() {
  return (
    <section className="relative w-full bg-light-pink overflow-hidden pt-24 pb-32">
      {/* Top Wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C10,2.15,20.08,4.61,30.2,7.26,113.88,29.13,205.86,49.25,289.4,53.25C300,53.86,310.66,54.94,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary uppercase mb-4 tracking-tight">
          The Secret of Our Drinks<br className="hidden md:block"/> in Natural Ingredients
        </h2>
        <p className="text-text-muted font-medium mb-16 md:mb-24">
          • We use only high-quality fresh ingredients<br/>
          • Real fruit purees, never artificial syrups
        </p>

        <div className="relative flex flex-col md:flex-row items-center justify-center min-h-[500px]">
          
          {/* Center Image */}
          <div className="absolute md:relative z-0 w-64 h-64 md:w-[450px] md:h-[450px] rounded-full shadow-2xl mix-blend-multiply bg-white/50 backdrop-blur-sm p-4 flex items-center justify-center opacity-20 md:opacity-100">
             <img 
               src="https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop" 
               alt="Natural Ingredients Drink"
               className="w-full h-full object-cover rounded-full mix-blend-multiply"
             />
          </div>

          {/* Left Labels */}
          <div className="relative z-10 w-full md:absolute md:left-[10%] flex flex-col gap-12 text-left md:w-1/3 mt-64 md:mt-0 px-4 md:px-0">
             <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-sm text-primary mb-1">Premium Matcha</h4>
                <p className="text-xs text-text-muted">Ceremonial grade from Japan for vibrant color and energy.</p>
             </div>
             <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-sm text-primary mb-1">Fresh Fruit Puree</h4>
                <p className="text-xs text-text-muted">Muddled daily in-house for authentic, bright flavors.</p>
             </div>
          </div>

          {/* Right Labels */}
          <div className="relative z-10 w-full md:absolute md:right-[10%] flex flex-col gap-12 text-left md:text-right mt-12 md:mt-0 md:w-1/3 px-4 md:px-0">
             <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-sm text-primary mb-1">Plant-Based Milks</h4>
                <p className="text-xs text-text-muted">Creamy oat, almond, or soy perfectly paired with espresso.</p>
             </div>
             <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-sm text-primary mb-1">Raw Agave</h4>
                <p className="text-xs text-text-muted">Lightly sweetened with low-glycemic natural nectar.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
