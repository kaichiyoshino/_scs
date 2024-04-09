import React from "react";
import PictureCard from "../../components/elements/PictureCard";
import PictureHistory from "../../components/elements/PictureHistory";
import { Picture } from "../../types/types";
import PictureCardList from "../../components/elements/PictureCardList";

const MyPage = async () => {
  const response = await fetch("https://scs-tau.vercel.app/api/pic", {
    cache: "no-store",
  });
  const pictures: Picture[] = await response.json();

  return (
    <div className="flex divide-x h-screen">
      <PictureCardList pictures={pictures} />
      <div className="px-4 py-4 w-1/3">
        <PictureHistory pictures={pictures} />
      </div>
    </div>
  );
};

export default MyPage;
