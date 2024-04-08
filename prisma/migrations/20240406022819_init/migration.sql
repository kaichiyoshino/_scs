/*
  Warnings:

  - You are about to drop the column `picutreName` on the `Picture` table. All the data in the column will be lost.
  - Added the required column `pictureName` to the `Picture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Picture" DROP COLUMN "picutreName",
ADD COLUMN     "pictureName" TEXT NOT NULL;
