-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "recordNumber" SERIAL NOT NULL;

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);
