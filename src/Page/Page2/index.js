import React, { useState } from "react";
import Farmer1 from "../../img/common/farmer1.png";
import { Page3 } from "../index";

const Page2 = () => {
  const [page3, setPage3] = useState(false);
  const openPage3 = () => {
    setPage3((current) => !current);
  };

  return (
    <>
      {page3 ? (
        <Page3 />
      ) : (
        <div className="w-full h-screen overflow-hidden bg-page2 bg-left bg-contain opacity-90 lg:max-w-6xl mx-auto">
          <div className="w-[90%] h-full mx-auto">
            <div class="h-16"></div>
            <div class="flex">
              <div class="w-56 h-screen ">
                <div className="flex justify-center">
                  <img src={Farmer1} alt="" className="w-[5.8rem]" />
                </div>
              </div>
              <div class=" w-full h-screen ">
                <div
                  className="w-[30rem] px-5 py-5 bg-[#782443] rounded-3xl"
                  onClick={openPage3}
                >
                  <h1 className="text-white font-semibold text-center text-xl font-openSans">
                    Selamat datang di TAMAKOCHI, mulai dengan beternak hewan
                    kesayangan kamu dan hasilkan diamond setiap harinya !
                    Dapatkan 10 Diamond Gratis untuk pengguna pertama!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page2;
