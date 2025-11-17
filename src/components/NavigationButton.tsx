interface NavigationButtonProps {
  label: string
  icon: string
  isActive: boolean
  onClick: () => void
  variant?: 'rail' | 'bottom'
}

export function NavigationButton({ label, icon, isActive, onClick, variant = 'rail' }: NavigationButtonProps) {
  // Different styles for rail (side) and bottom navigation
  const isBottomNav = variant === 'bottom'

  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center
        ${isBottomNav ? 'flex-1 py-1 px-2 min-w-0' : 'w-20 py-2 px-2'}
        transition-all duration-200
        hover:bg-surface-container-high
        rounded-lg
        ${isActive ? 'bg-secondary-container' : 'bg-transparent'}
      `}
    >
      {/* Icon */}
      <span
        className={`
          material-symbols-outlined
          ${isBottomNav ? 'text-2xl py-1' : 'text-3xl pt-3 pb-2'}
          transition-colors
          ${isActive ? 'text-primary' : 'text-on-surface-variant'}
        `}
        style={{
          fontVariationSettings: isActive ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" : "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48"
        }}
      >
        {icon}
      </span>

      {/* Label */}
      <span className={`
        text-xs
        ${isBottomNav ? 'pb-1' : 'pb-2'}
        transition-colors
        ${isActive ? 'text-primary font-semibold' : 'text-on-surface-variant'}
        ${isBottomNav ? 'truncate max-w-full' : ''}
      `}>
        {label}
      </span>
    </button>
  )
}
