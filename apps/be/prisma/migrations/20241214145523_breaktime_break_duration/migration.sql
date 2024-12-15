/*
  Warnings:

  - You are about to drop the column `breakEnd` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `breakStart` on the `Attendance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Attendance` DROP COLUMN `breakEnd`,
    DROP COLUMN `breakStart`,
    ADD COLUMN `breakDuration` INTEGER NULL;
