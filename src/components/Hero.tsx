import { ChevronDown } from 'lucide-react';
import signatureRoseDrink from '@/assets/signature_rose_drink.png';

export default function Hero() {
  return (
    <section className="relative w-full bg-light-pink overflow-hidden">
      {/* Wave bottom divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C10,2.15,20.08,4.61,30.2,7.26,113.88,29.13,205.86,49.25,289.4,53.25C300,53.86,310.66,54.94,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-32 md:py-24 flex flex-col md:flex-row items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary uppercase leading-[1.1] tracking-tight mb-4">
            Die erfrischendsten<br />
            Getränke
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6 text-text-muted text-lg font-medium">
            <span>in Ihrer Stadt</span>
            <ChevronDown className="w-5 h-5 text-primary" />
          </div>
          
          <p className="text-text-main max-w-md mx-auto md:mx-0 mb-10 text-base leading-relaxed">
            Wenn Sie einen gesunden Lebensstil lieben, aber einem köstlichen und lebendigen Getränk nicht widerstehen können – ist unsere Getränkekarte genau für Sie gemacht!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95 text-nowrap">
              Menü ansehen
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-primary border border-primary/20 px-8 py-4 rounded-full font-bold shadow-md transition-all hover:scale-105 active:scale-95 text-nowrap">
              Tisch reservieren
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative w-full flex justify-center md:justify-end">
          {/* Decorative floating elements */}
          <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
            {/* Using a beautiful high-res drink image. Rounded to blend nicely. */}
            <img 
              src={signatureRoseDrink} 
              alt="Signature Rose Drink" 
              className="w-full h-full object-cover object-center rounded-full shadow-2xl ring-8 ring-white/50 animate-[pulse_6s_ease-in-out_infinite]" 
              style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
