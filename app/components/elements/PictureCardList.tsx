"use client";
import React, { useEffect, useState } from "react";
import PictureCard from "./PictureCard";
import { supabase } from "@/lib/supabaseClient";
import { url } from "inspector";

const PictureCardList = () => {
  const public_url =
    "https://dhxcxkousghslprmhbki.supabase.co/storage/v1/object/public/pictures";
  const [urlList, setUrlList] = useState<string[]>([]);
  const [dateList, setDateList] = useState<string[]>([]);
  const listAllImage = async () => {
    const tempUrlList: string[] = [];
    const tempDateList: string[] = [];
    const { data, error } = await supabase.storage.from("pictures").list("", {
      limit: 10,
      offset: 0,
      sortBy: { column: "created_at", order: "desc" },
    });
    if (error) {
      console.log(error);
      return;
    }

    for (let index = 0; index < data.length; index++) {
      if (data[index].name !== ".emptyFolderPlaceholder") {
        tempUrlList.push(data[index].name);
        tempDateList.push(data[index].created_at);
      }
    }
    setUrlList(tempUrlList);
    setDateList(tempDateList);
  };

  useEffect(() => {
    (async () => {
      await listAllImage();
    })();
  }, []);
  console.log(dateList);
  return (
    <div className="w-full lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-4 py-4">
      {urlList.map((pictureName: string, index: number) => (
        <PictureCard
          key={index}
          pictureName={pictureName}
          pictureDate={dateList[index]}
        />
      ))}
    </div>
  );
};

export default PictureCardList;
