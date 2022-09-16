import React, { useState } from "react";
import Farmer2 from "../../img/common/farmer2.png";
import Next from "../../img/usage/play.png";
import Typewriter from "typewriter-effect";
import { Page6 } from "../index";

const Page5 = () => {
  const [page6, setPage6] = useState(false);
  const [skipDialog, setSkipDalog] = useState(false);
  const [nextButton, setNextButton] = useState(false);

  const skip = () => {
    setSkipDalog((current) => !current);
  };

  const DialogComplete = () => {
    return (
      <div className="w-[30rem] h-[13rem] px-5 pb-5 pt-10 bg-[#782443] rounded-xl ml-5 overflow-auto ring-offset-2 ring-4 ring-[#782443] relative">
        <div className="absolute -top-5 left-10">
          <div className="w-40 py-2 bg-[#782443] ring-offset-2 ring-4 ring-[#782443] rounded-xl text-center">
            <span className="text-white font-semibold text-justify text-md font-openSans">
              Mr. Ducan
            </span>
          </div>
        </div>
        <div className="h-full grid gap-2 ">
          <p className="text-white font-semibold text-justify text-xl font-openSans">
            <p>1 telur ayam = 1 diamond</p>
            <p>1 liter susu = 100 diamond</p>
            <p>1 kg pangan = 10 diamond</p>
            <p>1 diamond x 100 = Rp.100</p>
            <br />
            <p>10kg pangan = 101 butir</p>
            <p>50kg pangan = 505 butir</p>
            <p>100kg pangan = 1.010 butir</p>
            <p>300kg pangan = 3.030 butir</p>
            <p>500kg pangan = 5.050 butir</p>
            <p>1.000kg pangan = 10.00 butir = 102 liter</p>
            <p>2.000kg pangan = 10.00 butir = 204 liter</p>
            <p>3.000kg pangan = 10.00 butir = 306 liter</p>
            <p>5.000kg pangan = 10.00 butir = 510 liter</p>
            <p>7.000kg pangan = 10.00 butir = 714 liter</p>
            <p>10.000kg pangan = 10.00 butir = 1.020 liter</p>
          </p>
          <div className="flex justify-end h-6">
            <img
              src={Next}
              alt=""
              className="w-6 animate-pulse"
              onClick={openPage5}
            />
          </div>
        </div>
      </div>
    );
  };

  const openPage5 = () => {
    setPage6((current) => !current);
  };

  return (
    <>
      {page6 ? (
        <Page6 />
      ) : (
        <div className="w-full h-screen overflow-hidden bg-page2 bg-cover lg:max-w-6xl mx-auto">
          <div className="w-[90%] h-full mx-auto relative">
            <div class="h-16"></div>
            <div class="flex">
              <div class="w-fit h-screen">
                <div className="flex justify-center">
                  <img src={Farmer2} alt="" className="w-[12rem] mt-[2.5rem]" />
                </div>
              </div>
              <div class="w-1/2 h-screen ">
                {skipDialog ? (
                  <DialogComplete />
                ) : (
                  <div
                    className="w-[30rem] h-[13rem] px-5 pb-5 pt-10 bg-[#782443] overflow-auto rounded-xl ml-5 ring-offset-2 ring-4 ring-[#782443] relative"
                    onClick={skip}
                  >
                    <div className="absolute -top-5 left-10 z-10">
                      <div className="w-40 py-2 bg-[#782443] ring-offset-2 ring-4 ring-[#782443] rounded-xl text-center">
                        <span className="text-white font-semibold text-justify text-md font-openSans">
                          Mr. Ducan
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
                                "<p>1 telur ayam = 1 diamond</p><p>1 liter susu = 100 diamond</p><p>1 kg pangan = 10 diamond</p><p>1 diamond x 100 = Rp.100</p><br/><p>10kg pangan = 101 butir</p><p>50kg pangan = 505 butir</p><p>100kg pangan = 1.010 butir</p><p>300kg pangan = 3.030 butir</p><p>500kg pangan = 5.050 butir</p><p>1.000kg pangan = 10.00 butir = 102 liter</p><p>2.000kg pangan = 10.00 butir = 204 liter</p><p>3.000kg pangan = 10.00 butir = 306 liter</p><p>5.000kg pangan = 10.00 butir = 510 liter</p><p>7.000kg pangan = 10.00 butir = 714 liter</p><p>10.000kg pangan = 10.00 butir = 1.020 liter</p>"
                              )
                              .start()
                              .pauseFor(300)
                              .callFunction(() => {
                                setNextButton(true);
                              });
                          }}
                        />
                      </h1>

                      <div className="flex justify-end h-6">
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

export default Page5;
