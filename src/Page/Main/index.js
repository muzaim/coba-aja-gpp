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
    }, 4000);
  }, []);

  const Menu = () => {
    return (
      <div className="grid gap-2  mt-44" onClick={openPage2}>
        <button className="block mx-auto py-4 px-16 bg-[#ff1616] rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans">
          Daftar
        </button>
        <button className="block mx-auto py-4 px-16 bg-[#5e17eb] rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#7041cf]">
          Masuk
        </button>
      </div>
    );
  };
  return (
    <>
      {page2 ? (
        <Page2 />
      ) : (
        <div className="w-full h-screen overflow-hidden bg-farmBarn bg-cover lg:max-w-6xl mx-auto">
          <div className="h-full ">
            <div className="flex h-full items-end justify-center -mt-8">
              {loading ? <LoadingBar /> : <Menu />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page1;
