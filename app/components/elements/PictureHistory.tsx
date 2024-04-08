import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { Picture } from "../../types/types";

interface PicturesProps {
  pictures: Picture[];
}

const PictureHistory = ({ pictures }: PicturesProps) => {
  return (
    <div>
      <Table>
        <TableCaption>Picture History</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pictures.map((picture) => (
            <TableRow key={picture.id}>
              <TableCell>{picture.id}</TableCell>
              <TableCell>{picture.pictureName}</TableCell>
              <TableCell>
                {new Date(picture.createdAt).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PictureHistory;
