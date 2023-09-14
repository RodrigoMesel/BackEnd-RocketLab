-- CreateTable
CREATE TABLE "Indicator" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "goal" TEXT NOT NULL,
    "superGoal" TEXT NOT NULL,
    "challenge" TEXT NOT NULL,
    "result" TEXT NOT NULL,

    CONSTRAINT "Indicator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColaboratorIndicator" (
    "id" SERIAL NOT NULL,
    "colaboratorId" INTEGER NOT NULL,
    "indicatorId" INTEGER NOT NULL,

    CONSTRAINT "ColaboratorIndicator_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ColaboratorIndicator" ADD CONSTRAINT "ColaboratorIndicator_indicatorId_fkey" FOREIGN KEY ("indicatorId") REFERENCES "Indicator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColaboratorIndicator" ADD CONSTRAINT "ColaboratorIndicator_colaboratorId_fkey" FOREIGN KEY ("colaboratorId") REFERENCES "Colaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
