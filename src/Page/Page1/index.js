import React from "react";

const Page1 = () => {
  return (
    <div className="w-full h-screen bg-page1 bg-cover opacity-90">
      <div className="w-3/4 h-full mx-auto ">
        <div className="py-3">
          <h1 className="text-6xl font-bold text-center text-rose-900 -rotate-17 font-bukhari ">
            Tama
          </h1>
          <h1 className="text-6xl font-bold text-center text-rose-900 -rotate-17 font-bukhari drop-shadow-lg shadow-black">
            kochi
          </h1>
        </div>
        <div className="mt-8 grid gap-2">
          <button className="block mx-auto py-4 px-16 bg-[#ff1616] rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans">
            Daftar
          </button>
          <button className="block mx-auto py-4 px-16 bg-[#5e17eb] rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans">
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
