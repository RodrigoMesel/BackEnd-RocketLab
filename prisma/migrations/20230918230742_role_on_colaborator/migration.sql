/*
  Warnings:

  - Added the required column `role` to the `Colaborator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Colaborator" ADD COLUMN     "role" TEXT NOT NULL;
