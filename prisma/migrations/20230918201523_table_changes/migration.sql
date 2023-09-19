/*
  Warnings:

  - You are about to drop the column `challenge` on the `Indicator` table. All the data in the column will be lost.
  - You are about to drop the column `goal` on the `Indicator` table. All the data in the column will be lost.
  - You are about to drop the column `superGoal` on the `Indicator` table. All the data in the column will be lost.
  - You are about to drop the column `unity` on the `Indicator` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Indicator` table. All the data in the column will be lost.
  - Added the required column `challenge` to the `ColaboratorIndicator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `goal` to the `ColaboratorIndicator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `superGoal` to the `ColaboratorIndicator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unity` to the `ColaboratorIndicator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `ColaboratorIndicator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ColaboratorIndicator" ADD COLUMN     "challenge" TEXT NOT NULL,
ADD COLUMN     "goal" TEXT NOT NULL,
ADD COLUMN     "superGoal" TEXT NOT NULL,
ADD COLUMN     "unity" "Unity" NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Indicator" DROP COLUMN "challenge",
DROP COLUMN "goal",
DROP COLUMN "superGoal",
DROP COLUMN "unity",
DROP COLUMN "weight";
