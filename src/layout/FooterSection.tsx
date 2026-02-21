
import Logo from "../assets/images/logowhite.svg"

export default function FooterSection() {
  return (
    <footer className="bg-[#3B657D] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <img src={Logo} alt="Logo" className="h-[50px] mb-6" />

            <ul className="space-y-3 text-[#DEDEDE] text-base">
              <li>Blog</li>
              <li>About Us</li>
              <li>FAQ’s</li>
              <li>Careers</li>
              <li>Consent to Telehealth</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-[20px] mb-6">Industries</h4>
            <ul className="space-y-3 text-[#DEDEDE] text-base">
              <li>DEA Rules Update</li>
              <li>Editorial Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-[20px] mb-6">More info</h4>
            <ul className="space-y-3 text-[#DEDEDE] text-base">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>Payment terms</li>
              <li>Terms and Conditions</li>
              <li>AI Usage Consent</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-[20px] mb-6">Resources</h4>
            <ul className="space-y-3 text-[#DEDEDE] text-base">
              <li>Refund Policy</li>
              <li>HIPAA Notice</li>
              <li>HIPAA Privacy Policy</li>
              <li>Sitemap</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/30 mt-16 pt-8 text-center text-white text-sm">
          The content presented on mental health tele is intended solely for informational and educational purposes. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your healthcare provider with any questions you may have regarding a medical condition or treatment options. Our content does not replace the need for professional medical consultation and should not be used as medical advice under any circumstances.
        </div>

      </div>
    </footer>
  )
}