/*
  Warnings:

  - Made the column `image` on table `Workshop` required. This step will fail if there are existing NULL values in that column.
  - Made the column `registrationUrl` on table `Workshop` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Workshop" ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "registrationUrl" SET NOT NULL;
