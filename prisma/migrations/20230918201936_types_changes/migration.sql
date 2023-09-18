/*
  Warnings:

  - The `result` column on the `ColaboratorIndicator` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `challenge` on the `ColaboratorIndicator` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `goal` on the `ColaboratorIndicator` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `superGoal` on the `ColaboratorIndicator` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ColaboratorIndicator" DROP COLUMN "result",
ADD COLUMN     "result" DOUBLE PRECISION NOT NULL DEFAULT 0,
DROP COLUMN "challenge",
ADD COLUMN     "challenge" DOUBLE PRECISION NOT NULL,
DROP COLUMN "goal",
ADD COLUMN     "goal" DOUBLE PRECISION NOT NULL,
DROP COLUMN "superGoal",
ADD COLUMN     "superGoal" DOUBLE PRECISION NOT NULL;
