export function Footer() {
  return (
    <footer className="footer container">
      <div className="flex flex-wrap gap-12 justify-between items-center">
        <div>
          <div className="font-bold text-ink">Braden Johnson</div>
          <div className="text-xs text-soft mt-2">IT Systems Administrator — Owensboro, Kentucky</div>
        </div>
        <div className="text-xs text-soft">
          braden.psn@hotmail.com &bull; (270) 903-3820
        </div>
      </div>
      <div className="text-xs text-soft mt-6">
        &copy; 2026 Braden Johnson. Built with React, Vite, and three.js.
      </div>
    </footer>
  )
}
