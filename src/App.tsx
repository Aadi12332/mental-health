import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"

import SvgGradientDefs from "./svg/Icons"
import PublicLayout from "./layout/PublicLayout"
import AuthLayout from "./layout/AuthLayout"
import HomePage from "./page/Homepage"
import SignupRolePage from "./component/auth/SignupRolePage"
import PatientLoginPage from "./component/auth/PatientLoginPage"
import ProviderLoginPage from "./component/auth/ProviderLoginPage"
import GetStartedPage from "./component/auth/GetStartedPage"
import DoctorSelection from "./component/auth/DoctorSelection"


function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SvgGradientDefs />

      <Routes>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignupRolePage />} />
          <Route path="/patient-login" element={<PatientLoginPage />} />
          <Route path="/provider-login" element={<ProviderLoginPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/doctor-selection" element={<DoctorSelection />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}