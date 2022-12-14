import React, { useState } from "react";
import Farmer2 from "../../../img/common/farmer2.png";
import Kakek from "../../../img/common/kakek.png";
import Next from "../../../img/usage/play.png";
import Typewriter from "typewriter-effect";
import { Page3 } from "../../index";

const Page2 = () => {
  const [page3, setPage3] = useState(false);
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
              Mr. Ducan
            </span>
          </div>
        </div>
        <div className="h-full grid gap-2 ">
          <h1 className="text-white font-semibold text-justify text-xl font-openSans">
            Selamat datang di TAMAKOCHI, mulai dengan beternak hewan kesayangan
            kamu dan hasilkan diamond setiap harinya ! Dapatkan 10 Diamond
            Gratis untuk pengguna pertama.
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
    setPage3((current) => !current);
  };

  return (
    <>
      {page3 ? (
        <Page3 />
      ) : (
        <div className="w-full h-screen overflow-hidden bg-page2 bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
          <div className="w-[90%] h-full mx-auto">
            {/* HEADER */}
            <div class="h-[15%]"></div>
            {/* HEADER END */}
            {/* CONTENT */}
            <div class="h-[85%] flex">
              <div class="w-[35%]">
                <div className="w-full h-full items-end flex">
                  <img src={Kakek} alt="" className="w-48" />
                </div>
              </div>
              <div class="w-full h-screen mt-10">
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
                                "Selamat datang di TAMAKOCHI, mulai dengan beternak hewan kesayangan kamu dan hasilkan diamond setiap harinya ! Dapatkan 10 Diamond Gratis untuk pengguna pertama."
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
            {/* CONTENT END*/}
          </div>
        </div>
      )}
    </>
  );
};

export default Page2;
