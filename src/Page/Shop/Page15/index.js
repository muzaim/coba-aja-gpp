import React from "react";
import Diamond from "../../../img/common/diamond.png";
import Pouch from "../../../img/common/pouch.png";
import QuestBook from "../../../img/common/questbook.png";
import { Page9, Page13 } from "../../index";
import { useState } from "react";

const Page15 = () => {
  const [page9, setPage9] = useState(false);

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

  const openPage9 = () => {
    setPage9((current) => !current);
  };

  const openPage13 = () => {
    setPage13((current) => !current);
  };
  return (
    <>
      {(page9 && <Page9 />) || (page13 && <Page13 />) || (
        <div className="w-full h-screen overflow-hidden bg-outFarm bg-left bg-cover lg:max-w-6xl mx-auto">
          <div className="w-[90%] h-full mx-auto">
            {/* HEADER */}
            <div class="h-[15%]">
              <div className="flex h-full justify-between items-center ">
                <div className="flex gap-2">
                  <div className="w-44 h-10 bg-[#f6f3e4] rounded-full items-center flex">
                    <div className="w-20 flex items-center justify-center ">
                      <img src={Diamond} alt="" className="w-10" />
                    </div>
                    <div className="w-full text-start ">
                      <span className="font-bold  text-sm text-[#782443]">
                        0
                      </span>
                    </div>
                  </div>

                  <div className="w-44 h-10 bg-[#f6f3e4] rounded-full items-center flex">
                    <div className="w-20 flex items-center justify-center ">
                      <img src={Pouch} alt="" className="w-8" />
                    </div>
                    <div className="w-full text-start ">
                      <span className="font-bold  text-sm text-[#782443]">
                        10.000 Kg
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <img src={QuestBook} alt="" className="w-16" />
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
                  onClick={openPage9}
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
