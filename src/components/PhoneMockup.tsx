/**
 * Phone frame that wraps a real screenshot image.
 *
 * `src` is the dark-mode screenshot (e.g. /screenshots/feed.png). We
 * derive the light-mode path by inserting `-light` before the extension
 * (/screenshots/feed-light.png) and swap between the two using the
 * .phone-img-light / .phone-img-dark rules in globals.css so the
 * mockup matches the website's theme.
 *
 * The screenshots leave a 96px clear band at the top (where this
 * component's notch sits) and lift the in-app bottom nav 30px from the
 * bottom (where the home-indicator bar sits) so neither piece of the
 * frame overlaps the screenshot's chrome.
 */
export default function PhoneFrame({ src, label }: { src: string; label: string }) {
  const lightSrc = src.replace(/(\.[^./]+)$/, '-light$1')
  // Cache-bust so a stale CDN copy can't hide the latest mockup edit.
  const v = '2026-05-07c'
  const dark = `${src}?v=${v}`
  const light = `${lightSrc}?v=${v}`
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-full max-w-[200px] mx-auto group">
        {/* Shadow */}
        <div className="absolute inset-4 bg-black/10 rounded-[32px] blur-xl group-hover:blur-2xl transition-all duration-500" />
        {/* Phone body */}
        <div className="relative bg-gray-900 rounded-[32px] p-[7px] shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10" />
          {/* Screen */}
          <div className="rounded-[25px] overflow-hidden bg-white">
            <img
              src={light}
              alt={label}
              className="phone-img-light w-full h-auto"
              loading="lazy"
            />
            <img
              src={dark}
              alt={label}
              className="phone-img-dark w-full h-auto"
              loading="lazy"
            />
          </div>
          {/* Home indicator bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-600 rounded-full" />
        </div>
      </div>
      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</span>
    </div>
  )
}
