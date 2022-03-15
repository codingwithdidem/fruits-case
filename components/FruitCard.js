import React from "react";

const FruitCard = ({ id, name, genus }) => {
  return (
    <div
      key={id}
      className="max-w-sm backdrop-blur-sm bg-white/30 rounded-lg ring-1 ring-gray-200 text-gray-900 transform duration-300 hover:shadow-xl hover:cursor-pointer"
    >
      <div className="flex flex-col items-center justify-center p-10">
        <h2 className="text-2xl font-medium uppercase">{name}</h2>
      </div>
    </div>
  );
};

export { FruitCard };
