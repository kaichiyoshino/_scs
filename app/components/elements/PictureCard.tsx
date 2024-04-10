import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/lib/supabaseClient";
import React, { useEffect, useState } from "react";

interface PictureCardProps {
  key: number;
  pictureName: string;
  pictureDate: string;
}

const PictureCard = ({ pictureName, pictureDate }: PictureCardProps) => {
  const public_url =
    "https://dhxcxkousghslprmhbki.supabase.co/storage/v1/object/public/pictures/";

  const time = new Date(
    Number(pictureDate.substring(0, 4)),
    Number(pictureDate.substring(5, 7)) - 1,
    Number(pictureDate.substring(8, 10)),
    Number(pictureDate.substring(11, 13)) + 9,
    Number(pictureDate.substring(14, 16)),
    Number(pictureDate.substring(17, 19))
  ).toLocaleString();
  return (
    <div className="flex border">
      <img
        src={public_url + pictureName}
        className="w-[300px] h-[200px] rounded-sm"
      />
      <div className="flex flex-col ml-10">
        <div className="font-bold text-[3rem]">{time}</div>
        <div className="font-bold text-3xl text-red-400">
          Human is detected!!
        </div>
      </div>
    </div>
  );
};

export default PictureCard;
