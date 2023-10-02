/*
  Warnings:

  - You are about to drop the column `unity` on the `ColaboratorIndicator` table. All the data in the column will be lost.
  - Added the required column `unity` to the `Indicator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ColaboratorIndicator" DROP COLUMN "unity";

-- AlterTable
ALTER TABLE "Indicator" ADD COLUMN     "unity" "Unity" NOT NULL;
