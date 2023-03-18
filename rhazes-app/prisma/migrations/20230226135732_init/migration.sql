-- CreateEnum
CREATE TYPE "MatchType" AS ENUM ('Bo1', 'Bo3', 'Bo5');

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "OppLogo" TEXT NOT NULL,
    "OppName" TEXT NOT NULL,
    "tournament" TEXT NOT NULL,
    "matchType" "MatchType" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "matchResults" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);
