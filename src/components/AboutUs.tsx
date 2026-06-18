import { MapPin, Phone, Star, Euro, Clock, Check } from 'lucide-react';

export default function AboutUs() {
  const badges = [
    'Speisen vor Ort',
    'Drive-in verfügbar',
    'Lieferung möglich',
    'LGBTQ+ freundlich',
    'Von Frauen geführt'
  ];

  return (
    <section id="about-us" className="bg-white py-20 px-4 md:px-8 border-t border-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left column - Info Details */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block">
              Über uns
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main leading-tight">
              Café & Bar Rosé
            </h2>
            
            {/* Rating Display */}
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current stroke-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-text-main">4,8</span>
              <span className="text-xs text-text-muted font-medium">(91 Google-Bewertungen)</span>
              <span className="text-xs text-text-muted font-medium">•</span>
              <span className="text-xs text-primary font-bold bg-primary/5 px-2 py-0.5 rounded">Café</span>
            </div>
          </div>

          <p className="text-text-muted text-sm leading-relaxed max-w-xl">
            Herzlich willkommen im Café & Bar Rosé! Inmitten der Erfurter Altstadt laden wir Sie ein, in gemütlicher und floraler Atmosphäre neue Geschmackserlebnisse zu entdecken. Genießen Sie frische Speisen vor Ort, bestellen Sie bequem über unseren Drive-in oder lassen Sie sich Ihre Lieblingsgetränke liefern. Wir sind ein stolzes, von Frauen geführtes und LGBTQ+-freundliches Café und freuen uns auf Ihren Besuch!
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-100 pt-6">
            
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="bg-light-pink p-2 rounded-lg text-primary flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs font-medium">
                <p className="text-text-main font-bold">Adresse</p>
                <p className="text-text-muted mt-0.5">Junkersand 3</p>
                <p className="text-text-muted">99084 Erfurt-Altstadt</p>
                <p className="text-[10px] text-primary mt-0.5">Plus Code: X2GJ+XH Erfurt</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <div className="bg-light-pink p-2 rounded-lg text-primary flex-shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs font-medium">
                <p className="text-text-main font-bold">Öffnungszeiten</p>
                <p className="text-text-muted mt-0.5">Fr. ab 10:30 Uhr geöffnet</p>
                <p className="text-text-muted">Ruhetage laut Aushang</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="bg-light-pink p-2 rounded-lg text-primary flex-shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs font-medium">
                <p className="text-text-main font-bold">Telefon</p>
                <a href="tel:036121861556" className="text-text-muted mt-0.5 block hover:text-primary transition-colors">
                  0361 21861556
                </a>
              </div>
            </div>

            {/* Price Range */}
            <div className="flex items-start gap-3">
              <div className="bg-light-pink p-2 rounded-lg text-primary flex-shrink-0 mt-0.5">
                <Euro className="w-4 h-4" />
              </div>
              <div className="text-xs font-medium">
                <p className="text-text-main font-bold">Preise</p>
                <p className="text-text-muted mt-0.5">1–10 € pro Person</p>
                <p className="text-text-muted">Sehr preiswert & fair</p>
              </div>
            </div>

          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 pt-4">
            {badges.map((badge, idx) => (
              <span 
                key={idx} 
                className="inline-flex items-center gap-1 bg-light-pink/60 text-primary border border-pink-100/50 text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full transition-transform hover:scale-105"
              >
                <Check className="w-3 h-3 stroke-[3]" />
                {badge}
              </span>
            ))}
          </div>

        </div>

        {/* Right column - Cafe exterior image */}
        <div className="flex-1 w-full relative">
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-pink-100 border-4 border-white">
            <img 
              src="/rose.png" 
              alt="Café & Bar Rosé Außenansicht" 
              className="w-full h-[320px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Small decorative label */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-md flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] font-bold text-text-main uppercase tracking-wider">Erfurt-Altstadt</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
