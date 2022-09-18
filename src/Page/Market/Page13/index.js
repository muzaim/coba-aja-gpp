import React, { useState } from "react";
import Chef1 from "../../../img/common/chef1.png";
import Milk from "../../../img/common/milk.png";
import Diamond from "../../../img/common/diamond.png";
import Egg from "../../../img/common/egg.png";
import Next from "../../../img/usage/play.png";
import Typewriter from "typewriter-effect";
import { Page14 } from "../../index";

const Page13 = () => {
  const [page14, setPage14] = useState(false);
  const [skipDialog, setSkipDalog] = useState(false);
  const [nextButton, setNextButton] = useState(false);

  const skip = () => {
    setSkipDalog((current) => !current);
  };

  const DialogComplete = () => {
    return (
      <div className="w-[30rem] min-h-[7rem] px-5 pb-5 pt-10 bg-[#782443] rounded-xl ml-5 ring-offset-2 ring-4 ring-[#782443] relative">
        <div className="absolute -top-5 left-10">
          <div className="w-40 py-2 bg-[#782443] ring-offset-2 ring-4 ring-[#782443] rounded-xl text-center">
            <span className="text-white font-semibold text-justify text-md font-openSans">
              Mrs. Lisa
            </span>
          </div>
        </div>
        <div className="h-full grid gap-2 ">
          <h1 className="text-white font-semibold text-justify text-xl font-openSans">
            Kamu ingin membeli 100 butir telur dan 500 liter susu?
          </h1>
          <div className="flex justify-end h-6">
            <img
              src={Next}
              alt=""
              className="w-6 animate-pulse"
              onClick={openPage3}
            />
          </div>
        </div>
      </div>
    );
  };

  const openPage3 = () => {
    setPage14((current) => !current);
  };

  return (
    <>
      {page14 ? (
        <Page14 />
      ) : (
        <div className="w-full h-screen overflow-hidden bg-caffe bg-cover lg:max-w-6xl mx-auto">
          <div className="w-[90%] h-full mx-auto relative">
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
                      <img src={Milk} alt="" className="w-8" />
                    </div>
                    <div className="w-full text-start ">
                      <span className="font-bold  text-sm text-[#782443]">
                        514 Liter
                      </span>
                    </div>
                  </div>
                </div>

                {/* <div>
                  <img src={QuestBook} alt="" className="w-16" />
                </div> */}
              </div>
            </div>
            {/* HEADER END*/}
            <div class="flex ">
              <div class="w-fit h-screen">
                <div className="flex justify-center">
                  <img src={Chef1} alt="" className="w-[14rem] mt-[0.5rem]" />
                </div>
              </div>
              <div class="w-1/2 h-screen mt-10">
                {skipDialog ? (
                  <DialogComplete />
                ) : (
                  <div
                    className="w-[30rem] min-h-[7rem] px-5 pb-5 pt-10 bg-[#782443] rounded-xl ml-5 ring-offset-2 ring-4 ring-[#782443] relative"
                    onClick={skip}
                  >
                    <div className="absolute -top-5 left-10">
                      <div className="w-40 py-2 bg-[#782443] ring-offset-2 ring-4 ring-[#782443] rounded-xl text-center">
                        <span className="text-white font-semibold text-justify text-md font-openSans">
                          Mrs. Lisa
                        </span>
                      </div>
                    </div>
                    <div className="h-full grid gap-2 ">
                      <h1 className="text-white font-semibold text-justify text-xl font-openSans">
                        <Typewriter
                          options={{
                            delay: 30,
                            cursor: " ",
                          }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString(
                                "Kamu ingin membeli 100 butir telur dan 500 liter susu?"
                              )
                              .start()
                              .pauseFor(300)
                              .callFunction(() => {
                                setNextButton(true);
                              });
                          }}
                        />
                      </h1>

                      <div className="flex justify-end h-6" onClick={openPage3}>
                        {nextButton ? (
                          <img
                            src={Next}
                            alt=""
                            className="w-6 animate-pulse"
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page13;
