// components/RightPanel.jsx

"use client";
import { useState } from "react";
import Image from "next/image";
import WeeklyNudges from "./WeeklyNudges";
import Link from "next/link";
const RightPanel = () => {

  const [activeTab, setActiveTab] = useState<"weekly" | "local">("weekly");

  return (
    <div className="rounded-xl bg-[#F4F8FF] p-5">
      {/* Header Section */}
      <div className="flex items-center gap-2">
        <div className="bg-[#6B8BBA] h-12 w-12 rounded-full flex items-center justify-center " >
            <Image
                            src={'/images/icons/headphone.svg'}
                            alt={'icon'}
                            width={20}
                            height={20}
                            className="w-8 h-8"
                            />
        </div>
        <div className="flex flex-col gap-2" >
            <span className="bg-[#D9ECFF]  text-base px-2 py-1 rounded-md font-medium w-fit">
            Pitch Adherence
            </span>
            <span className="text-base text-[#556E94]">
            Structured (3) • Un-Structured(2)
            </span>
        </div>
      </div>

      <div className="border-[#CDDAED] border-b mb-9 mt-6" ></div>

      {/* User Name */}
      <div className="mb-4">

        <div className="flex items-center gap-2.5 mb-11">
          <Image
          src={'/images/icons/user.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <h3 className="text-lg font-medium text-[#03070D]">User Name</h3>
        </div>

        <div className="flex items-center gap-2.5 mb-2.5">
          <Image
          src={'/images/icons/prompt.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <span className="text-lg font-medium text-[#03070D]">Prompt</span>
        </div>

        <div className="">
          <p className="text-lg text-[#03070D] leading-relaxed">
            Please provide the detailed analytics for the video uploaded by
            Aniket Salvi, including the video file, transcript and relevant
            indexes
          </p>

          {/* Meta */}
          <div className="flex gap-7 items-center mt-5 mb-7">

            <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/star.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-[#556E94]">1k</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/star.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-[#556E94]">5m</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/star.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-[#556E94]">2 days ago</span>
            </div>
          </div>

          
          {/* Actions */}
          <div className="flex items-center gap-3 mt-3">
            <button className="cursor-pointer bg-[#6243F0] text-white px-4 py-1 rounded text-lg hover:bg-purple-700 flex h-10 flex-1 w-full justify-center items-center gap-2">
              <Image
          src={'/images/icons/prompt2.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-4 h-4"
          />
              Use Prompt
            </button>
            <button className="p-2 hover:outline-1 outline-[#8EA1BD] rounded-xl border border-[#8EA1BD] cursor-pointer">
              <Image
              src={'/images/icons/copy.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-5 h-5"
              />
            </button>
          </div>



        </div>
      </div>

      {/* Structured Data */}
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-6 mt-11">
          <Image
          src={'/images/icons/table.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <span className="text-lg font-medium text-[#03070D]">Structured Data (3)</span>
        </div>
        <div className="space-y-2">
          {structuredData.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between  p-1"
            >
              <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/column.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-5 h-5"
              />
              <span className="text-base font-normal ">{item.title}</span>
            </div>
              <span className="text-sm text-[#556E94]">
                ROWS (20) COLUMN (10)
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Unstructured Data */}
      <div>
        <div className="flex items-center gap-2.5 mb-6 mt-11">
          <Image
          src={'/images/icons/format.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <span className="text-lg font-medium text-[#03070D]">Unstructured Data (2)</span>
        </div>
        <div className="space-y-2">
          {unstructuredData.map((item) => (
            <Link key={item.title} href={item.url} target="blank" className="flex items-center  p-1" >
              <div>
                <div className="flex items-center gap-2.5">
                <Image
                src={'/images/icons/file.svg'}
                alt={'icon'}
                width={20}
                height={20}
                className="w-5 h-5"
                />
                <span className="text-base font-normal ">{item.title}</span>
              </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-10 mb-6 mt-11 bg-white w-[calc(100%_+_2.5rem)] ml-[-1.25rem] px-5 py-1">
          {/* <Image
            src={"/images/icons/format.svg"}
            alt={"icon"}
            width={20}
            height={20}
            className="w-7 h-7"
          /> */}
          <button
            onClick={() => setActiveTab("weekly")}
            className={`text-lg font-medium cursor-pointer py-2.5 ${
              activeTab === "weekly" ? "border-b-2 border-[#6243F0]" : "text-[#03070D]"
            }`}
          >
            Weekly Nudges
          </button>
          {/* <span className="text-lg font-medium text-[#03070D]">/</span> */}
          <button
            onClick={() => setActiveTab("local")}
            className={`text-lg font-medium cursor-pointer py-2.5 ${
              activeTab === "local" ? "border-b-2 border-[#6243F0]" : "text-[#03070D]"
            }`}
          >
            साप्ताहिक संकेत
          </button>
        </div>

        {activeTab === "weekly" && (
          <div className="space-y-2">
            <WeeklyNudges nudges={nudges} />
          </div>
        )}

        {activeTab === "local" && (
          <div className="space-y-2">
            <WeeklyNudges nudges={LocalNudges} />
          </div>
        )}
    </div>



    </div>
  );
};



const nudges = [
  { id: 1, title: "", description: "Hi Deepak, your explanations of features like the coin design drum really hit the mark—customers can see the value right away. This week, try adding a short pause after each big point, like after zero-pressure tech, to give folks time to take it in. You're off to a great start—keep building on that! 😊" },
  { id: 2, title: "", description: "Deepak, the hands-on demo with the pulsator at 01:55 was spot on for making things clear. Just a gentle reminder: After showing a feature, glance back at your customer for a quick connection—it strengthens that trust. You've got such a natural way with it. 👀" },
];
const LocalNudges = [
  { id: 1, title: "", description: "हाय दीपक, 'कॉइन डिज़ाइन ड्रम' जैसे फीचर्स को आप जिस तरह समझाते हैं, वह बहुत असरदार है—ग्राहकों को इसका फायदा तुरंत समझ आ जाता है। इस हफ़्ते, हर बड़े पॉइंट के बाद एक छोटा सा ठहराव लेने की कोशिश करें, जैसे 'ज़ीरो-प्रेशर टेक' के बारे में बताने के बाद, ताकि लोगों को उसे समझने का समय मिले। आपकी शुरुआत बहुत अच्छी है—इसे और बेहतर बनाते रहें! 😊" },
  { id: 2, title: "", description: "दीपक, [01:55] पर पल्सेटर का आपका हैंड्स-ऑन डेमो चीज़ों को स्पष्ट करने के लिए एकदम सटीक था। बस एक छोटा सा सुझाव: कोई फीचर दिखाने के बाद, ग्राहक से तुरंत जुड़ने के लिए उनकी ओर देखें—इससे भरोसा मजबूत होता है। आप इसे बहुत सहज तरीके से करते हैं। 👀" },
];

const structuredData = [
  {
    title: "Employees Table",
    url: "/data/structured/employees.csv", // replace with actual path or URL
  },
  {
    title: "Presentations Table",
    url: "/data/structured/presentations.csv", // replace with actual path or URL
  },
  {
    title: "Performance_KPIs Table",
    url: "/data/structured/performance_kpis.csv", // replace with actual path or URL
  },
];

const unstructuredData = [
  {
    title: "Video Link URL",
    url: "/videos/hindi.mp4", // replace with actual video URL
  },
  {
    title: "Translation.txt",
    url: "/hindi_readable_transcript.txt", // optional
  },
];

export default RightPanel;
