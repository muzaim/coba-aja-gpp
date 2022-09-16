import React from "react";
import { useState } from "react";
import Diamond from "../../img/common/diamond.png";
import QuestBook from "../../img/common/questbook.png";
import ArrowDown from "../../img/usage/down.png";
import { Page7 } from "../index";

const Page6 = () => {
  const [page7, setPage7] = useState(false);

  const openPage7 = () => {
    setPage7((current) => !current);
  };

  return (
    <>
      {page7 ? (
        <Page7 />
      ) : (
        <div className="w-full h-screen overflow-hidden bg-pageMap bg-left bg-cover opacity-90 lg:max-w-6xl mx-auto ">
          <div className="w-[90%] h-full mx-auto">
            <div class="flex h-full flex-col justify-between ">
              {/* atas */}
              <div class="h-16 ">
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
              {/* tengah */}
              {/* Absolute */}
              <div className="relative h-36">
                <img
                  src={ArrowDown}
                  alt=""
                  className="w-16 -top-10 right-[12rem] absolute animate-bounce"
                  onClick={openPage7}
                />
                <img
                  src={ArrowDown}
                  alt=""
                  className="w-16 top-36 right-[25rem] absolute animate-bounce"
                  onClick={openPage7}
                />
                <img
                  src={ArrowDown}
                  alt=""
                  className="w-16 -top-10 right-[30rem] absolute animate-bounce"
                  onClick={openPage7}
                />
              </div>
              {/* bawah */}
              <div class="flex flex-col relative gap-2 py-3">
                <div className="w-44 py-2 bg-[#5e17eb] text-center rounded-full">
                  <span className="text-white font-semibold">
                    Susu 100 Liter
                  </span>
                </div>
                <div className="w-44 py-2 bg-[#5e17eb] text-center rounded-full">
                  <span className="text-white font-semibold">
                    Telur 356 Butir
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page6;
