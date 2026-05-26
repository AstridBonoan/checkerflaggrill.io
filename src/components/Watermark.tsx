import watermarkSrc from '../assets/bonoan-labs-watermark.png'

export function Watermark() {
  return (
    <div
      className="pointer-events-none fixed bottom-[5.5rem] right-4 z-[60] select-none md:bottom-6 md:right-6"
      aria-label="Site by Bonoan Labs"
      role="img"
    >
      <div className="rounded-lg bg-white/90 px-2.5 py-2 shadow-md ring-1 ring-black/10 backdrop-blur-sm">
        <img
          src={watermarkSrc}
          alt="Bonoan Labs"
          className="h-11 w-auto sm:h-12"
          draggable={false}
        />
      </div>
    </div>
  )
}
