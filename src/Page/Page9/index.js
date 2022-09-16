import React from "react";
import Chicken from "../../img/common/chickenandhen.png";
import Diamond from "../../img/common/diamond.png";
import Egg from "../../img/common/egg.png";
import Pouch from "../../img/common/pouch.png";
import QuestBook from "../../img/common/questbook.png";
import RightArrow from "../../img/usage/right-arrow.png";
import LeftArrow from "../../img/usage/left-arrow.png";
import { Page12 } from "../index";
import { useState } from "react";

const Page9 = () => {
  const [page12, setPage12] = useState(false);
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

  const openPage12 = () => {
    setPage12((current) => !current);
  };
  return (
    <>
      {page12 ? (
        <Page12 />
      ) : (
        <div className="w-full h-screen overflow-hidden bg-barn bg-left bg-cover opacity-90 lg:max-w-6xl mx-auto">
          <div className="w-[90%] h-full mx-auto">
            {/* HEADER */}
            <div class="h-16">
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
                      <img src={Egg} alt="" className="w-8" />
                    </div>
                    <div className="w-full text-start ">
                      <span className="font-bold  text-sm text-[#782443]">
                        135 Butir
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
                <h1 className="text-lg font-semibold text-white tracking-wider ">
                  Berapa banyak makanan yang ingin kamu berikan hari ini?
                </h1>
              </div>
              <div className="grid grid-rows-3 grid-flow-col gap-3">
                {Makanan.map((item) => {
                  return (
                    <div className=" flex items-center justify-center">
                      <div className="w-44 h-10 bg-[#f6f3e4] rounded-full items-center flex active:bg-[#b6def2]">
                        <div className="w-20 flex items-center justify-center ">
                          <img src={Pouch} alt="" className="w-8" />
                        </div>
                        <div className="w-full text-start ">
                          <span className="font-bold  text-sm text-[#782443]">
                            {item.value} Kg
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* CONTENT END*/}
            {/* FOOTER */}
            <div className="grid grid-cols-2 mt-3 ">
              <div className=" px-3 flex justify-center">
                <div className="w-72 h-full bg-[#329bd1] rounded-full py-3 text-center">
                  <button className="font-semibold capitalize text-lg tracking-wider text-white">
                    kembali
                  </button>
                </div>
              </div>
              <div className=" px-3 flex justify-center">
                <div className="w-72 h-full bg-[#ff1616] rounded-full py-3 text-center ">
                  <button
                    className="font-semibold capitalize text-lg tracking-wider text-white"
                    onClick={openPage12}
                  >
                    beri pangan
                  </button>
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
