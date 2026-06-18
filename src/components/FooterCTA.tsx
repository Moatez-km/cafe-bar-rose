export default function FooterCTA() {
  return (
    <footer className="bg-white py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h3 className="text-2xl font-bold uppercase text-text-main mb-4 tracking-tight">
          Möchten Sie mehr wissen?
        </h3>
        <p className="text-text-muted text-sm mb-10 max-w-sm">
          Hinterlassen Sie unten Ihre Anfrage und unser Team wird sich mit Ihnen in Verbindung setzen, um Catering, Großhandel oder unsere saisonale Karte zu besprechen.
        </p>
        
        <button className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-primary/30 transition-transform active:scale-95">
          Kontakt aufnehmen
        </button>
      </div>
    </footer>
  );
}
