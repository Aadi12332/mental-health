type Props = {
  children: React.ReactNode
  icon?: React.ReactNode
  fontSize?: string
}

const GradientButton = ({ children, fontSize = "text-[20px]" }: Props) => {
  return (
    <div className="flex items-center gap-1 justify-center">
      <span className={`bg-[linear-gradient(256.76deg,#219580_18.35%,#346079_55.12%)] bg-clip-text text-transparent ${fontSize} font-semibold flex items-center gap-2`}>
        {children}
      </span>
    </div>
  )
}

export default GradientButton;