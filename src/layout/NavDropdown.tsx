import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

type DropdownItem = {
  label: string
  onClick?: () => void
}

type Props = {
  label: string
  items?: DropdownItem[]
}

export default function NavDropdown({ label, items }: Props) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () =>
      document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-gray-700"
      >
        {label}
        {
        items && (
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />)}
      </button>
      {
        items && (
      <div
        className={`absolute left-0 min-w-[200px] z-50 mt-2 bg-white rounded-[15px] shadow-[0px_0px_40px_0px_#0000000F] border border-gray-100 transition-all duration-200 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <ul className="py-2">
          {items?.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  item.onClick?.()
                  setOpen(false)
                }}
                className="w-full text-left px-3 py-2 text-[#333333] text-lg transition"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
        )
      }
    </div>
  )
}