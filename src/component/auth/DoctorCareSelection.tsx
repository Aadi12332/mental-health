import { useState } from "react";
import {
  ClipboardList,
  ClipboardPlus,
  FileText,
  Headset,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  Clock,
  Check,
  Lock,
  Trash2,
  RefreshCcw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import GradientButton from "../landing/GradientButton";
import BackArrow from "../../assets/images/backArrow.svg";
import Button from "../../ui/Button";
import SuccessImg from "../../assets/images/successicon.svg";
import FailedImg from "../../assets/images/failedicon.svg";

const continuityData = [
  {
    title: "Share What Treatment Works For You",
    description:
      "A licensed provider will carefully review your history and current plan to ensure it's safe and best for you.",
    icon: <FileText size={22} stroke="url(#iconGradient)" />,
  },
  {
    title: "Meet Your Provider As Soon As Today",
    description:
      "Hassle-Free, Online Appointments Available Often The Same Day Or Within 48 Hours.",
    icon: <Headset size={22} stroke="url(#iconGradient)" />,
  },
  {
    title: "Resume Treatment The Same Day",
    description:
      "Our Providers Send E-Prescriptions To Pharmacies Right After The Appointment.",
    icon: <ClipboardList size={22} stroke="url(#iconGradient)" />,
  },
];

export default function DoctorCareSelection() {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(1);
  const [successFull, setSuccessFull] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [activeCalendarTab, setActiveCalendarTab] = useState<
    "anytime" | "range"
  >("anytime");
  const [activeCardTab, setActiveCardTab] = useState<"debit" | "credit">(
    "debit",
  );

  const slots = [
    { date: "Today", start: "10:00 AM", end: "12:00 PM" },
    { date: "Sep 19", start: "11:30 AM", end: "1:30 PM" },
    { date: "Sep 20", start: "10:30 AM", end: "4:30 PM" },
    { date: "Sep 25", start: "9:30 AM", end: "12:30 PM" },
  ];

  const options = [
    {
      label: "New Patient",
      price: 195,
      icon: <ClipboardList size={28} stroke="url(#iconGradient)" />,
    },
    {
      label: "Continue Care Patient",
      price: 159,
      icon: <ClipboardPlus size={28} stroke="url(#iconGradient)" />,
    },
  ];

  const handleBack = () => {
    if (step === 1) {
      window.history.back();
    } else {
      setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7);
    }
  };

  const invoiceId = "202501";

  const invoiceData = [
    { label: "Therapist:", value: "Dr. Emily Chen" },
    { label: "Date:", value: "1/16/2026" },
    { label: "Time:", value: "10:00 AM" },
    { label: "Consultation Fee:", value: "$120" },
  ];

  return (
    <div className="w-full max-w-[585px] mx-auto">
      {
        step === 7 && (
      <div className="bg-white rounded-[20px] p-3 lg:p-6 shadow-[0px_3.9px_5.86px_-3.9px_#0000001A,0px_9.76px_14.64px_-2.93px_#0000001A] border-b border-[#219580] mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-[16px] text-[#219580]">Invoice</h2>

          <span className="text-[16px] text-[#219580]">{invoiceId}</span>
        </div>

        <div className="space-y-2 text-[14px]">
          {invoiceData.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-[#4A5565]">{item.label}</span>
              <span className=" text-[#101828]">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      )}
      <div className="bg-white rounded-[20px] p-3 lg:p-6 shadow-[0px_3.9px_5.86px_-3.9px_#0000001A,0px_9.76px_14.64px_-2.93px_#0000001A] border-b border-[#219580]">
        <button
          onClick={handleBack}
          className="flex items-center justify-center bg-[#2195801A] rounded-full w-9 h-9"
        >
          <img src={BackArrow} alt="Back" />
        </button>

        {step === 1 && (
          <div>
            <div className="text-center mb-8">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Doctor"
                className="w-[99px] h-[99px] rounded-full mx-auto mb-4 object-cover"
              />

              <h2 className="text-[20px] font-semibold text-[#141416]">
                Dr. Michael Chichak, MD
              </h2>

              <p className="text-[#333333] text-base mb-4">Medical Director</p>

              <p className="text-[#333333] text-lg">
                Hi, I'm David. I Oversee Treatment Of All Our Patients.
              </p>

              <p className="text-[#333333] text-lg mb-6">
                Let's Find The Best Medical Provider For You.
              </p>

              <h3 className="text-[20px] font-semibold text-[#141416]">
                Which Type Of ADHD Care Are You Looking For?
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {options.map((item) => {
                const isActive = selected === item.label;

                return (
                  <div
                    key={item.label}
                    onClick={() => {
                      setSelected(item.label);
                      setStep(2);
                    }}
                    className={`cursor-pointer rounded-[10px] bg-[#F4F9F8] p-6 border-2 hover:border-[#219580] text-center transition-all duration-200 ${
                      isActive
                        ? "border-2 border-[#219580]"
                        : "border-2 border-transparent"
                    }`}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 flex items-center justify-center bg-[#2195801A] rounded-xl">
                        {item.icon}
                      </div>
                    </div>

                    <p className="text-lg font-semibold mb-2">{item.label}</p>

                    <GradientButton fontSize="text-lg font-semibold">
                      ${item.price}
                    </GradientButton>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {step === 2 && (
          <>
            <div className="text-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Doctor"
                className="w-[99px] h-[99px] rounded-full mx-auto mb-4 object-cover"
              />

              <h2 className="text-[20px] font-semibold">
                Dr. Michael Chichak, MD
              </h2>

              <p className="text-base mb-4">Medical Director</p>

              <p className="text-lg text-[#333333] mb-4">
                We Are Here To Make The Transfer Of Your <br /> ADHD Treatment
                Seamless.
              </p>

              <h3 className="text-[20px] text-[#141416] font-semibold">
                We Prioritize Continuity & Uninterrupted Care
              </h3>
            </div>

            <div className="space-y-5 mb-6">
              {continuityData.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#C8C8C8] rounded-[9px] p-5 flex gap-4 max-w-[502px] mx-auto"
                >
                  <div className="mt-1">{item.icon}</div>

                  <div>
                    <h4 className="text-[20px] font-semibold mb-2 text-[#141416]">
                      {item.title}
                    </h4>

                    <p className="text-[#333333] text-[16px] leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full" onClick={() => setStep(3)}>
              <Button className="w-full max-w-[502px] mx-auto">
                Book My Appointment →
              </Button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="flex -space-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="w-[89px] h-[89px] rounded-full object-cover"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="w-[89px] h-[89px] rounded-full object-cover"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    className="w-[89px] h-[89px] rounded-full object-cover"
                  />
                  <div className="w-[89px] h-[89px] rounded-full bg-[#E9F4F2] flex items-center justify-center text-[20px] font-semibold text-[#141416]">
                    50+
                  </div>
                </div>
              </div>

              <p className="text-[#333333] text-[18px] max-w-[400px] mx-auto mb-6">
                Over 50 Experienced Providers Specializing In ADHD Are Ready To
                Help
              </p>

              <GradientButton fontSize="text-[24px] font-semibold">
                Set Up Your Patient Profile
              </GradientButton>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[18px] font-medium text-[#141416] mb-2">
                    First Name*
                  </label>
                  <input
                    placeholder="Enter First Name"
                    className="w-full h-[48px] border border-[#DADADA] rounded-[10px] px-4 text-[16px] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[18px] font-medium text-[#141416] mb-2">
                    Last Name*
                  </label>
                  <input
                    placeholder="Enter Last Name"
                    className="w-full h-[48px] border border-[#DADADA] rounded-[10px] px-4 text-[14px] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-[18px] font-medium text-[#141416] mb-2">
                    Zip Code*
                  </label>
                  <input
                    placeholder="Enter Zip Code"
                    className="w-full h-[48px] border border-[#DADADA] rounded-[10px] px-4 pr-12 text-[14px] focus:outline-none"
                  />
                  <div className="absolute right-4 top-[52px] text-gray-400">
                    i
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-[18px] font-medium text-[#141416] mb-2">
                    Date Of Birth*
                  </label>
                  <input
                    placeholder="MM/DD/YYYY"
                    className="w-full h-[48px] border border-[#DADADA] rounded-[10px] px-4 pr-12 text-[14px] focus:outline-none"
                  />
                  <div className="absolute right-4 top-[52px] text-gray-400">
                    📅
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[18px] font-medium text-[#141416] mb-2">
                  Mobile Number*
                </label>
                <input
                  placeholder="+1"
                  className="w-full h-[48px] border border-[#DADADA] rounded-[10px] px-4 text-[14px] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[18px] font-medium text-[#141416] mb-2">
                  Email*
                </label>
                <input
                  placeholder="Enter Email"
                  className="w-full h-[48px] border border-[#DADADA] rounded-[10px] px-4 text-[14px] focus:outline-none"
                />
              </div>

              <div className="space-y-4 text-[15px] text-[#333333]">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] min-w-[18px] accent-[#219580]"
                  />
                  <p className="text-sm text-[#333333]">
                    I Agree To Receive Marketing Messages And Follow-Up Visit
                    Reminders Via SMS & Email. Message Frequency Varies. Text
                    STOP To Opt-Out.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] min-w-[18px] accent-[#219580]"
                  />
                  <p className="text-sm text-[#333333]">
                    I Agree To The Mental Health Tally Health{" "}
                    <span className="text-[#4079FF]">
                      Terms Of Use , Privacy Policy , Terms And Conditions ,
                      Telehealth Consent , Artificial Intelligence Usage Consent
                      , Refund Policy
                    </span>{" "}
                    , And To Receive Login And Appointment Links Via SMS.*
                  </p>
                </div>
              </div>

              <div className="w-full" onClick={() => setStep(4)}>
                {" "}
                <Button className="w-full">
                  {" "}
                  Create My Patient Profile →
                </Button>{" "}
              </div>

              <p className="text-center text-[#A4A4A4] text-[20px]">
                Already Have An Account?{" "}
                <span
                  onClick={() => navigate("/signin")}
                  className="text-[#2F7D7A] font-medium cursor-pointer"
                >
                  Sign In
                </span>
              </p>
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <div className="text-center mb-8">
              <GradientButton fontSize="text-[25px] font-semibold mt-5">
                When would you like to have an appointment?
              </GradientButton>
            </div>

            <div className="space-y-6">
              <div className="">
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div
                    onClick={() => setActiveCalendarTab("anytime")}
                    className={`cursor-pointer rounded-[11px] bg-[#F4F9F8] p-8 text-center border-2 transition ${
                      activeCalendarTab === "anytime"
                        ? "border-[#219580]"
                        : "border-transparent"
                    }`}
                  >
                    <div className="flex justify-center mb-4">
                      <CalendarCheck size={36} stroke="url(#iconGradient)" />
                    </div>
                    <p
                      className={`text-[20px] font-semibold ${
                        activeCalendarTab === "anytime"
                          ? "text-[#2F7D7A]"
                          : "text-[#141416]"
                      }`}
                    >
                      Any Time Today
                    </p>
                  </div>

                  <div
                    onClick={() => setActiveCalendarTab("range")}
                    className={`cursor-pointer rounded-[11px] bg-[#F4F9F8] p-8 text-center border-2 transition ${
                      activeCalendarTab === "range"
                        ? "border-[#219580]"
                        : "border-transparent"
                    }`}
                  >
                    <div className="flex justify-center mb-4">
                      <CalendarClock size={36} stroke="url(#iconGradient)" />
                    </div>
                    <p
                      className={`text-[20px] font-semibold ${
                        activeCalendarTab === "range"
                          ? "text-[#2F7D7A]"
                          : "text-[#141416]"
                      }`}
                    >
                      Pick A Time Range
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {slots.map((slot, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[1fr_1fr_auto_1fr_auto] items-center gap-4"
                    >
                      <div className="bg-[#F4F9F8] rounded-[10px] h-[48px] flex items-center justify-center text-[18px] text-[#333333]">
                        {slot.date}
                      </div>

                      <div className="bg-[#F4F9F8] rounded-[10px] h-[48px] flex items-center justify-center text-[18px] text-[#333333]">
                        {slot.start}
                      </div>

                      <div className="text-[22px] font-semibold text-[#333333]">
                        –
                      </div>

                      <div className="bg-[#F4F9F8] rounded-[10px] h-[48px] flex items-center justify-center text-[18px]">
                        {slot.end}
                      </div>

                      <div className="bg-[#F4F9F8] rounded-[10px] h-[48px] w-[48px] flex items-center justify-center cursor-pointer">
                        <Trash2 size={18} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full" onClick={() => setStep(5)}>
                {" "}
                <Button className="w-fit ml-auto px-8"> Next →</Button>{" "}
              </div>
            </div>
          </>
        )}
        {step === 5 && (
          <>
            <div className="text-center mb-5">
              <p className="text-[30px] font-semibold mt-5">
                Complete Your Payment
              </p>
              <p className="text-[18px] text-[#333]">
                Secure your appointment by completing the payment
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-[11px] border border-[#DDD8D8] overflow-hidden">
                <div className="bg-[#EEF3F2] px-4 py-4 text-[18px] font-medium">
                  Appointment Summary
                </div>

                <div className="px-4 pt-4 flex gap-4 items-start">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Doctor"
                    className="w-[58px] h-[58px] rounded-[10px] object-cover"
                  />

                  <div>
                    <h3 className="text-[22px] font-semibold">
                      Dr. Arvind Shah
                    </h3>
                    <p className="text-[#555] text-[16px] mb-4">Cardiologist</p>
                  </div>
                </div>
                <div className="flex px-4 pb-4 items-center gap-6 text-[15px] text-[#333]">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={18} />
                    <span>28 Apr 2024</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>11:00 AM</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[11px] border border-[#DDD8D8] overflow-hidden">
                <div className="bg-[#EEF3F2] px-4 py-4 text-[18px] font-medium">
                  Patient
                </div>

                <div className="p-4 text-[18px]">Rajesh Patel</div>
              </div>

              <div className="rounded-[11px] border border-[#DDD8D8] overflow-hidden">
                <div className="bg-[#EEF3F2] px-4 py-4 text-[18px] font-medium">
                  Payment Details
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-5 h-5 accent-[#219580]"
                    />
                    <span className="text-[18px]">Consultation Fee</span>
                  </div>

                  <span className="text-[18px]">₹ 800</span>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="flex-1" onClick={() => setStep(4)}>
                  {" "}
                  <Button className="w-full"> Edit Appointment →</Button>{" "}
                </div>
                <div className="flex-1" onClick={() => setStep(6)}>
                  {" "}
                  <Button className="w-full"> Pay Now →</Button>{" "}
                </div>
              </div>
            </div>
          </>
        )}
        {step === 6 && (
          <>
            <div className="text-center mb-5">
              <p className="text-[30px] font-semibold mt-5">Payment Method</p>
            </div>

            <div className="space-y-5">
              <div className="border-2 border-[#219580] rounded-[11px] p-4 bg-[#F4F9F8]">
                <div className="flex gap-3 mb-5">
                  <button
                    onClick={() => setActiveCardTab("debit")}
                    className={`px-2.5 py-2 rounded-[5px] bg-white text-[16px] font-medium border transition ${
                      activeCardTab === "debit"
                        ? "border-[#219580] text-[#219580] bg-white"
                        : "border-transparent text-[#333]"
                    }`}
                  >
                    Debit Card
                  </button>

                  <button
                    onClick={() => setActiveCardTab("credit")}
                    className={`px-2.5 py-2 rounded-[5px] bg-white text-[16px] font-medium border transition ${
                      activeCardTab === "credit"
                        ? "border-[#219580] text-[#219580] bg-white"
                        : "border-transparent text-[#333]"
                    }`}
                  >
                    Credit Card
                  </button>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#219580] flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <p className="text-[16px] font-semibold">
                      Pay with Credit Card
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-[45px] h-[30px] bg-white rounded-[4px] text-[6px] border flex items-center justify-center font-bold text-[#1A1F71]">
                      VISA
                    </div>
                    <div className="w-[45px] h-[30px] bg-white rounded-[4px] text-[6px] border flex items-center justify-center font-semibold">
                      DISCOVER
                    </div>
                    <div className="w-[45px] h-[30px] bg-white rounded-[4px] text-[6px] border flex items-center justify-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-[-4px]" />
                      <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    </div>
                    <div className="w-[45px] h-[30px] bg-white rounded-[4px] text- border flex items-center justify-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-[-4px]" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-[15px] block mb-2 text-[#141416]">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        placeholder="1234 5678 9101 3456"
                        className="w-full h-[48px] rounded-[10px] border border-[#F1F3F7] bg-white shadow-md px-3 text-[14px] outline-none"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#2F7D7A] rounded-full flex items-center justify-center">
                        <Check size={10} className="text-white" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-[15px] block mb-2 text-[#141416]">
                      Expiration Date
                    </label>
                    <input
                      placeholder="MM/YY"
                      className="w-full h-[48px] rounded-[10px] border border-[#F1F3F7] bg-white shadow-md px-3 text-[14px] outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[15px] block mb-2 text-[#141416]">
                      Card Security Code
                    </label>
                    <input
                      placeholder="***"
                      className="w-full h-[48px] rounded-[10px] border border-[#F1F3F7] bg-white shadow-md px-3 text-[14px] outline-none"
                    />
                  </div>

                  <div className="flex items-end pb-4">
                    <GradientButton fontSize="text-[12px] text-[#2F7D7A] font-medium cursor-pointer">
                      What is this?
                    </GradientButton>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 mt-10">
                <div className="w-[28px] h-[28px] rounded-full bg-[#2195801A] border border-[#21958026] flex items-center justify-center">
                  <Lock size={16} stroke="url(#iconGradient)" />
                </div>

                <div>
                  <p className="text-[18px] text-[#333]">
                    We Protect Your Payment Information Using
                  </p>
                  <p className="text-[18px] text-[#333]">
                    Encryption To Provide Bank-Level Security.
                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="w-full" onClick={() => setStep(7)}>
                  {" "}
                  <Button className="w-fit px-8 ml-auto">
                    {" "}
                    Pay Now →
                  </Button>{" "}
                </div>
              </div>
            </div>
          </>
        )}
        {step === 7 && (
          <>
            <div className="text-center mb-5 max-w-[352px] mx-auto flex flex-col justify-center items-center">
              {
                successFull ? <img src={SuccessImg} alt="" className="-mt-8" /> : <img src={FailedImg} alt="" className="mb-5" />
              }
              <p className="text-[30px] font-semibold mt-5 leading-[1.2] mb-2">
                {
                    successFull ? "Payment Successfully Completed!" : "Payment Transaction Failed"
                }
              </p>
              <p className="text-[18px] text-[#333333]">
                
                {successFull ? "Please add your details for Doctor’s verification & Prescription" : "We couldn't process your payment. This might be due to incorrect details or bank restrictions."}
              </p>
            </div>
            <div className="space-y-5">
              <div className="w-full">
                {
                  successFull ? (
                    <div className="w-full" onClick={() => navigate("/intake-form")}>
                      <Button className="w-full max-w-[352px] mx-auto">
                        Complete your medical intake form
                      </Button>
                    </div>
                  ) : (
                    <div className="w-full" onClick={() => setStep(5)}>
                      <Button className="w-full max-w-[352px] mx-auto">
                        <RefreshCcw/> Retry Payment
                      </Button>
                    </div>
                  )
                }
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
