import React from "react";
import Diamond from "../../../img/common/diamond.png";
import Pouch from "../../../img/common/pouch.png";
import { Page6, Page13 } from "../../index";
import { useState } from "react";
import DiamondImg from "../../../img/common/diamond.png";
import EggImg from "../../../img/common/egg.png";
import MilkImg from "../../../img/common/milk.png";
import QuestBookImg from "../../../img/common/questbook.png";

const Page15 = () => {
  const [page6, setPage6] = useState(false);

  const [page13, setPage13] = useState(false);

  const Makanan = [
    {
      id: 1,
      value: "10",
      price: "100",
    },
    {
      id: 2,
      value: "50",
      price: "500",
    },
    {
      id: 3,
      value: "100",
      price: "1.000",
    },
    {
      id: 4,
      value: "300",
      price: "3.000",
    },
    {
      id: 5,
      value: "500",
      price: "5.000",
    },
    {
      id: 6,
      value: "1.000",
      price: "10.000",
    },
    {
      id: 7,
      value: "3.000",
      price: "10.000",
    },
    {
      id: 8,
      value: "5.000",
      price: "50.000",
    },
    {
      id: 9,
      value: "10.000",
      price: "100.000",
    },
  ];
  const openPage6 = () => {
    setPage6((current) => !current);
  };

  const openPage13 = () => {
    setPage13((current) => !current);
  };
  return (
    <>
      {(page6 && <Page6 />) || (page13 && <Page13 />) || (
        <div className="w-full h-screen overflow-hidden bg-outFarm bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
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
            <div class="w-full">
              <div className="col-span-2 h-12 text-center flex justify-center">
                <h1 className="text-lg font-semibold text-black tracking-wider ">
                  Belanja Stock Pangan
                </h1>
              </div>
              <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-3 ">
                {Makanan.map((item) => {
                  return (
                    <div className=" flex items-center justify-center">
                      <div className="w-52  py-2 bg-[#f6f3e4] rounded-full items-center flex justify-center active:bg-[#b6def2]">
                        <img src={Pouch} alt="" className="w-7" />
                        <span className="font-bold  text-sm text-[#782443]">
                          {item.value} Kg
                        </span>
                        <span className="font-semibold mx-1">=</span>
                        <img src={Diamond} alt="" className="w-7" />
                        <span className="font-semibold">{item.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* CONTENT END*/}
            {/* FOOTER */}
            <div className="grid grid-cols-2 mt-5">
              <div className=" px-10 flex justify-end">
                <div
                  className="w-52 h-full bg-[#329bd1] rounded-full py-3 text-center"
                  onClick={openPage6}
                >
                  <div className="font-semibold capitalize text-lg tracking-wider text-white">
                    kembali
                  </div>
                </div>
              </div>
              <div className=" px-10 flex justify-start">
                <div
                  className="w-52 h-full bg-[#ff1616] rounded-full py-3 text-center "
                  onClick={openPage13}
                >
                  <div className="font-semibold capitalize text-lg tracking-wider text-white">
                    beri pangan
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

export default Page15;
