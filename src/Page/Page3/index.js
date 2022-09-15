import React from "react";
import Farmer1 from "../../img/common/farmer1.png";
import Diamond from "../../img/common/diamond.png";
import QuestBook from "../../img/common/questbook.png";

const Page3 = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-page2 bg-left bg-cover opacity-90 lg:max-w-6xl mx-auto">
      <div className="w-[90%] h-full mx-auto">
        <div class="h-16">
          <div className="flex h-full justify-between items-center ">
            <div className="w-44 h-10 bg-[#782443] rounded-full items-center flex">
              <div className="w-20 flex items-center justify-center ">
                <img src={Diamond} alt="" className="w-10" />
              </div>
              <div className="w-full text-start ">
                <span className="text-white font-bold font-openSans text-sm">
                  Rp.12.000
                </span>
              </div>
            </div>
            <div>
              <img src={QuestBook} alt="" className="w-16" />
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="w-56 h-screen">
            <div className="flex justify-center">
              <img src={Farmer1} alt="" className="w-[5.8rem]" />
            </div>
          </div>
          <div class=" w-full h-screen">
            <div className="w-[30rem] p-5 bg-[#782443] rounded-3xl">
              <h1 className="text-white tracking-wide text-center text-xl font-openSans">
                Pilih Agenda, dan mulai membeli kandang untuk hewan ternak kamu,
                beri makan hewan ternak kamu dan hasilkan telur dan susu, lalu
                jual ke pasar, dan mulai menghasilkan diamond lebih banyak lagi!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
