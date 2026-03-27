/** Clean phone frame that wraps a real screenshot image */
export default function PhoneFrame({ src, label }: { src: string; label: string }) {
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
              src={src}
              alt={label}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          {/* Bottom bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-600 rounded-full" />
        </div>
      </div>
      <span className="text-sm text-gray-500 font-medium">{label}</span>
    </div>
  )
}
