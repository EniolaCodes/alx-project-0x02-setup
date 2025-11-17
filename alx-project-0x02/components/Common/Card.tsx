import { FC } from "react";
import { CardProps } from "@/interfaces";

const Card: FC<CardProps> = ({ title, content }) => {
  return (
    <div
      className="
        border rounded-xl p-6 shadow-sm bg-white 
        transition-all duration-300 transform 
        hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]
      "
    >
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{content}</p>
    </div>
  );
};

export default Card;
