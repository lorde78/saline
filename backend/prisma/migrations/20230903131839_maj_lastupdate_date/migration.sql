/*
  Warnings:

  - Added the required column `lastUpdate` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `annotation` ALTER COLUMN `lastUpdate` DROP DEFAULT;

-- AlterTable
ALTER TABLE `answer` ALTER COLUMN `lastUpdate` DROP DEFAULT;

-- AlterTable
ALTER TABLE `classroom` ALTER COLUMN `lastUpdate` DROP DEFAULT;

-- AlterTable
ALTER TABLE `comment` ALTER COLUMN `lastUpdate` DROP DEFAULT;

-- AlterTable
ALTER TABLE `discount` ALTER COLUMN `lastUpdate` DROP DEFAULT;

-- AlterTable
ALTER TABLE `shortvideo` ALTER COLUMN `lastUpdate` DROP DEFAULT;

-- AlterTable
ALTER TABLE `training` ALTER COLUMN `lastUpdate` DROP DEFAULT;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `lastUpdate` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `video` ALTER COLUMN `lastUpdate` DROP DEFAULT;

-- CreateTable
CREATE TABLE `Subscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `subscriptionType` VARCHAR(191) NULL,
    `subscriptionStatus` BOOLEAN NOT NULL,
    `price` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastUpdate` DATETIME(3) NOT NULL,
    `nbSubscribers` INTEGER NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_LessonToTag` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_LessonToTag_AB_unique`(`A`, `B`),
    INDEX `_LessonToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_LessonToSubscription` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_LessonToSubscription_AB_unique`(`A`, `B`),
    INDEX `_LessonToSubscription_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SubscriptionToTraining` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_SubscriptionToTraining_AB_unique`(`A`, `B`),
    INDEX `_SubscriptionToTraining_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DiscountToSubscription` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_DiscountToSubscription_AB_unique`(`A`, `B`),
    INDEX `_DiscountToSubscription_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Subscription` ADD CONSTRAINT `Subscription_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LessonToTag` ADD CONSTRAINT `_LessonToTag_A_fkey` FOREIGN KEY (`A`) REFERENCES `Lesson`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LessonToTag` ADD CONSTRAINT `_LessonToTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LessonToSubscription` ADD CONSTRAINT `_LessonToSubscription_A_fkey` FOREIGN KEY (`A`) REFERENCES `Lesson`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LessonToSubscription` ADD CONSTRAINT `_LessonToSubscription_B_fkey` FOREIGN KEY (`B`) REFERENCES `Subscription`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SubscriptionToTraining` ADD CONSTRAINT `_SubscriptionToTraining_A_fkey` FOREIGN KEY (`A`) REFERENCES `Subscription`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SubscriptionToTraining` ADD CONSTRAINT `_SubscriptionToTraining_B_fkey` FOREIGN KEY (`B`) REFERENCES `Training`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DiscountToSubscription` ADD CONSTRAINT `_DiscountToSubscription_A_fkey` FOREIGN KEY (`A`) REFERENCES `Discount`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DiscountToSubscription` ADD CONSTRAINT `_DiscountToSubscription_B_fkey` FOREIGN KEY (`B`) REFERENCES `Subscription`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
