import React from "react";
import Chicken from "../../../img/common/chickenandhen.png";
import Chicken2 from "../../../img/common/chicken2.png";
import Pig from "../../../img/common/pig.png";
import Domba from "../../../img/common/domba.png";
import Cow2 from "../../../img/common/cow2.png";
import RightArrow from "../../../img/usage/right-arrow.png";
import LeftArrow from "../../../img/usage/left-arrow.png";
import { useState } from "react";
import { Page8, Page12 } from "../../index";
import Header from "../../../Component/Diatom/Header";

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
      {(page8 && <Page8 name={name} skill={skill} image={image} />) ||
        (page12 && <Page12 />) || (
          <div className="w-full h-screen overflow-hidden bg-barn bg-cover lg:max-w-6xl mx-auto">
            <div className="w-[90%] h-full mx-auto ">
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
                <div class="grid grid-cols-3">
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
                  <div className=" flex justify-center h-40 ">
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
