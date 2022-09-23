import React from "react";
import Chicken2 from "../../../img/common/chicken2.png";
import Pig from "../../../img/common/pig.png";
import Domba from "../../../img/common/domba.png";
import Cow2 from "../../../img/common/cow2.png";
import RightArrow from "../../../img/usage/right-arrow.png";
import LeftArrow from "../../../img/usage/left-arrow.png";
import DiamondImg from "../../../img/common/diamond.png";
import EggImg from "../../../img/common/egg.png";
import MilkImg from "../../../img/common/milk.png";
import QuestBookImg from "../../../img/common/questbook.png";
import { useState } from "react";
import { Page8, Page12 } from "../../index";
import { Page6 } from "../../Map";

const Page7 = () => {
  const [page6, setPage6] = useState(false);
  const [page8, setPage8] = useState(false);
  const [page12, setPage12] = useState(false);
  const [index, setIndex] = useState(0);

  const openPage6 = () => {
    setPage6((current) => !current);
  };
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
      image: Chicken2,
    },
    {
      id: 2,
      name: "Sapi",
      skill: "Max penghasil susu 1.010 liter perhari",
      image: Cow2,
    },
    {
      id: 3,
      name: "Domba",
      skill: "Max 25 Kg daging perhari",
      image: Domba,
    },
    {
      id: 4,
      name: "Babi",
      skill: "Max 10 Kg daging perhari",
      image: Pig,
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
      {(page6 && <Page6 />) ||
        (page8 && <Page8 name={name} skill={skill} image={image} />) ||
        (page12 && <Page12 />) || (
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
                    <div className="w-full h-10 flex justify-center items-center lg:h-20 ">
                      <span className="text-white text-xl">
                        {name}, {skill}
                      </span>
                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                      <div
                        className="flex h-full w-full justify-end items-center"
                        onClick={previousHewan}
                      >
                        <img
                          src={LeftArrow}
                          alt=""
                          className="w-16 h-16 lg:w-24 lg:h-24"
                        />
                      </div>
                      <div className="flex h-full w-full justify-center items-center">
                        <img
                          src={image}
                          alt=""
                          className="w-32 h-36 lg:w-60 lg:h-64"
                        />
                      </div>
                      <div
                        className="flex h-full w-full justify-start items-center"
                        onClick={nextHewan}
                      >
                        <img
                          src={RightArrow}
                          alt=""
                          className="w-16 h-16 lg:w-24 lg:h-24"
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

                  <div
                    className="w-full h-full bg-white rounded-full py-3 text-center active:bg-[#782443] group"
                    onClick={openPage12}
                  >
                    <span className="font-semibold capitalize text-lg tracking-wider text-[#782443] group-active:text-white">
                      Tambah ternak
                    </span>
                  </div>

                  <div
                    className="w-full h-full bg-[#5e17eb] rounded-full py-3 text-center active:bg-[#ffffff] group"
                    onClick={openPage8}
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

export default Page7;
