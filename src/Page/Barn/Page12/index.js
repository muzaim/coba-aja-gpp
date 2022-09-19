import React, { useState } from "react";
import Chicken from "../../../img/common/chickenandhen.png";
import Cow from "../../../img/common/cow.png";
import Diamond from "../../../img/common/diamond.png";
import { Page7 } from "../../index";

const Page12 = () => {
  const [page7, setPage7] = useState(false);

  const openPage7 = () => {
    setPage7((current) => !current);
  };
  return (
    <>
      {page7 ? (
        <Page7 />
      ) : (
        <div className="w-full h-screen overflow-hidden bg-barn bg-cover lg:max-w-6xl mx-auto">
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
                </div>

                <div
                  className="w-44 h-10 bg-[#329bd1] rounded-full items-center flex active:bg-[#51a9d5] "
                  onClick={openPage7}
                >
                  <div className="w-full text-center ">
                    <span className="font-bold  text-sm text-white tracking-widest">
                      Back
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* HEADER END */}
            {/* CONTENT */}
            <div class="w-full">
              <div className="grid grid-cols-2 grid-flow-col ">
                <div className=" ">
                  <div className="flex justify-center ">
                    <div className="bg-[#b6def2] flex flex-col py-7  rounded-2xl w-60">
                      <div className="flex justify-center">
                        <img src={Chicken} alt="" className="w-32" />
                      </div>
                      <div className="flex justify-center">
                        <span>Max 1.020 butir perhari</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center my-3">
                    <div className="w-52 h-10 bg-[#ff1616] rounded-2xl items-center flex">
                      <div className="w-full text-center flex justify-center">
                        <span className="font-bold  text-sm text-white tracking-widest mr-3">
                          Beli Ayam :
                        </span>
                        <img src={Diamond} alt="" className="w-5" />
                        <span className="font-bold  text-sm text-white tracking-widest">
                          450
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" ">
                  <div className="flex justify-center ">
                    <div className="bg-[#b6def2] flex flex-col py-7 rounded-2xl w-60">
                      <div className="flex justify-center">
                        <img src={Cow} alt="" className="w-32" />
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
