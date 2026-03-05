export function InputField({
  icon,
  name,
  type = "text",
  placeholder,
  value,
  onChange
}: {
  icon: React.ReactNode
  name: string
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {

  return (
    <div className="flex items-center mt-5 w-full bg-white/5 border border-white/10 focus-within:border-pink-500 h-11 rounded-full px-5 gap-3 transition">

      <span className="text-white/60">
        {icon}
      </span>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-transparent text-white placeholder-white/60 outline-none text-sm"
        value={value}
        onChange={onChange}
        required
      />

    </div>
  )
}