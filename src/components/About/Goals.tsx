import React from "react";

export default function Goals() {
  return (
    <div className="container mx-auto py-12 sm:py-16 lg:py-20">
      <p className="mx-auto mt-6 max-w-2xl text-lg text-center leading-8 text-gray-600 mb-8">
        This project was started with two important goals in mind
      </p>
      <div className="flex justify-evenly text-center flex-wrap md:flex-nowrap text-lg bg-white  ">
        <div className="w-full">
          <p className="p-10 font-mono">
            Create the world&apos;s first community owned eSports team that will
            engage users and allow them to directly contribute to the growth of
            the professional scene of DotA 2.
          </p>
        </div>
        <div className="w-full border-t-2 md:border-t-0 md:border-l-2 border-dashed border-black">
          <p className="p-10 font-mono">
            Convince organizations (specifically Valve) who host tournaments to
            pay their players better at lower levels to reduce the bar of entry
            into the eSports world.
          </p>
        </div>
      </div>
    </div>
  );
}
