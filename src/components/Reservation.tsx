import React, { useState } from 'react';
import { User, Phone, Users, Calendar, Clock, Sparkles, CheckCircle } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    occasion: 'Kein Anlass',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      setError('Bitte füllen Sie alle erforderlichen Felder aus.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="reservation" className="relative w-full bg-light-pink overflow-hidden pt-24 pb-32">
      {/* Top Wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C10,2.15,20.08,4.61,30.2,7.26,113.88,29.13,205.86,49.25,289.4,53.25C300,53.86,310.66,54.94,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase mb-4 tracking-tight">
            Tisch reservieren
          </h2>
          <p className="text-text-muted font-medium max-w-xl mx-auto leading-relaxed">
            Genießen Sie erlesene Getränke und eine entspannte Atmosphäre bei Café & Bar Rosé. Sichern Sie sich Ihren Platz ganz einfach online.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white/90 backdrop-blur-md p-6 md:p-12 rounded-3xl shadow-2xl shadow-pink-100/50 max-w-2xl mx-auto border border-pink-50 transition-all duration-300">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm py-3 px-4 rounded-xl font-medium">
                  {error}
                </div>
              )}

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-primary" /> Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr vollständiger Name"
                    className="w-full bg-light-pink/45 border border-pink-100/70 rounded-xl py-3.5 px-4 text-sm font-medium text-text-main placeholder-text-muted focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-200"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-primary" /> Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 170 1234567"
                    className="w-full bg-light-pink/45 border border-pink-100/70 rounded-xl py-3.5 px-4 text-sm font-medium text-text-main placeholder-text-muted focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-200"
                    required
                  />
                </div>

                {/* Guests */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="guests" className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-primary" /> Personen *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-light-pink/45 border border-pink-100/70 rounded-xl py-3.5 px-4 text-sm font-medium text-text-main focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Personen</option>
                    <option value="3">3 Personen</option>
                    <option value="4">4 Personen</option>
                    <option value="5">5 Personen</option>
                    <option value="6+">6+ Personen</option>
                  </select>
                </div>

                {/* Occasion */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="occasion" className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-primary" /> Anlass (Optional)
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full bg-light-pink/45 border border-pink-100/70 rounded-xl py-3.5 px-4 text-sm font-medium text-text-main focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="Kein Anlass">Kein besonderer Anlass</option>
                    <option value="Geburtstag">Geburtstag</option>
                    <option value="Jahrestag">Jahrestag</option>
                    <option value="Business">Business-Meeting</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                </div>

                {/* Date */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> Datum *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-light-pink/45 border border-pink-100/70 rounded-xl py-3.5 px-4 text-sm font-medium text-text-main focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-200"
                    required
                  />
                </div>

                {/* Time */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="time" className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" /> Uhrzeit *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-light-pink/45 border border-pink-100/70 rounded-xl py-3.5 px-4 text-sm font-medium text-text-main focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-200"
                    required
                  />
                </div>

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 bg-primary hover:bg-primary-hover text-white py-4 rounded-full font-bold shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 duration-200 cursor-pointer"
              >
                Tisch reservieren
              </button>
            </form>
          ) : (
            /* Success Screen */
            <div className="text-center py-8 px-4 animate-[fadeIn_0.5s_ease-out]">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6 stroke-[1.5]" />
              <h3 className="text-2xl font-bold text-text-main mb-4">Reservierungsanfrage gesendet!</h3>
              <p className="text-text-muted font-medium mb-8 leading-relaxed max-w-md mx-auto text-sm">
                Vielen Dank, <span className="text-primary font-bold">{formData.name}</span>. Wir haben Ihre Anfrage für {formData.guests} {formData.guests === '1' ? 'Person' : 'Personen'} am {formData.date} um {formData.time} Uhr erhalten.
              </p>
              <div className="bg-light-pink/50 rounded-2xl p-4 inline-block text-xs font-medium text-text-main max-w-sm">
                Wir senden Ihnen in Kürze eine Bestätigung per SMS oder rufen Sie an.
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    phone: '',
                    guests: '2',
                    date: '',
                    time: '',
                    occasion: 'Kein Anlass',
                  });
                }}
                className="block mx-auto mt-8 text-primary hover:text-primary-hover font-bold text-sm underline transition-colors"
              >
                Weitere Reservierung vornehmen
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
