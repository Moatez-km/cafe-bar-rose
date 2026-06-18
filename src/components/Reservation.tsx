import React, { useState } from 'react';
import { User, Phone, Mail, Users, Calendar, Clock, Sparkles, CheckCircle } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    occasion: 'Kein Anlass',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setError('Bitte füllen Sie alle erforderlichen Felder aus.');
      return;
    }
    setError('');
    setLoading(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.warn("VITE_WEB3FORMS_ACCESS_KEY is not defined in .env. Running in simulation mode.");
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1000);
      return;
    }

    try {
      const payload = {
        access_key: accessKey,
        subject: `Neue Reservierungsanfrage - ${formData.name}`,
        from_name: "Café & Bar Rosé Reservierungen",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        guests: `${formData.guests} ${formData.guests === '1' ? 'Person' : 'Personen'}`,
        date: formData.date,
        time: formData.time,
        occasion: formData.occasion,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Fehler beim Senden der Reservierung. Bitte versuchen Sie es erneut.');
      }
    } catch (err) {
      setError('Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.');
      console.error(err);
    } finally {
      setLoading(false);
    }
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

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-primary" /> E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ihr.name@beispiel.de"
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

                {/* Occasion */}
                <div className="flex flex-col gap-2 md:col-span-2">
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

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-primary hover:bg-primary-hover text-white py-4 rounded-full font-bold shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 duration-200 cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Senden...
                  </>
                ) : (
                  'Tisch reservieren'
                )}
              </button>
            </form>
          ) : (
            /* Success Screen */
            <div className="text-center py-8 px-4 animate-[fadeIn_0.5s_ease-out]">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6 stroke-[1.5]" />
              <h3 className="text-2xl font-bold text-text-main mb-4">Anfrage erfolgreich gesendet!</h3>
              <p className="text-text-muted font-medium mb-8 leading-relaxed max-w-md mx-auto text-sm">
                Vielen Dank, <span className="text-primary font-bold">{formData.name}</span>. Ihre Reservierungsanfrage für {formData.guests} am {formData.date} um {formData.time} Uhr wurde übermittelt.
              </p>
              <div className="bg-light-pink/50 rounded-2xl p-4 inline-block text-xs font-medium text-text-main max-w-sm">
                Eine Kopie der Anfrage wurde an <span className="text-primary font-semibold">{formData.email}</span> gesendet. Wir setzen uns in Kürze per E-Mail oder telefonisch mit Ihnen in Verbindung.
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
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
