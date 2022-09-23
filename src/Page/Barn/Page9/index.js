import React from "react";
import Pouch from "../../../img/common/pouch.png";
import { Page7, Page13 } from "../../index";
import { Page6 } from "../../Map";
import { useState } from "react";
import Button from "../../../Component/Atom/Button";
import DiamondImg from "../../../img/common/diamond.png";
import EggImg from "../../../img/common/egg.png";
import MilkImg from "../../../img/common/milk.png";
import QuestBookImg from "../../../img/common/questbook.png";

const Page9 = () => {
  const [page6, setPage6] = useState(false);
  const [page7, setPage7] = useState(false);
  const [page13, setPage13] = useState(false);

  const Makanan = [
    {
      id: 1,
      value: "10",
    },
    {
      id: 2,
      value: "20",
    },
    {
      id: 3,
      value: "30",
    },
    {
      id: 4,
      value: "50",
    },
    {
      id: 5,
      value: "70",
    },
    {
      id: 6,
      value: "100",
    },
  ];

  const openPage6 = () => {
    setPage6((current) => !current);
  };
  const openPage7 = () => {
    setPage7((current) => !current);
  };

  const openPage13 = () => {
    setPage13((current) => !current);
  };
  return (
    <>
      {(page6 && <Page6 />) || (page7 && <Page7 />) || (page13 && <Page13 />) || (
        <div className="w-full h-screen overflow-hidden bg-barn bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
          <div className="w-[90%] h-full mx-auto">
            {/* HEADER */}
            <div class="h-[15%]">
              <div className="flex h-full py-1 justify-between items-center z-10">
                <div className="flex gap-2">
                  {/* Diamond */}
                  <div className="w-44 h-10 bg-[#f6f3e4] rounded-full items-center flex">
                    <div className="w-20 flex items-center justify-center ">
                      <img src={DiamondImg} alt="" className="w-10" />
                    </div>
                    <div className="w-full text-start ">
                      <span className="font-bold  text-sm text-[#782443]">
                        2.115
                      </span>
                    </div>
                  </div>
                  {/* Egg */}
                  <div className="w-44 h-10 bg-[#f6f3e4] rounded-full items-center flex">
                    <div className="w-20 flex items-center justify-center ">
                      <img src={EggImg} alt="" className="w-8" />
                    </div>
                    <div className="w-full text-start ">
                      <span className="font-bold  text-sm text-[#782443]">
                        120 Butir
                      </span>
                    </div>
                  </div>
                  {/* Pouch */}
                  <div className="w-44 h-10 bg-[#f6f3e4] rounded-full items-center flex">
                    <div className="w-20 flex items-center justify-center ">
                      <img src={MilkImg} alt="" className="w-8" />
                    </div>
                    <div className="w-full text-start ">
                      <span className="font-bold  text-sm text-[#782443]">
                        251 Liter
                      </span>
                    </div>
                  </div>
                </div>
                <div className="" onClick={openPage6}>
                  <img src={QuestBookImg} alt="" className="w-16" />
                </div>
              </div>
            </div>
            {/* HEADER END */}
            {/* CONTENT */}
            <div class="w-full h-[65%]">
              <div class="w-full h-full justify-center flex items-start">
                <div className="w-full h-full flex flex-col">
                  <div className="w-full h-10 flex justify-center items-center lg:h-20">
                    <span className="text-white text-xl lg:text-3xl ">
                      Berapa banyak makanan hari ini?
                    </span>
                  </div>
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="w-full h-full grid grid-rows-3 grid-flow-col lg:h-[60%]">
                      {Makanan.map((item) => {
                        return (
                          <div className=" flex items-center justify-center">
                            <div className="w-44 h-10 bg-[#f6f3e4] rounded-full items-center flex active:bg-[#b6def2] lg:w-60 lg:h-14">
                              <div className="w-20 flex items-center justify-center ">
                                <img
                                  src={Pouch}
                                  alt=""
                                  className="w-8 lg:w-10"
                                />
                              </div>
                              <div className="w-full text-start ">
                                <span className="font-bold  text-sm text-[#782443] lg:text-lg">
                                  {item.value} Kg
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CONTENT END*/}
            {/* FOOTER */}
            <div class="h-[25%] ">
              <div className="grid grid-cols-2">
                <div className="w-full flex justify-center">
                  <div className="w-60 lg:w-80">
                    <Button
                      action={openPage7}
                      text={"kembali"}
                      textColor={"#ffffff"}
                      bgColor={"#329bd1"}
                      activeColor={"bg-slate-300"}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <div className="w-60 lg:w-80">
                    <Button
                      action={openPage13}
                      text={"beri pangan"}
                      textColor={"#ffffff"}
                      bgColor={"#ff1616"}
                      activeColor={"bg-slate-300"}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* FOOTER END*/}
          </div>
        </div>
      )}
    </>
  );
};

export default Page9;
