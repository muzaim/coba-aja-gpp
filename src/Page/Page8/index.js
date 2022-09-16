import React from "react";
import { useState } from "react";
import Chicken from "../../img/common/chickenandhen.png";
import Cow from "../../img/common/cow.png";
import Diamond from "../../img/common/diamond.png";
import Egg from "../../img/common/egg.png";
import Pouch from "../../img/common/pouch.png";
import QuestBook from "../../img/common/questbook.png";
import RightArrow from "../../img/usage/right-arrow.png";
import LeftArrow from "../../img/usage/left-arrow.png";
import { Page9 } from "../index";

const Page8 = ({ name, skill, image }) => {
  const [page9, setPage9] = useState(false);

  const openPage9 = () => {
    setPage9((current) => !current);
  };
  return (
    <>
      {page9 ? (
        <Page9 />
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
            <div class="grid grid-cols-3 ">
              <div className="col-span-3 h-12 text-center flex justify-center">
                <div className="flex items-center h-full">
                  <img src={Pouch} alt="" className="w-10" />
                  <div class="w-56 bg-gray-200 h-5 rounded-full overflow-hidden ">
                    <div
                      class="bg-[#7fa65a] h-5 rounded-full"
                      style={{ width: "62%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-end">
                {/* <img src={LeftArrow} alt="" className="w-20 mr-10" /> */}
              </div>
              <div className=" flex justify-center">
                <img src={image} alt="" className="w-36" />
              </div>
              <div className=" flex items-center ">
                {/* <img src={RightArrow} alt="" className="w-20 ml-10" /> */}
              </div>
            </div>
            {/* CONTENT END*/}
            {/* FOOTER */}
            <div className="grid grid-cols-3 mt-3">
              <div className=""></div>
              <div className=" px-3">
                <div className="w-full h-full bg-white rounded-full py-3 text-center">
                  <button className="font-semibold capitalize text-lg tracking-wider text-[#782443]">
                    tambah ternak
                  </button>
                </div>
              </div>
              <div className=" px-3">
                <div className="w-full h-full bg-[#5e17eb] rounded-full py-3 text-center">
                  <button
                    className="font-semibold capitalize text-lg tracking-wider text-white"
                    onClick={openPage9}
                  >
                    proses pangan
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

export default Page8;
