import watermarkSrc from '../assets/bonoan-labs-watermark.png'

type SectionWatermarkProps = {
  /** Use on dark sections (e.g. hero) so the mark stays visible */
  onDark?: boolean
}

/** Centered background watermark for one scroll section */
export function SectionWatermark({ onDark = false }: SectionWatermarkProps) {
  const imgClass = onDark
    ? 'opacity-[0.18] mix-blend-screen'
    : 'opacity-[0.11] mix-blend-multiply sm:opacity-[0.12]'

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
      aria-hidden
    >
      <img
        src={watermarkSrc}
        alt=""
        className={`h-[min(40vh,300px)] w-auto max-w-[min(78vw,360px)] object-contain sm:h-[min(45vh,340px)] ${imgClass}`}
        draggable={false}
      />
    </div>
  )
}
