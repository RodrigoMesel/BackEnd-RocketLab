/*
  Warnings:

  - You are about to drop the column `result` on the `Indicator` table. All the data in the column will be lost.
  - Added the required column `creationDate` to the `ColaboratorIndicator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ColaboratorIndicator" ADD COLUMN     "creationDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "result" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Indicator" DROP COLUMN "result";
