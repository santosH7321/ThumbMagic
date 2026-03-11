import type React from "react"

type AspectRatio = "16:9" | "1:1" | "9:16"

const aspectRatios: AspectRatio[] = ["16:9", "1:1", "9:16"]

const Ratio16by9 = () => (
  <svg viewBox="0 0 160 90" className="size-6" fill="none">
    <rect
      x="5"
      y="15"
      width="150"
      height="60"
      rx="8"
      stroke="currentColor"
      strokeWidth="10"
    />
  </svg>
)

const Ratio1by1 = () => (
  <svg viewBox="0 0 100 100" className="size-6" fill="none">
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      rx="8"
      stroke="currentColor"
      strokeWidth="10"
    />
  </svg>
)

const Ratio9by16 = () => (
  <svg viewBox="0 0 90 160" className="size-6" fill="none">
    <rect
      x="15"
      y="5"
      width="60"
      height="150"
      rx="8"
      stroke="currentColor"
      strokeWidth="10"
    />
  </svg>
)

const AspectRatioSelector = ({
  value,
  onChange,
}: {
  value: AspectRatio
  onChange: (ratio: AspectRatio) => void
}) => {

  const iconMap = {
    "16:9": <Ratio16by9 />,
    "1:1": <Ratio1by1 />,
    "9:16": <Ratio9by16 />,
  } as Record<AspectRatio, React.ReactNode>

  return (
    <div className="space-y-3 dark">
      <label className="text-sm font-medium">Aspect Ratio</label>

      <div className="flex flex-wrap gap-2">
        {aspectRatios.map((ratio) => {
          const selected = value === ratio

          return (
            <button
              key={ratio}
              type="button"
              onClick={() => onChange(ratio)}
              className={`flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm transition border-white/10 ${
                selected ? "bg-white/10" : "hover:bg-white/6"
              }`}
            >
              {iconMap[ratio]}
              <span className="tracking-widest">{ratio}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default AspectRatioSelector