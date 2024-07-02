import React from 'react';

const Feature = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center px-8 py-6 border border-y-[1px] border-rounded-lg ">
      <Icon className="text-4xl text-[#0b0335] mb-4 transform transition duration-300 ease-in-out hover:scale-110 " />
      <h3 className="text-base font-bold text-[#232323] mb-2">{title}</h3>
      <p className="text-[#3c3c3c] leading-[22px] text-xs">{description}</p>
    </div>
  );
};

export default Feature;