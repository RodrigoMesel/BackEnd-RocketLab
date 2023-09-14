-- CreateTable
CREATE TABLE "Colaborator" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "grade" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Colaborator_pkey" PRIMARY KEY ("id")
);
