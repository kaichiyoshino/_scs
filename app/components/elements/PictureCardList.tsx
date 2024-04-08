import React from "react";
import PictureCard from "./PictureCard";
import { Picture } from "../../types/types";
import { Pirata_One } from "next/font/google";

interface PictureCardListProps {
  pictures: Picture[];
}

const PictureCardList = ({ pictures }: PictureCardListProps) => {
  return (
    <div className="w-2/3 grid justify-around lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-4 py-4 gap-4">
      {pictures.map((pictureData: Picture) => (
        <PictureCard key={pictureData.id} pictureData={pictureData} />
      ))}
    </div>
  );
};

export default PictureCardList;
