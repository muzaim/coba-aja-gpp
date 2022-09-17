import React, { useState } from "react";
import Farmer2 from "../../img/common/farmer2.png";

import DialogComplete from "./DialogComplete";
import DialogPanel from "./DialogPanel";

const Page13 = () => {
  const [skipDialog, setSkipDalog] = useState(false);
  const [dialogIndex, setDialogIndex] = useState(0);

  const DialogNya = [
    {
      id: 1,
      text: "Halo selamat datang!Halo selamat datang!Halo selamat datang!Halo selamat datang!Halo selamat datang!",
    },
    {
      id: 2,
      text: "Event Menarik hari ini haruskamu kerjakan!Event Menarik hari ini haruskamu kerjakan!Event Menarik hari ini haruskamu kerjakan!",
    },
    {
      id: 3,
      text: "Beli pakan dan gunakan tumbuhan baruBeli pakan dan gunakan tumbuhan baruBeli pakan dan gunakan tumbuhan baruBeli pakan dan gunakan tumbuhan baru",
    },
    {
      id: 4,
      text: "Peternakan semakin luas, ayo bangun lagiPeternakan semakin luas, ayo bangun lagiPeternakan semakin luas, ayo bangun lagiPeternakan semakin luas, ayo bangun lagi",
    },
    {
      id: 5,
      text: "Saatnya memanen hasil ladang!Saatnya memanen hasil ladang!Saatnya memanen hasil ladang!Saatnya memanen hasil ladang!",
    },
  ];

  const skip = () => {
    setSkipDalog((current) => !current);
  };

  const checkNumber = (number) => {
    if (number > DialogNya.length - 1) {
      return 0;
    }
    if (number < 0) {
      return DialogNya.length - 1;
    }
    return number;
  };

  const nextDialog = () => {
    setDialogIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  return (
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
              <DialogComplete
                DialogNya={DialogNya[dialogIndex]}
                nextDialog={nextDialog}
                skip={skip}
              />
            ) : (
              <DialogPanel
                DialogNya={DialogNya[dialogIndex]}
                nextDialog={nextDialog}
                skip={skip}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page13;
