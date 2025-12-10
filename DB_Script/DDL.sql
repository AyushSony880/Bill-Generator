CREATE DATABASE billgenerator;
USE billgenerator;

-- Table structure for table `monthlyrecord`
--

DROP TABLE IF EXISTS `monthlyrecord`;

CREATE TABLE `monthlyrecord` (
  `id` int NOT NULL AUTO_INCREMENT,
  `school_id` int NOT NULL,
  `year` int NOT NULL,
  `month` varchar(15) DEFAULT NULL,
  `stu_1to5` int NOT NULL,
  `stu_6to8` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_school_year_month` (`school_id`,`year`,`month`),
  CONSTRAINT `fk_monthly_school` FOREIGN KEY (`school_id`) REFERENCES `school` (`school_id`) ON DELETE CASCADE ON UPDATE CASCADE
);

--
-- Dumping data for table `monthlyrecord`
--

LOCK TABLES `monthlyrecord` WRITE;
INSERT INTO `monthlyrecord` VALUES (75,79,2025,'January',43,40),(78,79,2024,'January',242,24),(79,81,2021,'February',27,14),(80,84,2023,'March',58,29),(81,83,2024,'January',88,44),(84,79,2025,'September',4,13),(85,87,2025,'January',45,60),(86,88,2025,'September',2674,2947);

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `prod_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) NOT NULL,
  `rate` int NOT NULL,
  `unit` varchar(4) DEFAULT NULL,
  `wps_1to5` int DEFAULT NULL,
  `wps_6to8` int DEFAULT NULL,
  `pps_1to5` float DEFAULT NULL,
  `pps_6to8` float DEFAULT NULL,
  `hsn` int NOT NULL,
  PRIMARY KEY (`prod_id`),
  UNIQUE KEY `unique_product_name` (`product_name`)
);

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;

INSERT INTO `product` VALUES (57,'pules',120,'kg',20,30,2.4,3.6,4558),(58,'vegetables',28,'kg',50,75,1.4,2.1,5454),(59,'oil',160,'kg',5,8,0.8,1.2,1455),(60,'fule',15,'kg',100,150,1.5,2.25,4554),(61,'asd',123,'kg',13,13,1.599,1.599,123);
UNLOCK TABLES;

--
-- Table structure for table `school`
--

DROP TABLE IF EXISTS `school`;
CREATE TABLE `school` (
  `school_id` int NOT NULL AUTO_INCREMENT,
  `school_name` varchar(50) NOT NULL,
  `address` varchar(200) NOT NULL,
  PRIMARY KEY (`school_id`),
  UNIQUE KEY `unique_school_name` (`school_name`)
);

--
-- Dumping data for table `school`
--

LOCK TABLES `school` WRITE;
INSERT INTO `school` VALUES (79,'Ayush','AYUSH'),(81,'a1','B1'),(82,'a2','B2'),(83,'a3','B3'),(84,'a4','B4'),(85,'a5','B5'),(87,'st. michaels academy','bettiah'),(88,'G.M.S','Nauwadily');UNLOCK TABLES;

