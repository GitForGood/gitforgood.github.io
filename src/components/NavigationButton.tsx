interface NavigationButtonProps {
  label: string
  icon: string
  isActive: boolean
  onClick: () => void
}

export function NavigationButton({ label, icon, isActive, onClick }: NavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center
        w-20 py-2 px-2
        transition-all duration-200
        hover:bg-surface-container-high
        rounded-lg
        ${isActive ? 'bg-secondary-container' : 'bg-transparent'}
      `}
    >
      {/* Icon with top padding to match bottom */}
      <span
        className={`
          material-symbols-outlined
          text-3xl
          pt-3 pb-2
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
        pb-2
        transition-colors
        ${isActive ? 'text-primary font-semibold' : 'text-on-surface-variant'}
      `}>
        {label}
      </span>
    </button>
  )
}
