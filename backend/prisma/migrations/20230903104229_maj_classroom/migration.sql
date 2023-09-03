/*
  Warnings:

  - You are about to alter the column `B` on the `_lessontovideo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `B` on the `_tagtovideo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `video` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `video` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `_lessontovideo` DROP FOREIGN KEY `_LessonToVideo_B_fkey`;

-- DropForeignKey
ALTER TABLE `_tagtovideo` DROP FOREIGN KEY `_TagToVideo_B_fkey`;

-- DropForeignKey
ALTER TABLE `shortvideo` DROP FOREIGN KEY `ShortVideo_id_fkey`;

-- DropIndex
DROP INDEX `Video_id_key` ON `video`;

-- AlterTable
ALTER TABLE `_lessontovideo` MODIFY `B` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `_tagtovideo` MODIFY `B` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `shortvideo` ADD COLUMN `videoId` INTEGER NULL;

-- AlterTable
ALTER TABLE `video` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Classroom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastUpdate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NULL,
    `trainingId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ClassroomToLesson` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ClassroomToLesson_AB_unique`(`A`, `B`),
    INDEX `_ClassroomToLesson_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Classroom` ADD CONSTRAINT `Classroom_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Classroom` ADD CONSTRAINT `Classroom_trainingId_fkey` FOREIGN KEY (`trainingId`) REFERENCES `Training`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShortVideo` ADD CONSTRAINT `ShortVideo_videoId_fkey` FOREIGN KEY (`videoId`) REFERENCES `Video`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LessonToVideo` ADD CONSTRAINT `_LessonToVideo_B_fkey` FOREIGN KEY (`B`) REFERENCES `Video`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClassroomToLesson` ADD CONSTRAINT `_ClassroomToLesson_A_fkey` FOREIGN KEY (`A`) REFERENCES `Classroom`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClassroomToLesson` ADD CONSTRAINT `_ClassroomToLesson_B_fkey` FOREIGN KEY (`B`) REFERENCES `Lesson`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TagToVideo` ADD CONSTRAINT `_TagToVideo_B_fkey` FOREIGN KEY (`B`) REFERENCES `Video`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
