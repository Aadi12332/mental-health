import { ChevronDown, User2 } from "lucide-react"
import Button from "./Button"
import Logo from "../assets/images/logo.svg"
import GradientButton from "./GradientButton"

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-5 lg:px-6 px-3">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="h-[50px]" />
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-[#333333] text-[20px]">
          <div className="flex items-center gap-1 cursor-pointer">
            Conditions <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            Services <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            Blog <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            Company <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            FAQs <ChevronDown size={16} />
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <div className="bg-[#2C787C0D] px-4 h-[52px] rounded-[10px] flex items-center cursor-pointer">
            <GradientButton fontSize="text-[20px]">
              <User2 fill="url(#iconGradient)" stroke="none" />
              Sign In
            </GradientButton>
          </div>
          <Button>Get Started →</Button>
        </div>
      </div>
    </header>
  )
}