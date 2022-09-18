import React from "react";
import Diamond from "../../img/common/diamond.png";
import Egg from "../../img/common/egg.png";
import Pouch from "../../img/common/pouch.png";
import QuestBook from "../../img/common/questbook.png";
import { Page7, Page13 } from "../index";
import { useState } from "react";
import Button from "../../Component/Atom/Button";
import Header from "../../Component/Diatom/Header";
const Page9 = () => {
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

  const openPage7 = () => {
    setPage7((current) => !current);
  };

  const openPage13 = () => {
    setPage13((current) => !current);
  };
  return (
    <>
      {(page7 && <Page7 />) || (page13 && <Page13 />) || (
        <div className="w-full h-screen overflow-hidden bg-barn bg-cover lg:max-w-6xl mx-auto ">
          <div className="w-[90%] h-full mx-auto">
            {/* HEADER */}
            <div class="h-[15%]">
              <Header
                Diamond={true}
                Egg={true}
                Susu={false}
                Pouch={true}
                QuestBook={true}
              />
            </div>
            {/* HEADER END */}
            {/* CONTENT */}
            <div class="h-[65%]">
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
            <div class="h-[25%] ">
              <div className="grid grid-cols-2">
                <div className="w-full flex justify-center">
                  <div className="w-60">
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
                  <div className="w-60">
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
