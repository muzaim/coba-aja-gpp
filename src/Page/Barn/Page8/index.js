import React from "react";
import { useState } from "react";
import Chicken from "../../../img/common/chickenandhen.png";
import Pouch from "../../../img/common/pouch.png";
import { Page9, Page12 } from "../index";
import { Page6 } from "../../Map";
import DiamondImg from "../../../img/common/diamond.png";
import EggImg from "../../../img/common/egg.png";
import MilkImg from "../../../img/common/milk.png";
import QuestBookImg from "../../../img/common/questbook.png";
const Page8 = ({
  name = "Ayam Eropa",
  skill = "Max 1.020 telur perhari",
  image = Chicken,
}) => {
  const [page9, setPage9] = useState(false);
  const [page6, setPage6] = useState(false);
  const [page12, setPage12] = useState(false);
  const openPage12 = () => {
    setPage12((current) => !current);
  };

  const openPage9 = () => {
    setPage9((current) => !current);
  };
  const openPage6 = () => {
    setPage6((current) => !current);
  };
  return (
    <>
      {(page6 && <Page6 />) || (page9 && <Page9 />) || (page12 && <Page12 />) || (
        <div className="w-full h-screen overflow-hidden bg-barn bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
          <div className="w-[90%] h-full mx-auto ">
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
                    <img src={Pouch} alt="" className="w-8 lg:w-16" />
                    <div class="w-56 bg-gray-200 h-5 rounded-full overflow-hidden lg:w-72 lg:h-10">
                      <div
                        class="bg-[#7fa65a] h-5 rounded-full lg:h-10"
                        style={{ width: "27%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="w-full h-full flex justify-center items-center">
                    <div className="flex h-full w-full justify-center items-center">
                      <img
                        src={image}
                        alt=""
                        className="w-32 h-36 lg:w-60 lg:h-64"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CONTENT END*/}
            {/* FOOTER */}
            <div class="h-[20%]">
              <div className="grid grid-cols-3 gap-3">
                <div className=""></div>
                <div className="">
                  <div
                    className="w-full h-full bg-white rounded-full py-3 text-center active:bg-[#782443] group"
                    onClick={openPage12}
                  >
                    <span className="font-semibold capitalize text-lg tracking-wider text-[#782443] group-active:text-white">
                      Tambah ternak
                    </span>
                  </div>
                </div>
                <div
                  className="w-full h-full bg-[#5e17eb] rounded-full py-3 text-center active:bg-[#ffffff] group"
                  onClick={openPage9}
                >
                  <span className="font-semibold capitalize text-lg tracking-wider text-[#ffffff] group-active:text-[#5e17eb]">
                    proses pangan
                  </span>
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

export default Page8;
