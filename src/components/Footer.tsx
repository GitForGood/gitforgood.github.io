export function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline-variant px-8 py-4">
      <div className="flex items-center justify-between text-on-surface-variant text-sm">
        <div className="flex flex-row">
          <p>&copy; 2025 My Portfolio.</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}