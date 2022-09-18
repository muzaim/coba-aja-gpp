import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Page2 } from "../index";

const Page1 = () => {
  const [page2, setPage2] = useState(false);
  const [loading, setLoading] = useState(true);

  const openPage2 = () => {
    setPage2((current) => !current);
  };

  const LoadingBar = () => {
    return (
      <div class="w-72  bg-gray-200 h-7 rounded-xl overflow-hidden block mx-auto mt-16 ">
        <div
          class=" bg-indigo-600 h-7 rounded-xl animate-running"
          style={{ width: `100%` }}
        ></div>
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  const Menu = () => {
    return (
      <>
        <button className="block mx-auto py-4 px-16 bg-[#ff1616] rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans">
          Daftar
        </button>
        <button className="block mx-auto py-4 px-16 bg-[#5e17eb] rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#7041cf]">
          Masuk
        </button>
      </>
    );
  };
  return (
    <>
      {page2 ? (
        <Page2 />
      ) : (
        <div className="w-full h-screen bg-farmBarn bg-cover opacity-90">
          <div className="w-3/4 h-full mx-auto ">
            <div className="py-3">
              <h1 className="text-6xl font-bold text-center text-rose-900 -rotate-17 font-bukhari ">
                Tama
              </h1>
              <h1 className="text-6xl font-bold text-center text-rose-900 -rotate-17 font-bukhari drop-shadow-lg shadow-black">
                kochi
              </h1>
            </div>
            <div className="mt-20 grid gap-2" onClick={openPage2}>
              {loading ? <LoadingBar /> : <Menu />}
              {/* <LoadingBar /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page1;
