type LogoProps = {
  className?: string
  showName?: boolean
}

const logoSrc = `${import.meta.env.BASE_URL}logo.png`

export function Logo({ className = 'h-11 w-11', showName = false }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <img
        src={logoSrc}
        alt="NYC Checker Flag Grill"
        className={`shrink-0 object-contain ${className}`}
        width={44}
        height={44}
      />
      {showName && (
        <span className="hidden text-sm font-bold leading-tight text-grill-dark sm:inline sm:text-base">
          NYC Checker Flag Grill
        </span>
      )}
    </span>
  )
}
