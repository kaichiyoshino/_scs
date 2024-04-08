import { Picture } from "@/app/types/types";
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
import React from "react";

interface PictureDataProps {
  pictureData: Picture;
}

const PictureCard = ({ pictureData }: PictureDataProps) => {
  const timestamp = pictureData.createdAt;
  const date = new Date(timestamp).toLocaleString();
  return (
    <Card className="w-[350px] h-[320px]">
      <CardHeader>
        <CardTitle>{date}</CardTitle>
        <CardDescription>The survelliance camera took a photo!</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-300 w-full h-[200px]"></div>
      </CardContent>
    </Card>
  );
};

export default PictureCard;
