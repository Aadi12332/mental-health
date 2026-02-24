import { Shield, Clock, Users } from "lucide-react";

export function SupportInfoSection() {
  return (
    <section className="py-20 bg-[#F3F7F6]">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        
        <p className="text-[18px] md:text-[20px] text-[#4A5565] leading-relaxed max-w-[791px] mx-auto mb-16">
          Your privacy and comfort matter to us. Every message is handled with care and
          confidentiality by our dedicated support team.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#DCEEEE] flex items-center justify-center mb-5">
              <Shield className="w-8 h-8 text-[#4A8591]" strokeWidth={2.5} />
            </div>
            <h3 className="text-[18px] font-semibold mb-3 text-[#101828]">
              Secure Communication
            </h3>
            <p className="text-[#4A5565] text-[14px] leading-relaxed max-w-[240px]">
              Your information is protected with industry-leading encryption
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#DCEEEE] flex items-center justify-center mb-5">
              <Clock className="w-8 h-8 text-[#4A8591]" strokeWidth={2.5} />
            </div>
            <h3 className="text-[18px] font-semibold mb-3 text-[#101828]">
              Quick Response
            </h3>
            <p className="text-[#4A5565] text-[14px] leading-relaxed max-w-[240px]">
              We typically respond within 24 hours on business days
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#DCEEEE] flex items-center justify-center mb-5">
              <Users className="w-8 h-8 text-[#4DB39C]" strokeWidth={2.5} />
            </div>
            <h3 className="text-[18px] font-semibold mb-3 text-[#101828]">
              Professional Support
            </h3>
            <p className="text-[#4A5565] text-[14px] leading-relaxed max-w-[240px]">
              Caring experts trained in mental health assistance
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}