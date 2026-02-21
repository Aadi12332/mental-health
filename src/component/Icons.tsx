const SvgGradientDefs = () => {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        <linearGradient
          id="iconGradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#219580" />
          <stop offset="100%" stopColor="#346079" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgGradientDefs;