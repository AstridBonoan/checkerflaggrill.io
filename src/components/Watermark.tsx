import watermarkSrc from '../assets/bonoan-labs-watermark.png'

/**
 * Fixed viewport watermark — stays in the background while scrolling
 * the full single-page site.
 */
export function Watermark() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <img
        src={watermarkSrc}
        alt=""
        className="absolute left-1/2 top-[18%] h-[min(48vh,340px)] w-auto max-w-[min(82vw,400px)] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.06] mix-blend-multiply sm:opacity-[0.07]"
        draggable={false}
      />
      <img
        src={watermarkSrc}
        alt=""
        className="absolute left-1/2 top-[52%] h-[min(44vh,300px)] w-auto max-w-[min(78vw,360px)] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.06] mix-blend-multiply"
        draggable={false}
      />
      <img
        src={watermarkSrc}
        alt=""
        className="absolute left-1/2 top-[86%] h-[min(44vh,300px)] w-auto max-w-[min(78vw,360px)] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.06] mix-blend-multiply"
        draggable={false}
      />
    </div>
  )
}
