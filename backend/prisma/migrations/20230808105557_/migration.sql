-- DropForeignKey
ALTER TABLE `answer` DROP FOREIGN KEY `Answer_id_fkey`;

-- AddForeignKey
ALTER TABLE `Answer` ADD CONSTRAINT `Answer_id_fkey` FOREIGN KEY (`id`) REFERENCES `Comment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShortVideo` ADD CONSTRAINT `ShortVideo_id_fkey` FOREIGN KEY (`id`) REFERENCES `Video`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
