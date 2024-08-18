import { useState, useRef, useEffect } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import PickAddonsForms from "./PickAddonsForms";
import SelectYourPlanForm from "./SelectYourPlanForm";
import Finishingup from "./Finishingup";
import Thankyou from "./Thankyou";

const MainForm = () => {
  const [page, setPage] = useState(0);
  const [formdata, setFormdata] = useState({});

  const title = [
    "Personal info",
    "Select your plan",
    "Pick add-ons",
    "Finishing up",
  ];

  const subtitle = [
    "Please provide your name, email address, and phone number.",
    "You have the option of monthly or yearly billing.",
    "Add-ons help enhance your gaming experience.",
    "Double-check everything looks OK before confirming.",
  ];

  const Pages = () => {
    if (page === 0) {
      return <PersonalInfoForm />;
    } else if (page === 1) {
      return <SelectYourPlanForm />;
    } else if (page === 2) {
      return <PickAddonsForms />;
    } else if (page === 3) {
      return <Finishingup />;
    } else {
      return <Thankyou />;
    }
  };

  return (
    <div className="h-dvh w-dvw  ">
      <div className="h-[20%] w-full bg-mobilesidebar bg-cover relative ">
        <div className="flex gap-3 absolute top-8 -translate-x-[50%] left-[50%]">
          {title.map((_, index) => (
            <div
              key={index}
              onClick={() => setPage(index)}
              className={`h-8 w-8 rounded-full transition-colors duration-500 border-white  grid place-items-center font-semibold ${
                (page === 4 || page === 5) && index === title.length - 1
                  ? "bg-cyan-100"
                  : page === index
                  ? "text-blue-950 bg-cyan-100"
                  : "text-white border-2"
              }`}
            >
              <p>{index + 1}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[80%] bg-blue-100/70 relative">
        <div className=" w-[85%] min-h-96 p-6 shadow-lg bg-slate-100 -translate-x-[50%] left-[50%] absolute -top-12 rounded-xl">
          <div className="">
            <h1 className="font-bold text-2xl pb-2">{title[page]}</h1>
            <p className="text-sm max-w-[90%] text-gray-500">
              {subtitle[page]}
            </p>
          </div>

          <div className="mt-8 ">{Pages()}</div>
        </div>
        <div className="w-full h-[10%] flex justify-between items-center px-8 bg-slate-100 absolute bottom-0">
          <button
            className={`rounded-md px-8 py-2 font-bold text-gray-500 ${
              page === 0 ? "" : "bg-gray-200"
            }`}
            onClick={() => setPage((currPage) => currPage - 1)}
            disabled={page === 0}
          >
            {page === 0 ? "" : "Go Back"}
          </button>

          <button
            className="bg-blue-950 rounded-md text-white px-8 py-2 "
            onClick={() => {
              if (page === title.length) {
                alert("FORM SUBMITTED");
                console.log(page);
                return;
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === title.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
