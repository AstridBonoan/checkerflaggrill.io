import { useState } from 'react'

type FoodImageProps = {
  src: string
  alt: string
  className?: string
  fallbackIcon?: string
}

export function FoodImage({ src, alt, className = '', fallbackIcon = '🍽️' }: FoodImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-4xl opacity-60" aria-hidden>
          {fallbackIcon}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
