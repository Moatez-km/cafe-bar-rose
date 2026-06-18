import { CupSoda, Phone } from 'lucide-react';

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
          <a href="#" className="hover:text-primary transition-colors">Menu</a>
          <a href="#" className="hover:text-primary transition-colors">Drinks</a>
          <a href="#" className="hover:text-primary transition-colors">Ingredients</a>
          <a href="#" className="hover:text-primary transition-colors">Benefits</a>
          <a href="#" className="hover:text-primary transition-colors">Delivery</a>
          <a href="#" className="hover:text-primary transition-colors">Reviews</a>
          <a href="#" className="hover:text-primary transition-colors">Contacts</a>
        </nav>

        {/* Contact info */}
        <div className="flex flex-col items-end">
          <a href="tel:88002345434" className="font-bold text-text-main text-lg hover:text-primary transition-colors flex items-center gap-2">
            <Phone className="w-4 h-4 md:hidden text-primary" />
            <span className="hidden md:inline">8 800 234-54-34</span>
          </a>
          <span className="text-xs text-text-muted hidden md:inline">Call us toll-free</span>
        </div>
      </div>
    </header>
  );
}
