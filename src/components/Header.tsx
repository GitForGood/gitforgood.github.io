export function Header() {
  return (
    <header className="bg-surface-container border-b border-outline-variant px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">My Portfolio</h1>
        <nav className="hidden md:flex gap-4 text-on-surface-variant">
          {/* Additional header content can go here */}
        </nav>
      </div>
    </header>
  )
}