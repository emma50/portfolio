import { STACK } from '../data'

export default function Marquee() {
  // Duplicate for seamless loop
  const items = [...STACK, ...STACK]

  return (
    <div
      className="border-t border-b border-neutral-800 bg-neutral-925 py-3.5 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="flex gap-10 whitespace-nowrap animate-scroll-x"
        style={{ width: 'max-content' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="font-mono text-10 text-[#777] tracking-wide3 uppercase
              inline-flex items-center gap-2.5 flex-shrink-0
              before:content-['✦'] before:text-lime before:text-[7px]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
