/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the `_classroomtolesson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_classroomtotraining` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_discounttolesson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_discounttotraining` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_lessontosubscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_lessontotraining` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_lessontovideo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_shortvideototag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_subscriptiontotraining` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_tagtotraining` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_tagtovideo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `annotation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `certification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `classroom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `discount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lesson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shortvideo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `training` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `video` table. If the table is not empty, all the data it contains will be lost.

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
ALTER TABLE `_discounttolesson` DROP FOREIGN KEY `_DiscountToLesson_A_fkey`;

-- DropForeignKey
ALTER TABLE `_discounttolesson` DROP FOREIGN KEY `_DiscountToLesson_B_fkey`;

-- DropForeignKey
ALTER TABLE `_discounttotraining` DROP FOREIGN KEY `_DiscountToTraining_A_fkey`;

-- DropForeignKey
ALTER TABLE `_discounttotraining` DROP FOREIGN KEY `_DiscountToTraining_B_fkey`;

-- DropForeignKey
ALTER TABLE `_lessontosubscription` DROP FOREIGN KEY `_LessonToSubscription_A_fkey`;

-- DropForeignKey
ALTER TABLE `_lessontosubscription` DROP FOREIGN KEY `_LessonToSubscription_B_fkey`;

-- DropForeignKey
ALTER TABLE `_lessontotraining` DROP FOREIGN KEY `_LessonToTraining_A_fkey`;

-- DropForeignKey
ALTER TABLE `_lessontotraining` DROP FOREIGN KEY `_LessonToTraining_B_fkey`;

-- DropForeignKey
ALTER TABLE `_lessontovideo` DROP FOREIGN KEY `_LessonToVideo_A_fkey`;

-- DropForeignKey
ALTER TABLE `_lessontovideo` DROP FOREIGN KEY `_LessonToVideo_B_fkey`;

-- DropForeignKey
ALTER TABLE `_shortvideototag` DROP FOREIGN KEY `_ShortVideoToTag_A_fkey`;

-- DropForeignKey
ALTER TABLE `_shortvideototag` DROP FOREIGN KEY `_ShortVideoToTag_B_fkey`;

-- DropForeignKey
ALTER TABLE `_subscriptiontotraining` DROP FOREIGN KEY `_SubscriptionToTraining_A_fkey`;

-- DropForeignKey
ALTER TABLE `_subscriptiontotraining` DROP FOREIGN KEY `_SubscriptionToTraining_B_fkey`;

-- DropForeignKey
ALTER TABLE `_tagtotraining` DROP FOREIGN KEY `_TagToTraining_A_fkey`;

-- DropForeignKey
ALTER TABLE `_tagtotraining` DROP FOREIGN KEY `_TagToTraining_B_fkey`;

-- DropForeignKey
ALTER TABLE `_tagtovideo` DROP FOREIGN KEY `_TagToVideo_A_fkey`;

-- DropForeignKey
ALTER TABLE `_tagtovideo` DROP FOREIGN KEY `_TagToVideo_B_fkey`;

-- DropForeignKey
ALTER TABLE `annotation` DROP FOREIGN KEY `Annotation_lessonId_fkey`;

-- DropForeignKey
ALTER TABLE `annotation` DROP FOREIGN KEY `Annotation_userId_fkey`;

-- DropForeignKey
ALTER TABLE `answer` DROP FOREIGN KEY `Answer_commentId_fkey`;

-- DropForeignKey
ALTER TABLE `answer` DROP FOREIGN KEY `Answer_userId_fkey`;

-- DropForeignKey
ALTER TABLE `certification` DROP FOREIGN KEY `Certification_userId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_lessonId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `discount` DROP FOREIGN KEY `Discount_userId_fkey`;

-- DropForeignKey
ALTER TABLE `lesson` DROP FOREIGN KEY `Lesson_userId_fkey`;

-- DropForeignKey
ALTER TABLE `shortvideo` DROP FOREIGN KEY `ShortVideo_id_fkey`;

-- DropForeignKey
ALTER TABLE `subscription` DROP FOREIGN KEY `Subscription_userId_fkey`;

-- DropForeignKey
ALTER TABLE `training` DROP FOREIGN KEY `Training_userId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_id_fkey`;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `_classroomtolesson`;

-- DropTable
DROP TABLE `_classroomtotraining`;

-- DropTable
DROP TABLE `_discounttolesson`;

-- DropTable
DROP TABLE `_discounttotraining`;

-- DropTable
DROP TABLE `_lessontosubscription`;

-- DropTable
DROP TABLE `_lessontotraining`;

-- DropTable
DROP TABLE `_lessontovideo`;

-- DropTable
DROP TABLE `_shortvideototag`;

-- DropTable
DROP TABLE `_subscriptiontotraining`;

-- DropTable
DROP TABLE `_tagtotraining`;

-- DropTable
DROP TABLE `_tagtovideo`;

-- DropTable
DROP TABLE `annotation`;

-- DropTable
DROP TABLE `answer`;

-- DropTable
DROP TABLE `certification`;

-- DropTable
DROP TABLE `classroom`;

-- DropTable
DROP TABLE `comment`;

-- DropTable
DROP TABLE `discount`;

-- DropTable
DROP TABLE `lesson`;

-- DropTable
DROP TABLE `shortvideo`;

-- DropTable
DROP TABLE `subscription`;

-- DropTable
DROP TABLE `tag`;

-- DropTable
DROP TABLE `training`;

-- DropTable
DROP TABLE `video`;
