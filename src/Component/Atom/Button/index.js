import React from "react";

const Button = ({ action, text, textColor, bgColor, activeColor }) => {
  return (
    <div>
      <div
        className={`w-full h-full bg-[${bgColor}] rounded-full py-3 text-center active:${activeColor}`}
        onClick={action}
      >
        <div className={`font-semibold capitalize text-lg tracking-wider`}>
          <span className={`text-[${textColor}]`}>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Button;
