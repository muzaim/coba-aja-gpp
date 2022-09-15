import React from "react";
import Farmer1 from "../../img/common/farmer1.png";

const Page2 = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-page2 bg-left bg-contain opacity-90 lg:max-w-6xl mx-auto">
      <div className="w-[90%] h-full mx-auto">
        <div class="h-16 ">
          {/* Diamond */}
          {/* <div className="flex h-full justify-between items-center ">
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
          </div> */}
        </div>
        <div class="flex">
          <div class="w-56 h-screen ">
            <div className="flex justify-center">
              <img src={Farmer1} alt="" className="w-[5.8rem]" />
            </div>
          </div>
          <div class=" w-full h-screen ">
            <div className="w-[30rem] px-5 py-5 bg-[#782443] rounded-3xl">
              <h1 className="text-white font-semibold text-center text-xl font-openSans">
                Selamat datang di TAMAKOCHI, mulai dengan beternak hewan
                kesayangan kamu dan hasilkan diamond setiap harinya ! Dapatkan
                10 Diamond Gratis untuk pengguna pertama!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
