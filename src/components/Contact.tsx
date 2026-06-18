import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Contact() {
  const mapUrl = "https://www.google.com/maps/place/Caf%C3%A9+%26+Bar+Ros%C3%A9/@50.9774983,11.029133,17z/data=!3m1!4b1!4m6!3m5!1s0x47a4730059a1efff:0x776d45c787f5852d!8m2!3d50.9774954!4d11.0313912!16s%2Fg%2F11lzm6ds1w?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D";
  const embedUrl = "https://maps.google.com/maps?q=Caf%C3%A9%20%26%20Bar%20Ros%C3%A9,%20Junkersand%203,%2099084%20Erfurt&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="relative w-full bg-light-pink py-20 px-4 md:px-8 border-t border-pink-100/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Column - Contact details */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main leading-tight">
              Kommen Sie vorbei
            </h2>
            <p className="text-text-muted text-sm leading-relaxed max-w-md">
              Wir freuen uns auf Ihren Besuch! Ob für ein erfrischendes Getränk, eine kleine Auszeit oder für eine persönliche Feier – bei uns sind Sie immer herzlich willkommen.
            </p>
          </div>

          <div className="space-y-4 border-t border-pink-100/55 pt-6">
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-2.5 rounded-xl text-primary shadow-sm flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-sm font-medium">
                <p className="text-text-main font-bold">Adresse</p>
                <p className="text-text-muted mt-0.5">Junkersand 3</p>
                <p className="text-text-muted">99084 Erfurt-Altstadt</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-2.5 rounded-xl text-primary shadow-sm flex-shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-sm font-medium">
                <p className="text-text-main font-bold">Telefon</p>
                <a href="tel:036121861556" className="text-text-muted mt-0.5 block hover:text-primary transition-colors">
                  0361 21861556
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-2.5 rounded-xl text-primary shadow-sm flex-shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-sm font-medium">
                <p className="text-text-main font-bold">Öffnungszeiten</p>
                <p className="text-text-muted mt-0.5">Fr. & Sa.: 10:30 – 22:00 Uhr</p>
                <p className="text-text-muted">Di. – Do. & So.: 10:30 – 20:00 Uhr</p>
                <p className="text-text-muted">Montag: Geschlossen</p>
              </div>
            </div>

          </div>

          <div className="pt-4">
            <a 
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-hover text-white text-sm font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              Route planen (Google Maps)
            </a>
          </div>

        </div>

        {/* Right Column - Map Iframe */}
        <div className="flex-1 w-full relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-pink-100/80 border-4 border-white h-[350px] md:h-[400px]">
            <iframe 
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location for Café & Bar Rosé"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
