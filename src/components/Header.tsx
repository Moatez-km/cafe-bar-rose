import { CupSoda } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-light-pink py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
          <CupSoda className="w-6 h-6 stroke-[2.5]" />
          <span className="leading-none text-nowrap">Café & Bar Rosé</span>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <a href="#" className="hover:text-primary transition-colors">Menü</a>
          <a href="#" className="hover:text-primary transition-colors">Getränke</a>
          <a href="#" className="hover:text-primary transition-colors">Zutaten</a>
          <a href="#" className="hover:text-primary transition-colors">Vorteile</a>
          <a href="#" className="hover:text-primary transition-colors">Lieferung</a>
          <a href="#" className="hover:text-primary transition-colors">Bewertungen</a>
          <a href="#" className="hover:text-primary transition-colors">Kontakt</a>
        </nav>

        {/* Contact info & Reservation button */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden lg:flex flex-col items-end">
            <a href="tel:88002345434" className="font-bold text-text-main text-base hover:text-primary transition-colors flex items-center gap-2">
              <span>8 800 234-54-34</span>
            </a>
            <span className="text-[10px] text-text-muted">Rufen Sie uns gebührenfrei an</span>
          </div>
          <button className="bg-primary hover:bg-primary-hover text-white text-xs md:text-sm font-bold px-4 md:px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md shadow-primary/25">
            Tisch reservieren
          </button>
        </div>
      </div>
    </header>
  );
}
