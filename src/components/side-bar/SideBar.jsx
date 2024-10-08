import React from "react";
import { Logo, iconSet, Icons } from "../../constants";

function SideBar() {
  return (
    <div className="w-16 h-screen fixed left-0 top-0 bg-standard">
      <div className="w-full h-24 grid place-items-center">
        <img src={Logo} alt="logo here" className="w-9 h-9" />
      </div>

      <div className="w-full h-1/2 ">
        <ul className="h-full  grid gap-10 place-items-center items-center  ">
          {iconSet.map((data, index) => {
            const Icon = Icons[data];
            return (
              <li
                key={index}
                className="hover:scale-125 transition-transform cursor-pointer"
              >
                {<Icon size={18} />}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full h-1/3  grid place-items-center">
        <Icons.LogOut size={19} />
      </div>
    </div>
  );
}

export default SideBar;
