import { useState } from "react";
import { Calendar, Check, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../assets/images/backArrow.svg";
import Logo from "../../assets/images/logo.svg";
import PatientHealthQuestionnaire from "./PatientHealthQuestionnaire";
import Button from "../../ui/Button";

const difficultyOptions = [
  "Not Difficult At All",
  "Somewhat Difficult",
  "Very Difficult",
  "Extremely Difficult",
];

export default function IntakeForm() {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [answers, setAnswers] = useState<number[]>(Array(9).fill(null));

  const totalScore = answers.reduce((acc, val) => acc + val, 0);

  return (
    <div className="min-h-screen bg-[#F4F9F8] w-full p-6">
      <div
        className="flex items-center justify-center w-full gap-3 mt-[20px] cursor-pointer mb-10"
        onClick={() => navigate("/")}
      >
        <img src={Logo} alt="Logo" className="h-[50px]" />
      </div>
      <div className="max-w-[1380px] mx-auto rounded-[20px] bg-[#F9F9F9] border border-[#E6E8EE] shadow-sm p-5 mb-5">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2195801A] mb-5"
        >
          <img src={BackArrow} alt="" />
        </button>

        <div className="border border-[#E5E7EB] bg-white rounded-[10px] p-5">
          <h2 className="text-[22px] font-semibold text-[#2F7D7A] mb-8">
            Basic Information
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Input label="Full Name" defaultValue="John" />
            <Input label="Middle Initial" defaultValue="Doe" />
            <Input label="Last Name" defaultValue="-" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Input label="Sex" defaultValue="Male" />
            <Input
              label="DOB"
              placeholder="DD/MM/YYYY"
              icon={<Calendar size={18} />}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Input label="Primary Phone Number" defaultValue="0987654321" />
            <Input label="Mobile Number" defaultValue="0987654321" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Input label="Work Phone Number" defaultValue="0987654321" />
            <Input label="Email" defaultValue="Johndoe@Gmail.Com" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Input
              label="Address"
              defaultValue="Black Purl Society, Baner, Pune"
            />
            <Input
              label="Address"
              defaultValue="Black Purl Society, Baner, Pune"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Input label="City" defaultValue="Pune" />
            <Input label="State" defaultValue="Maharashtra" />
            <Input label="Zip" defaultValue="412101" />
          </div>

          <div className="mb-6">
            <Input label="Marital Status" defaultValue="Single" />
          </div>

          <div>
            <label className="block text-[16px] font-medium mb-2">
              State Driving License / State Id
            </label>
            <div className="flex items-center border rounded-[12px] px-4 py-3">
              <input
                placeholder="Enter State Driving License / State Id"
                className="flex-1 outline-none text-[14px]"
              />
              <button className="flex items-center gap-2 bg-[#F3F4F6] px-3 py-1 rounded-md text-[13px]">
                Upload Here
                <Upload size={14} />
              </button>
            </div>
          </div>
        </div>
        <div className="border border-[#E5E7EB] bg-white rounded-[10px] p-5 mt-5">
          <h2 className="text-[22px] font-semibold text-[#2F7D7A] mb-8">
            Emergency Contact
          </h2>

          <div className="mb-6">
            <Input label="Relationship To Contact" defaultValue="Brother" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Input label="First Name" defaultValue="John" />
            <Input label="Middle Name" defaultValue="-" />
            <Input label="Last Name" defaultValue="Doe" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Input label="Primary Phone Number" defaultValue="0987654321" />
            <Input label="Mobile Number" defaultValue="0987654321" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Input label="Work Phone Number" defaultValue="0987654321" />
            <Input label="Email" defaultValue="Johndoe@Gmail.Com" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Input
              label="Address Line 1"
              defaultValue="Black Purl Society, Baner, Pune"
            />
            <Input
              label="Address Line 2"
              defaultValue="Black Purl Society, Baner, Pune"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Input label="City" defaultValue="Pune" />
            <Input label="State" defaultValue="Maharashtra" />
            <Input label="Zip" defaultValue="412101" />
          </div>
        </div>
        <div className="border border-[#E5E7EB] bg-white rounded-[10px] p-5 mt-5">
          <h2 className="text-[22px] font-semibold text-[#2F7D7A] mb-8">
            Medical Question
          </h2>

          <div className="mb-6">
            <Input label="List Your Past Medical History" placeholder="Add" />
          </div>

          <div className="mb-6">
            <Input label="Current Medications" placeholder="Add" />
          </div>

          <div className="mb-6">
            <Input label="Medications Allergy" placeholder="Add" />
          </div>

          <div className="mb-6">
            <Input label="Your Preferred Pharmacies" placeholder="Add" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Input label="Pharmacy Name" placeholder="Pharmacy" />
            <Input
              label="Pharmacy Address"
              defaultValue="Black Purl Society, Baner, Pune"
            />
          </div>

          <div>
            <Input label="How Did You Hear About Us?" defaultValue="Website" />
          </div>
        </div>
      </div>
      <div className="max-w-[1380px] mx-auto rounded-[20px] bg-[#F9F9F9] border border-[#E6E8EE] shadow-sm p-5">
        <div className="border border-[#E5E7EB] bg-white rounded-[10px] p-5">
          <PatientHealthQuestionnaire />

          <div className="mt-10">
            <p className="text-[16px] md:text-[18px] mb-6">
              If You Checked Off Any Problems, How Difficult Have These Problems
              Made It For You To Do Your Work, Take Care Of Things At Home, Or
              Get Along With Other People?
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {difficultyOptions.map((item) => {
                const isActive = difficulty === item;

                return (
                  <div
                    key={item}
                    onClick={() => setDifficulty(item)}
                    className={`cursor-pointer rounded-[14px] p-6 text-center border transition ${
                      isActive
                        ? "border-[#219580] bg-[#F4F8F7]"
                        : "border-transparent bg-[#F4F8F7]"
                    }`}
                  >
                    <p className="mb-4 font-medium">{item}</p>

                    <div className="flex justify-center">
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center ${
                          isActive
                            ? "bg-[#219580] border-[#219580]"
                            : "border-gray-400 bg-white"
                        }`}
                      >
                        {isActive && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end" onClick={() => navigate("/intake-form-submitted")}>
              <Button className="px-8">Submit Details →</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1380px] mx-auto mt-10 bg-[#F4F8F7] rounded-[16px] p-6 text-[16px] md:text-[18px]">
        <div className="flex flex-wrap items-center justify-end gap-2">
          <span className="font-medium">For Office Coding</span>

          <span>0</span>
          <span>+</span>

          <span className="min-w-[40px] min-h-6 border-b border-black text-center inline-block">
              {answers[1]}
            </span>
          <span>+</span>

           <span className="min-w-[40px] min-h-6 border-b border-black text-center inline-block">
              {answers[2]}
            </span>
          <span>+</span>

          <span className="min-w-[40px] min-h-6 border-b border-black text-center inline-block">
              {answers[3]}
            </span>

          <div className="w-full flex justify-end">
            <span className="ml-4 font-medium">= Total Score</span>

            <span className="min-w-[80px] border-b border-black text-center inline-block">
              {totalScore}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  defaultValue,
  placeholder,
  icon,
}: {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[16px] font-medium mb-2">{label}</label>
      <div className="relative">
        <input
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full border rounded-[12px] px-4 py-3 text-[14px] outline-none"
        />
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
