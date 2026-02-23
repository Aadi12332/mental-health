import { useNavigate } from "react-router-dom";
import { User2 } from "lucide-react";
import Button from "../ui/Button";
import Logo from "../assets/images/logo.svg";
import GradientButton from "../component/landing/GradientButton";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-5 lg:px-6 px-3">
        <div className="flex items-center gap-3 cursor-pointer" onClick={()=>navigate("/")}>
          <img src={Logo} alt="Logo" className="h-[50px]" />
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-[#333333] text-[20px]">
          <NavDropdown
            label="Conditions"
            items={[
              { label: "ADHD" },
              { label: "Anxiety" },
              { label: "Depression" },
              { label: "Insomnia" },
              { label: "OCD" },
            ]}
          />
          <NavDropdown
            label="Services"
            items={[
              { label: "Medication Refill" },
              { label: "Treatments Management" },
              { label: "Work Excuse Letter" },
            ]}
          />
          <NavDropdown label="Blog" />

          <NavDropdown
            label="Company"
            items={[
              { label: "About Us" },
              { label: "Careers" },
              { label: "Contact Us" },
              { label: "Providers" },
              { label: "Reviews" },
            ]}
          />
         <NavDropdown label="FAQs" />
        </nav>

        <div className="flex items-center gap-4">
          <div className="bg-[#2C787C0D] px-4 h-[52px] rounded-[10px] flex items-center cursor-pointer" onClick={()=>navigate("/signin")}>
            <GradientButton fontSize="text-[20px]">
              <User2 fill="url(#iconGradient)" stroke="none" />
              Sign In
            </GradientButton>
          </div>
          <div className="" onClick={()=>navigate("/get-started")}>
            <Button>Get Started →</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
