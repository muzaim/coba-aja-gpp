import React from "react";
import Chicken from "../../img/common/chickenandhen.png";
import Cow from "../../img/common/cow.png";
import Diamond from "../../img/common/diamond.png";
import Egg from "../../img/common/egg.png";
import Pouch from "../../img/common/pouch.png";
import QuestBook from "../../img/common/questbook.png";
import RightArrow from "../../img/usage/right-arrow.png";
import LeftArrow from "../../img/usage/left-arrow.png";
import { useState } from "react";
import { Page8, Page12 } from "../index";

const Page7 = () => {
  const [page8, setPage8] = useState(false);
  const [page12, setPage12] = useState(false);
  const [index, setIndex] = useState(0);

  const openPage8 = () => {
    setPage8((current) => !current);
  };
  const openPage12 = () => {
    setPage12((current) => !current);
  };
  const Hewan = [
    {
      id: 1,
      name: "Ayam Eropa",
      skill: "Max 1.020 telur perhari",
      image: Chicken,
    },
    {
      id: 2,
      name: "Sapi",
      skill: "Max penghasil susu 1.010 liter perhari",
      image: Cow,
    },
  ];

  const checkNumber = (number) => {
    if (number > Hewan.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Hewan.length - 1;
    }
    return number;
  };

  const nextHewan = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const previousHewan = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const { name, skill, image } = Hewan[index];
  return (
    <>
      {/* (page4 && <Page4 />) || (page8 && <Page8 />) ||  */}
      {(page8 && <Page8 name={name} skill={skill} image={image} />) ||
        (page12 && <Page12 />) || (
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
                  <h1 className="text-lg font-semibold text-white tracking-wider ">
                    {name}, {skill}
                  </h1>
                </div>
                <div className=" flex items-center justify-end h-full">
                  <img
                    src={LeftArrow}
                    alt=""
                    className="w-20 mr-10 active:opacity-60"
                    onClick={previousHewan}
                  />
                </div>
                <div className=" flex justify-center h-40">
                  <img src={image} alt="" className="w-36" />
                </div>
                <div className=" flex items-center ">
                  <img
                    src={RightArrow}
                    alt=""
                    className="w-20 ml-10 active:opacity-60"
                    onClick={nextHewan}
                  />
                </div>
              </div>
              {/* CONTENT END*/}
              {/* FOOTER */}
              <div className="grid grid-cols-3 mt-3 ">
                <div className=""></div>
                <div className=" px-3">
                  <div
                    className="w-full h-full bg-white rounded-full py-3 text-center active:bg-slate-300"
                    onClick={openPage12}
                  >
                    <div className="font-semibold capitalize text-lg tracking-wider text-[#782443]">
                      tambah ternak
                    </div>
                  </div>
                </div>
                <div className=" px-3">
                  <div
                    className="w-full h-full bg-[#5e17eb] rounded-full py-3 text-center active:bg-[#7041cf]"
                    onClick={openPage8}
                  >
                    <div className="font-semibold capitalize text-lg tracking-wider text-white ">
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

export default Page7;
