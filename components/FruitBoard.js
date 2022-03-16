import dynamic from "next/dynamic";
import React from "react";

const NutritionChart = dynamic(() => import("../components/NutritionChart"), {
  ssr: false,
});

const FruitBoard = ({ id, name, genus, family, order, nutritions }) => {
  return (
    <div
      key={id}
      className="w-full p-4  md:p-10 h-full backdrop-blur-sm bg-white/30 rounded-lg  text-gray-900 transform duration-300 shadow-2xl "
    >
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full mb-8">
          <div className="flex items-center space-x-4">
            <h1 className="flex items-center space-x-10 text-3xl md:text-4xl font-semibold leading-10 text-[#19253e] ">
              {name}
            </h1>

            <p className="text-lg sm:text-xl">({nutritions.calories} kcal)</p>
          </div>

          <div className="grid grid-col-1 sm:grid-cols-3 divide-y sm:divide-x divide-purple-400 bg-purple-600 text-gray-200 rounded-lg text-sm font-mono mt-8 md:mt-0">
            <div className="px-4 md:px-6 py-3 sm:py-2 flex items-center justify-center ">
              <p className="flex flex-col space-y-3">
                <span className="underline uppercase">Genus</span>

                <span>{genus}</span>
              </p>
            </div>
            <div className="px-4 md:px-6 py-3 sm:py-2 flex items-center justify-center ">
              <p className="flex flex-col space-y-3">
                <span className="underline uppercase">Family</span>

                <span>{family}</span>
              </p>
            </div>
            <div className="px-4 md:px-6 py-3 sm:py-2 flex items-center justify-center ">
              <p className="flex flex-col space-y-3">
                <span className="underline uppercase">Order</span>

                <span>{order}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 md:mt-4">
          <NutritionChart nutritions={nutritions} />
        </div>
      </div>
    </div>
  );
};

export { FruitBoard };
