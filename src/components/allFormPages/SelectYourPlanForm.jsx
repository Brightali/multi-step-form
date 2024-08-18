import { iconarcade, iconadvanced, iconpro } from "../../assets/images";
import { useState } from "react";

const SelectYourPlanForm = () => {
  const [active, setActive] = useState(null);
  const [amount, setAmount] = useState(null);

  const plans = [
    { icon: iconarcade, name: "Arcade", amount: 90, duration: "2 months free" },
    {
      icon: iconadvanced,
      name: "Advanced",
      amount: 120,
      duration: "2 months free",
    },
    { icon: iconpro, name: "Pro", amount: 150, duration: "2 months free" },
  ];

  const handleclick = (index, value) => {
    setActive(index);
    setAmount(value);
  };

  return (
    <div className="flex flex-col gap-2">
      {plans.map((plan, index) => (
        <div
          onClick={() => handleclick(index, plan.amount)}
          key={index}
          className={`flex gap-4 w-full ${
            index === active ? "border-purple-800 border-2" : "border-2"
          } p-3 rounded-lg`}
        >
          <div>
            <img src={plan.icon} alt="" />
          </div>
          <div>
            <p className="font-bold">{plan.name}</p>
            <p className="text-gray-400 text-sm">{`$${plan.amount}/yr`}</p>
            <p className="text-sm">{plan.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectYourPlanForm;
