import type { ReactNode } from 'react'
import { SectionWatermark } from './SectionWatermark'

type Bg = 'white' | 'light' | 'dark' | 'transparent'

type PageSectionProps = {
  children: ReactNode
  bg?: Bg
  onDark?: boolean
  className?: string
}

const bgClasses: Record<Bg, string> = {
  white: 'bg-white',
  light: 'bg-grill-light',
  dark: 'bg-grill-dark',
  transparent: 'bg-transparent',
}

export function PageSection({
  children,
  bg = 'white',
  onDark = false,
  className = '',
}: PageSectionProps) {
  return (
    <div className={`relative overflow-hidden ${bgClasses[bg]} ${className}`}>
      <SectionWatermark onDark={onDark} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
