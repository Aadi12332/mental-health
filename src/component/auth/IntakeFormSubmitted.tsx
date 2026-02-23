import {
  ClipboardList,
  FileText,
  Headset,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../assets/images/backArrow.svg";
import Button from "../../ui/Button";
import SuccessImg from "../../assets/images/successicon.svg";
import bgImage from "../../assets/images/bgimg.svg";
import Logo from "../../assets/images/logo.svg";

export default function IntakeFormSubmitted() {
  const navigate = useNavigate();

  return (
        <div className="bg-[linear-gradient(180deg,#F0F9F7_0%,#E8F4F8_100%)] h-screen w-full">
      <div
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center lg:px-6 px-3 w-full py-10 overflow-auto scroll-hide"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="flex items-center gap-3 mb-[40px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="Logo" className="h-[50px]" />
        </div>
         <div className="bg-white max-w-[585px] mx-auto w-full rounded-[20px] p-3 lg:p-6 shadow-[0px_3.9px_5.86px_-3.9px_#0000001A,0px_9.76px_14.64px_-2.93px_#0000001A] border-b border-[#219580]">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center bg-[#2195801A] rounded-full w-9 h-9"
        >
          <img src={BackArrow} alt="Back" />
        </button>

          <>
            <div className="text-center mb-5 max-w-[330px] mx-auto flex flex-col justify-center items-center">
             <img src={SuccessImg} alt="" className="-mt-8" />
              <p className="text-[30px] font-semibold mt-5 leading-[1.2] mb-2">
                Form Successfully Submitted! 
              </p>
              <p className="text-[18px] text-[#333333]">
                We have sent you an Invoice through mail and SMS
              </p>
            </div>
            <div className="space-y-5">
              <div className="w-full">
                    <div className="w-full" onClick={() => navigate("/signin")}>
                      <Button className="w-full max-w-[352px] mx-auto">
                        Login to your Profile →
                      </Button>
                    </div>
              </div>
            </div>
          </>
      </div>
      </div>
    </div>
  );
}
