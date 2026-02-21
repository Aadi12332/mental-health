type ButtonProps = {
  children: React.ReactNode
  className?: string
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`bg-[linear-gradient(245.9deg,#219580_14.52%,#346079_84.54%)] text-white text-[20px] font-semibold rounded-[10px] h-[52px] px-4 flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  )
}