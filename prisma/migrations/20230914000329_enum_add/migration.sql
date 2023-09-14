/*
  Warnings:

  - Added the required column `unity` to the `Indicator` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Unity" AS ENUM ('Numero', 'Financeiro', 'Percentual');

-- AlterTable
ALTER TABLE "Indicator" ADD COLUMN     "unity" "Unity" NOT NULL;
