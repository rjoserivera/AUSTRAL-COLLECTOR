export default function Footer() {
  return (
    <footer className="mt-12 py-8 bg-black/60 border-t border-bronze text-center">
      <p className="font-display text-brand-muted text-sm tracking-widest">
        &copy; {new Date().getFullYear()} AURA COLLECTOR. FORJADO EN CHILE.
      </p>
    </footer>
  );
}
