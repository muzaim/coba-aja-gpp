import React, { useState } from "react";
import Farmer1 from "../../img/common/farmer1.png";
import Diamond from "../../img/common/diamond.png";
import QuestBook from "../../img/common/questbook.png";
import { Page6 } from "../index";
const Page5 = () => {
  const [page6, setPage6] = useState(false);
  const openPage6 = () => {
    setPage6((current) => !current);
  };
  return (
    <>
      {page6 ? (
        <Page6 />
      ) : (
        <div className="w-full h-screen overflow-hidden bg-page2 bg-left bg-cover opacity-90 lg:max-w-6xl mx-auto">
          <div className="w-[90%] h-full mx-auto">
            <div class="h-16">
              <div className="flex h-full justify-between items-center ">
                <div className="flex gap-2">
                  {/* DIAMOND */}
                  <div className="w-44 h-10 bg-[#782443] rounded-full items-center flex">
                    <div className="w-20 flex items-center justify-center ">
                      <img src={Diamond} alt="" className="w-10" />
                    </div>
                    <div className="w-full text-start ">
                      <span className="text-white font-bold font-openSans text-sm">
                        Rp.12.000
                      </span>
                    </div>
                  </div>
                  <div className="w-52 h-10 bg-[#f6f3e4] rounded-full items-center justify-center flex ">
                    <span className="font-bold capitalize text-[#782443]">
                      Ganti Nomor rekening
                    </span>
                  </div>
                  <div className="w-36 h-10 bg-[#f6f3e4] rounded-full items-center justify-center flex ">
                    <span className="font-bold capitalize text-[#782443]">
                      Riwayat
                    </span>
                  </div>
                </div>
                {/* BOOK QUEST */}
                <div>
                  <img src={QuestBook} alt="" className="w-16" />
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="w-56 h-screen">
                <div className="flex justify-center">
                  <img src={Farmer1} alt="" className="w-[5.8rem]" />
                </div>
              </div>
              <div class=" w-full h-screen">
                <div
                  className="w-[24rem] h-56 p-5 bg-[#782443] rounded-3xl text-start overflow-auto"
                  onClick={openPage6}
                >
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    1 telur ayam = 1 diamond
                  </p>
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    1 liter susu = 100 diamond
                  </p>
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    1 kg pangan = 10 diamond
                  </p>
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    1 diamond x 100 = Rp.100
                  </p>
                  <br />
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    10kg pangan = 101 butir
                  </p>
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    50kg pangan = 505 butir
                  </p>
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    100kg pangan = 1.010 butir
                  </p>
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    300kg pangan = 3.030 butir
                  </p>
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    500kg pangan = 5.050 butir
                  </p>
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    1.000kg pangan = 10.00 butir = 102 liter
                  </p>
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    2.000kg pangan = 10.00 butir = 204 liter
                  </p>
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    3.000kg pangan = 10.00 butir = 306 liter
                  </p>
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    5.000kg pangan = 10.00 butir = 510 liter
                  </p>
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    7.000kg pangan = 10.00 butir = 714 liter
                  </p>
                  <p className="text-white tracking-wide font-bold text-sm font-openSans">
                    10.000kg pangan = 10.00 butir = 1.020 liter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page5;
