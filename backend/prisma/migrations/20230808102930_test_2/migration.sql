-- CreateTable
CREATE TABLE `_LessonToTraining` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_LessonToTraining_AB_unique`(`A`, `B`),
    INDEX `_LessonToTraining_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_LessonToSubscription` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_LessonToSubscription_AB_unique`(`A`, `B`),
    INDEX `_LessonToSubscription_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ClassroomToLesson` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ClassroomToLesson_AB_unique`(`A`, `B`),
    INDEX `_ClassroomToLesson_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ClassroomToTraining` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ClassroomToTraining_AB_unique`(`A`, `B`),
    INDEX `_ClassroomToTraining_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_TagToTraining` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_TagToTraining_AB_unique`(`A`, `B`),
    INDEX `_TagToTraining_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SubscriptionToTraining` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_SubscriptionToTraining_AB_unique`(`A`, `B`),
    INDEX `_SubscriptionToTraining_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DiscountToTraining` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_DiscountToTraining_AB_unique`(`A`, `B`),
    INDEX `_DiscountToTraining_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_LessonToTraining` ADD CONSTRAINT `_LessonToTraining_A_fkey` FOREIGN KEY (`A`) REFERENCES `Lesson`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LessonToTraining` ADD CONSTRAINT `_LessonToTraining_B_fkey` FOREIGN KEY (`B`) REFERENCES `Training`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LessonToSubscription` ADD CONSTRAINT `_LessonToSubscription_A_fkey` FOREIGN KEY (`A`) REFERENCES `Lesson`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LessonToSubscription` ADD CONSTRAINT `_LessonToSubscription_B_fkey` FOREIGN KEY (`B`) REFERENCES `Subscription`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClassroomToLesson` ADD CONSTRAINT `_ClassroomToLesson_A_fkey` FOREIGN KEY (`A`) REFERENCES `Classroom`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClassroomToLesson` ADD CONSTRAINT `_ClassroomToLesson_B_fkey` FOREIGN KEY (`B`) REFERENCES `Lesson`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClassroomToTraining` ADD CONSTRAINT `_ClassroomToTraining_A_fkey` FOREIGN KEY (`A`) REFERENCES `Classroom`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClassroomToTraining` ADD CONSTRAINT `_ClassroomToTraining_B_fkey` FOREIGN KEY (`B`) REFERENCES `Training`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TagToTraining` ADD CONSTRAINT `_TagToTraining_A_fkey` FOREIGN KEY (`A`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TagToTraining` ADD CONSTRAINT `_TagToTraining_B_fkey` FOREIGN KEY (`B`) REFERENCES `Training`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SubscriptionToTraining` ADD CONSTRAINT `_SubscriptionToTraining_A_fkey` FOREIGN KEY (`A`) REFERENCES `Subscription`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SubscriptionToTraining` ADD CONSTRAINT `_SubscriptionToTraining_B_fkey` FOREIGN KEY (`B`) REFERENCES `Training`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DiscountToTraining` ADD CONSTRAINT `_DiscountToTraining_A_fkey` FOREIGN KEY (`A`) REFERENCES `Discount`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DiscountToTraining` ADD CONSTRAINT `_DiscountToTraining_B_fkey` FOREIGN KEY (`B`) REFERENCES `Training`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
