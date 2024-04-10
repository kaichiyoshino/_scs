import React from "react";
import PictureCard from "../../components/elements/PictureCard";
import PictureCardList from "../../components/elements/PictureCardList";

const MyPage = async () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="text-blue-500 font-bold text-xl ml-4 mt-2">
        *画像は最新10件のみ表示されます
      </div>
      <PictureCardList />
    </div>
  );
};

export default MyPage;
