import { useState } from "react";

const questions = [
  "Little Interest Or Pleasure In Doing Things",
  "Feeling Down, Depressed, Or Hopeless",
  "Trouble Falling Or Staying Asleep, Or Sleeping Too Much",
  "Feeling Tired Or Having Little Energy",
  "Poor Appetite Or Overeating",
  "Feeling Bad About Yourself Or That You Are A Failure Or Have Let Yourself Or Your Family Down",
  "Trouble Concentrating On Things, Such As Reading The Newspaper Or Watching Television",
  "Moving Or Speaking So Slowly That Other People Could Have Noticed? Or The Opposite Being So Fidgety Or Restless That You Have Been Moving Around A Lot More Than Usual",
  "Thoughts That You Would Be Better Off Dead Or Of Hurting Yourself In Some Way",
];

const options = [
  { label: "Not At All", value: 0 },
  { label: "Several Days", value: 1 },
  { label: "More Than Half The Days", value: 2 },
  { label: "Nearly Every Day", value: 3 },
];

export default function PatientHealthQuestionnaire() {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  const handleSelect = (qIndex: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: value }));
  };

  return (
    <div className="w-full">
      <h2 className="text-[22px] md:text-[26px] font-semibold text-[#2F7D7A] mb-6">
        Patient Health Questionnaire-9
      </h2>

      <div className="overflow-x-auto border border-[#B5B5B5]">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead className="bg-[#F4F8F7]">
            <tr>
              <th className="text-left p-4 min-w-[350px] font-medium border border-[#B5B5B5]">
                Over The Last 2 Weeks, How Often Have You Been Bothered <br />
                By Any Of The Following Problems?
              </th>
              {options.map((opt) => (
                <th
                  key={opt.value}
                  className="p-4 text-center min-w-[150px] font-medium border border-[#B5B5B5]"
                >
                  {opt.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {questions.map((question, qIndex) => (
              <tr key={qIndex} className="border-t">
                <td className="p-4 align-center border border-[#B5B5B5]">
                  {qIndex + 1}. {question}
                </td>

                {options.map((opt) => (
                  <td key={opt.value} className="text-center p-4 border border-[#B5B5B5]">
                    <button
                      onClick={() => handleSelect(qIndex, opt.value)}
                      className={`w-10 h-10 rounded-full transition ${
                        answers[qIndex] === opt.value
                          ? "bg-[#219580] text-white border-[#219580]"
                          : "border-gray-300 hover:border-[#219580]"
                      }`}
                    >
                      {opt.value}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden mt-8 space-y-6">
        {questions.map((question, qIndex) => (
          <div key={qIndex} className="border rounded-[14px] p-4">
            <p className="mb-4 font-medium">
              {qIndex + 1}. {question}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(qIndex, opt.value)}
                  className={`py-2 px-3 rounded-[8px] border text-sm transition ${
                    answers[qIndex] === opt.value
                      ? "bg-[#219580] text-white border-[#219580]"
                      : "border-gray-300"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}