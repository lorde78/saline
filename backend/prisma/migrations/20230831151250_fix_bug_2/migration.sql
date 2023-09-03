/*
  Warnings:

  - You are about to drop the `_classroomtolesson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_classroomtotraining` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `classroom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_classroomtolesson` DROP FOREIGN KEY `_ClassroomToLesson_A_fkey`;

-- DropForeignKey
ALTER TABLE `_classroomtolesson` DROP FOREIGN KEY `_ClassroomToLesson_B_fkey`;

-- DropForeignKey
ALTER TABLE `_classroomtotraining` DROP FOREIGN KEY `_ClassroomToTraining_A_fkey`;

-- DropForeignKey
ALTER TABLE `_classroomtotraining` DROP FOREIGN KEY `_ClassroomToTraining_B_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_id_fkey`;

-- DropTable
DROP TABLE `_classroomtolesson`;

-- DropTable
DROP TABLE `_classroomtotraining`;

-- DropTable
DROP TABLE `classroom`;
