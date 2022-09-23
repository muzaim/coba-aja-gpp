import React from "react";
import { useState } from "react";
import Shop from "../../../img/common/shop.png";
import Barn from "../../../img/common/barn.png";
import ArrowDown from "../../../img/usage/down.png";
import { Page5, Page7, Page13, Page15 } from "../../index";
import Header from "../../../Component/Diatom/Header";

const Page6 = () => {
  const [page5, setPage5] = useState(false);
  const [page7, setPage7] = useState(false);
  const [page13, setPage13] = useState(false);
  const [page15, setPage15] = useState(false);
  const showAlert = () => {
    alert(`dadsa`);
  };
  const openPage5 = () => {
    setPage5((current) => !current);
  };
  const openPage7 = () => {
    setPage7((current) => !current);
  };
  const openPage13 = () => {
    setPage13((current) => !current);
  };
  const openPage15 = () => {
    setPage15((current) => !current);
  };

  const Tampilan = () => {
    return (
      <div className="w-full h-screen overflow-hidden bg-farmCultivature bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
        <div className="w-[90%] h-full mx-auto ">
          {/* HEADER */}
          <div class="h-[15%]">
            <Header Diamond={true} />
          </div>
          {/* HEADER END */}
          {/* CONTENT */}
          <div className="relative h-[50%]">
            {/* KE BARN */}
            <div
              className="top-[3rem] right-[10rem] absolute group animate-bounce"
              onClick={openPage7}
            >
              <img
                src={ArrowDown}
                alt=""
                className="w-16 group-active:opacity-80"
              />
            </div>
            {/* KE MARKET */}
            <div
              className="top-[1rem] right-[32rem] absolute group animate-bounce"
              onClick={openPage15}
            >
              <img
                src={ArrowDown}
                alt=""
                className="w-16 group-active:opacity-80"
              />
            </div>
            {/* KE NPC MENU */}
            <div
              className="top-[10rem] right-[18rem] absolute group animate-bounce"
              onClick={openPage5}
            >
              <img
                src={ArrowDown}
                alt=""
                className="w-16 group-active:opacity-80"
              />
            </div>
            {/* KE SHOP */}
            <div
              className="top-[5rem] right-[25rem] absolute group animate-bounce"
              onClick={openPage13}
            >
              <img
                src={ArrowDown}
                alt=""
                className="w-16 group-active:opacity-80"
              />
            </div>
          </div>
          {/* CONTENT END*/}
          {/* FOOTER */}
          <div class="h-[10%]">
            <div class="flex flex-col relative gap-2 py-3">
              <div className="w-44 py-2 bg-[#5e17eb] text-center rounded-full active:bg-[#ffffff] group">
                <span className="text-white font-semibold group-active:text-[#5e17eb] ">
                  Susu 100 Liter
                </span>
              </div>
              <div className="w-44 py-2 bg-[#5e17eb] text-center rounded-full active:bg-[#ffffff] group">
                <span className="text-white font-semibold group-active:text-[#5e17eb] ">
                  Telur 365 Butir
                </span>
              </div>
            </div>
          </div>
          {/* FOOTER END*/}
        </div>
      </div>
    );
  };
  return (
    <>
      {(page7 && <Page7 backAction={showAlert} />) ||
        (page13 && <Page13 />) ||
        (page5 && <Page5 />) ||
        (page15 && <Page15 />) || <Tampilan />}
    </>
  );
};

export default Page6;
