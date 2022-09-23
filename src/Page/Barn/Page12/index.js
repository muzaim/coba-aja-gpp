import React, { useState } from "react";
import { Page6 } from "../../Map";
import Chicken2 from "../../../img/common/chicken2.png";
import Pig from "../../../img/common/pig.png";
import Domba from "../../../img/common/domba.png";
import Cow2 from "../../../img/common/cow2.png";
import Pouch from "../../../img/common/pouch.png";
import Diamond from "../../../img/common/diamond.png";
import EggImg from "../../../img/common/egg.png";
import MilkImg from "../../../img/common/milk.png";
import QuestBookImg from "../../../img/common/questbook.png";
import { Page7 } from "../../index";
import Header from "../../../Component/Diatom/Header";

const Page12 = () => {
  const [page6, setPage6] = useState(false);
  const [page7, setPage7] = useState(false);

  const Hewan = [
    {
      id: 1,
      name: "Domba",
      skill: "Max 25 Kg daging perhari",
      image: Domba,
    },
    {
      id: 2,
      name: "Babi",
      skill: "Max 10 Kg daging perhari",
      image: Pig,
    },
  ];
  const openPage6 = () => {
    setPage6((current) => !current);
  };
  const openPage7 = () => {
    setPage7((current) => !current);
  };
  return (
    <>
      {(page6 && <Page6 />) || (page7 && <Page7 />) || (
        <div className="w-full h-screen overflow-hidden bg-barn bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
          <div className="w-[90%] h-full mx-auto">
            {/* HEADER */}
            <div class="h-[15%]">
              <div className="flex h-full py-1 justify-between items-center z-10">
                <div className="flex gap-2">
                  {/* Diamond */}
                  <div className="w-44 h-10 bg-[#f6f3e4] rounded-full items-center flex">
                    <div className="w-20 flex items-center justify-center ">
                      <img src={Diamond} alt="" className="w-10" />
                    </div>
                    <div className="w-full text-start ">
                      <span className="font-bold  text-sm text-[#782443]">
                        2.115
                      </span>
                    </div>
                  </div>
                  {/* Back */}
                  <div
                    className="w-44 h-10 bg-[#329bd1] rounded-full items-center flex active:bg-[#51a9d5]"
                    onClick={openPage7}
                  >
                    <div className="w-full text-center ">
                      <span className="font-bold  text-sm text-white tracking-widest">
                        Back
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
            <div className="w-full h-[70%] ">
              <div className="w-full h-full ">
                <div className="w-full h-full grid grid-cols-2 items-center">
                  {Hewan.map((item) => {
                    return (
                      <div className=" ">
                        <div className="flex justify-center ">
                          <div className="bg-[#b6def2] flex flex-col py-7 rounded-2xl w-60">
                            <div className="flex justify-center">
                              <img src={item.image} alt="" className="w-32" />
                            </div>
                            <div className="flex justify-center">
                              <span>Max 1.020 liter perhari</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center my-3">
                          <div className="w-52 h-10 bg-[#ff1616] rounded-2xl items-center flex">
                            <div className="w-full text-center flex justify-center">
                              <span className="font-bold  text-sm text-white tracking-widest mr-3">
                                Beli Sapi :
                              </span>
                              <img src={Diamond} alt="" className="w-5" />
                              <span className="font-bold  text-sm text-white tracking-widest">
                                920
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* CONTENT END*/}
          </div>
        </div>
      )}
    </>
  );
};

export default Page12;
