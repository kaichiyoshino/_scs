-- CreateTable
CREATE TABLE "Picture" (
    "id" SERIAL NOT NULL,
    "picutreName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);
