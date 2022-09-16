import React, { useState } from "react";
import Farmer2 from "../../img/common/farmer2.png";
import Diamond from "../../img/common/diamond.png";
import QuestBook from "../../img/common/questbook.png";
import Typed from "react-typed";
import { Page5 } from "../index";

const Page4 = () => {
  const [page5, setPage5] = useState(false);
  const openPage5 = () => {
    setPage5((current) => !current);
  };
  return (
    <>
      {page5 ? (
        <Page5 />
      ) : (
        <div className="w-full h-screen overflow-hidden bg-page2 bg-cover lg:max-w-6xl mx-auto">
          <div className="w-[90%] h-full mx-auto">
            <div class="h-16">
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
              <div class="w-56 h-screen">
                <div className="flex justify-center">
                  <img src={Farmer2} alt="" className="w-[6rem] mt-[4.5rem]" />
                </div>
              </div>
              <div class=" w-full h-screen relative">
                <div className="w-[30rem] pt-10 pb-16 bg-[#782443] rounded-3xl ml-5">
                  <h1 className="text-white font-semibold text-center text-xl font-openSans">
                    <Typed
                      showCursor={false}
                      strings={[
                        "Hari ini semakin cerah, yuk mulai beternak lagi, dan dapatkan Diamond semakin banyak",
                      ]}
                      typeSpeed={30}
                    ></Typed>
                  </h1>
                </div>
                <div
                  className="w-[13rem] rounded-2xl py-4 bg-[#f6f3e4] text-center absolute top-32 left-36"
                  onClick={openPage5}
                >
                  <div className=" uppercase text-[12px] font-bold tracking-wide text-[#782443]">
                    Masuk agenda
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page4;
