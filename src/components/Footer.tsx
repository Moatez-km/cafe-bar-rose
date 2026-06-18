import { Instagram, Facebook, MapPin, Phone, Mail, Clock, CupSoda } from 'lucide-react';

export default function Footer() {
  const mapUrl = "https://www.google.com/maps/place/Caf%C3%A9+%26+Bar+Ros%C3%A9/@50.9774983,11.029133,17z/data=!3m1!4b1!4m6!3m5!1s0x47a4730059a1efff:0x776d45c787f5852d!8m2!3d50.9774954!4d11.0313912!16s%2Fg%2F11lzm6ds1w?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className="bg-[#1A0209] text-pink-100/70 py-16 px-4 md:px-8 border-t border-pink-950/45">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">
        
        {/* Column 1 - Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
            <CupSoda className="w-5 h-5 text-primary stroke-[2.5]" />
            <span className="leading-none">Café & Bar Rosé</span>
          </div>
          <p className="text-xs text-pink-200/50 leading-relaxed">
            Ihr floraler Lieblingsort in Erfurt für feinen Matcha, Kaffeespezialitäten, erlesene Rosé-Getränke und genussvolle Auszeiten.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-pink-950/65 hover:bg-primary hover:text-white p-2 rounded-full text-pink-200/70 transition-all duration-200"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-pink-950/65 hover:bg-primary hover:text-white p-2 rounded-full text-pink-200/70 transition-all duration-200"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href={mapUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-pink-950/65 hover:bg-primary hover:text-white p-2 rounded-full text-pink-200/70 transition-all duration-200"
              title="Google Maps"
            >
              <MapPin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <a href="#products" className="hover:text-white transition-colors">Speisekarte</a>
            </li>
            <li>
              <a href="#reservation" className="hover:text-white transition-colors">Reservation</a>
            </li>
            <li>
              <a href="#about-us" className="hover:text-white transition-colors">Über uns</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">Kontakt</a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">Kontakt</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>Junkersand 3<br />99084 Erfurt-Altstadt</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="tel:036121861556" className="hover:text-white transition-colors">0361 21861556</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="mailto:info@cafe-bar-rose.de" className="hover:text-white transition-colors">info@cafe-bar-rose.de</a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Hours */}
        <div className="space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">Öffnungszeiten</h4>
          <div className="space-y-2.5 text-xs font-medium">
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white">Freitag - Sonntag</p>
                <p className="text-pink-200/50 mt-0.5">ab 10:30 Uhr geöffnet</p>
              </div>
            </div>
            <p className="text-[10px] text-pink-200/40 italic mt-2">
              * Ruhetage und saisonale Zeiten entnehmen Sie bitte dem Aushang vor Ort.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto border-t border-pink-950/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-pink-200/40">
        <p>© 2026 Café & Bar Rosé. Alle Rechte vorbehalten.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Impressum</a>
          <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
