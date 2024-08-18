import { useState } from "react";

const PickAddonsForms = () => {
  const [active, setActive] = useState([]); // Array to manage the active states of checkboxes
  const [amount, setAmount] = useState([]);

  const addons = [
    {
      name: "Online service",
      description: "Access to Multiplayer games",
      amount: 1,
    },
    {
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      amount: 2,
    },
    {
      name: "Custom Profile",
      description: "Custom theme on your profile",
      amount: 2,
    },
  ];

  const handleclick = (index, amount) => {
    setAmount((prev) => {
      const newAmount = [...prev];
      if (newAmount.includes(index)) {
        // If the item is already active, remove it (uncheck)
        return newAmount.filter((i) => i !== index);
      } else {
        // If the item is not active, add it (check)
        newAmount.push(amount);
        console.log(newAmount);
        return newAmount;
      }
    });

    setActive((prev) => {
      const newActive = [...prev];
      if (newActive.includes(index)) {
        // If the item is already active, remove it (uncheck)
        return newActive.filter((i) => i !== index);
      } else {
        // If the item is not active, add it (check)
        newActive.push(index);
        return newActive;
      }
    });
  };

  return (
    <div className="flex flex-col gap-2 ">
      {addons.map((addon, index) => (
        <div
          onClick={() => handleclick(index, addon.amount)}
          key={index}
          className={`cursor-pointer flex gap-4 justify-between w-full ${
            active.includes(index) ? "border-purple-800 border-2" : "border-2"
          } p-3 rounded-lg`}
        >
          <div className="flex gap-4 items-center">
            <div className="checkbox-wrapper-12">
              <div className="cbx">
                <input
                  id={`cbx-${index}`}
                  type="checkbox"
                  checked={active.includes(index)}
                  onChange={() => handleclick(index, addon.amount)}
                  onClick={() => handleclick(index, addon.amount)}
                />
                <label htmlFor={`cbx-${index}`}></label>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                  <path d="M2 8.36364L6.23077 12L13 2"></path>
                </svg>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="goo-12">
                    <fegaussianblur
                      in="SourceGraphic"
                      stdDeviation="4"
                      result="blur"
                    ></fegaussianblur>
                    <fecolormatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                      result="goo-12"
                    ></fecolormatrix>
                    <feblend in="SourceGraphic" in2="goo-12"></feblend>
                  </filter>
                </defs>
              </svg>
            </div>
            <div>
              <p className="font-bold">{addon.name}</p>
              <p className="text-sm">{addon.description}</p>
            </div>
          </div>
          <div>
            <p className="text-purple-700 text-sm">{`+$${addon.amount}/mo`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PickAddonsForms;
