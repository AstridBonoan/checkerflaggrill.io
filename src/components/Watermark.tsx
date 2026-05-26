const watermarkSrc = `${import.meta.env.BASE_URL}bonoan-labs-watermark.png`

export function Watermark() {
  return (
    <div
      className="pointer-events-none fixed bottom-24 right-3 z-30 select-none md:bottom-5 md:right-5"
      aria-hidden
    >
      <img
        src={watermarkSrc}
        alt=""
        className="h-10 w-auto opacity-[0.18] sm:h-12 md:h-14 md:opacity-20"
        draggable={false}
      />
    </div>
  )
}
