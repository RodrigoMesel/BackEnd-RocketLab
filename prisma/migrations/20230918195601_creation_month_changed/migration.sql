/*
  Warnings:

  - You are about to drop the column `creationDate` on the `ColaboratorIndicator` table. All the data in the column will be lost.
  - Added the required column `creationMonth` to the `ColaboratorIndicator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ColaboratorIndicator" DROP COLUMN "creationDate",
ADD COLUMN     "creationMonth" INTEGER NOT NULL;
