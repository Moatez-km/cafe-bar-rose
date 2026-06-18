export default function FooterCTA() {
  return (
    <footer className="bg-white py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h3 className="text-2xl font-bold uppercase text-text-main mb-4 tracking-tight">
          Want to know more?
        </h3>
        <p className="text-text-muted text-sm mb-10 max-w-sm">
          Leave a request below and our team will contact you to discuss catering, wholesale, or our full seasonal menu.
        </p>
        
        <button className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-primary/30 transition-transform active:scale-95">
          Get in Touch
        </button>
      </div>
    </footer>
  );
}
