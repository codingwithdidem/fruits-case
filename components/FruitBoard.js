import dynamic from "next/dynamic";
import React from "react";

const NutritionChart = dynamic(() => import("../components/NutritionChart"), {
  ssr: false,
});

const FruitBoard = ({ id, name, genus, family, order, nutritions }) => {
  return (
    <div
      key={id}
      className="w-full p-10 h-full backdrop-blur-sm bg-white/30 rounded-lg border border-gray-200 text-gray-900 transform duration-300 shadow-3xl"
    >
      <div className="flex flex-col items-start w-full">
        <div className="flex items-center justify-between w-full mb-8">
          <h1 className="text-4xl font-semibold leading-10 text-[#19253e] ">
            {name}
          </h1>

          <div className="bg-purple-600 text-gray-200 p-2 flex items-center justify-center divide-x-2 divide-purple-400 rounded-lg text-sm font-mono">
            <div className="px-6 flex items-center justify-center">
              <p className="flex flex-col space-y-2">
                <span className="underline uppercase">Genus</span>

                <span>{genus}</span>
              </p>
            </div>

            <div className="px-6 flex items-center justify-center">
              <p className="flex flex-col space-y-2">
                <span className="underline uppercase">Family</span>

                <span>{family}</span>
              </p>
            </div>

            <div className="px-6 flex items-center justify-center">
              <p className="flex flex-col space-y-2">
                <span className="underline uppercase">Order</span>

                <span>{order}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <NutritionChart nutritions={nutritions} />
        </div>
      </div>
    </div>
  );
};

export { FruitBoard };
