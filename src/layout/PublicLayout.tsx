import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import FooterSection from "./FooterSection"

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterSection />
    </div>
  )
}