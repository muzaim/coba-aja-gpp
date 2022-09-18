import React from "react";
import { useState } from "react";
import Diamond from "../../img/common/diamond.png";
import Chicken from "../../img/common/chickenandhen.png";
import Egg from "../../img/common/egg.png";
import Pouch from "../../img/common/pouch.png";
import QuestBook from "../../img/common/questbook.png";
import { Page9, Page12 } from "../index";
import Header from "../../Component/Diatom/Header";
import Button from "../../Component/Atom/Button";
const Page8 = ({
  name = "Ayam Eropa",
  skill = "Max 1.020 telur perhari",
  image = Chicken,
}) => {
  const [page9, setPage9] = useState(false);
  const [page12, setPage12] = useState(false);
  const openPage12 = () => {
    setPage12((current) => !current);
  };

  const openPage9 = () => {
    setPage9((current) => !current);
  };
  return (
    <>
      {(page9 && <Page9 />) || (page12 && <Page12 />) || (
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
                  <div className="flex items-center h-full">
                    <img src={Pouch} alt="" className="w-10" />
                    <div class="w-56 bg-gray-200 h-5 rounded-full overflow-hidden ">
                      <div
                        class="bg-[#7fa65a] h-5 rounded-full"
                        style={{ width: "27%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className=""></div>
                <div className="flex justify-center h-40 ">
                  <img src={image} alt="" className="w-36" />
                </div>
                <div className=""></div>
              </div>
            </div>
            {/* CONTENT END*/}
            {/* FOOTER */}
            <div class="h-[20%]">
              <div className="grid grid-cols-3 gap-3">
                <div className=""></div>
                <div className="">
                  <Button
                    action={openPage12}
                    text={"tambah ternak"}
                    textColor={"#782443"}
                    bgColor={"#ffffff"}
                    activeColor={"bg-slate-300"}
                  />
                </div>
                <div className="">
                  <Button
                    action={openPage9}
                    text={"proses pangan"}
                    textColor={"#ffffff"}
                    bgColor={"#5e17eb"}
                    activeColor={"bg-slate-300"}
                  />
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
