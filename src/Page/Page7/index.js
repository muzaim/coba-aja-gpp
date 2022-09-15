import React from "react";
import Farmer1 from "../../img/common/farmer1.png";
import Diamond from "../../img/common/diamond.png";

const Page7 = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-barn bg-left bg-cover opacity-90 lg:max-w-6xl mx-auto">
      <div className="w-[90%] h-full mx-auto">
        {/* HEADER */}
        <div class="h-16">
          <div className="flex h-full items-center gap-2">
            <div className="w-44 h-10 bg-white  rounded-full items-center flex">
              <div className="w-20 flex items-center justify-center ">
                <img src={Diamond} alt="" className="w-10" />
              </div>
              <div className="w-full text-start ">
                <span className="text-[#782443] font-bold font-openSans text-sm">
                  Rp.12.000
                </span>
              </div>
            </div>
            <div className="w-44 h-10 bg-white  rounded-full items-center flex">
              <div className="w-20 flex items-center justify-center ">
                <img src={Diamond} alt="" className="w-10" />
              </div>
              <div className="w-full text-start ">
                <span className="text-[#782443] font-bold font-openSans text-sm">
                  Rp.12.000
                </span>
              </div>
            </div>
            <div className="w-44 h-10 bg-white  rounded-full items-center flex">
              <div className="w-20 flex items-center justify-center ">
                <img src={Diamond} alt="" className="w-10" />
              </div>
              <div className="w-full text-start ">
                <span className="text-[#782443] font-bold font-openSans text-sm">
                  Rp.12.000
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* HEADER END */}
        <div class="flex">
          <div class="w-56 h-screen">
            <div className="flex justify-center">
              <img src={Farmer1} alt="" className="w-[5.8rem]" />
            </div>
          </div>
          <div class=" w-full h-screen">
            <div class="w-full bg-gray-200 h-5 mb-6 rounded-full overflow-hidden">
              <div
                class="bg-blue-600 h-5 rounded-r-full "
                style={{ width: "25%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
