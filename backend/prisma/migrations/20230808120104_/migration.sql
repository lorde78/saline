-- DropForeignKey
ALTER TABLE `annotation` DROP FOREIGN KEY `Annotation_id_fkey`;

-- DropForeignKey
ALTER TABLE `discount` DROP FOREIGN KEY `Discount_id_fkey`;

-- DropForeignKey
ALTER TABLE `training` DROP FOREIGN KEY `Training_id_fkey`;

-- AlterTable
ALTER TABLE `annotation` ADD COLUMN `lessonId` VARCHAR(191) NULL,
    ADD COLUMN `userId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `comment` ADD COLUMN `lessonId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `discount` ADD COLUMN `userId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `training` ADD COLUMN `userId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Training` ADD CONSTRAINT `Training_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Annotation` ADD CONSTRAINT `Annotation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Annotation` ADD CONSTRAINT `Annotation_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Discount` ADD CONSTRAINT `Discount_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
