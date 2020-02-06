/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : toupiao

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2020-02-01 15:06:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for result
-- ----------------------------
DROP TABLE IF EXISTS `result`;
CREATE TABLE `result` (
  `id` varchar(10) NOT NULL,
  `uid` varchar(10) DEFAULT NULL,
  `vid` varchar(10) DEFAULT NULL,
  `selected` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of result
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `phone` varchar(11) NOT NULL,
  `username` varchar(10) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  `id` varchar(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('18701553442', 'yihang', '1233abc', 'fimegt0j3b');
INSERT INTO `user` VALUES ('18701553441', 'yihang', '12345678', '76wtvxyx4k');

-- ----------------------------
-- Table structure for vote
-- ----------------------------
DROP TABLE IF EXISTS `vote`;
CREATE TABLE `vote` (
  `select` varchar(600) DEFAULT NULL,
  `info` varchar(100) DEFAULT NULL COMMENT '补充描述',
  `title` varchar(100) DEFAULT NULL,
  `id` varchar(100) NOT NULL,
  `endtime` datetime DEFAULT NULL,
  `uid` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vote
-- ----------------------------
INSERT INTO `vote` VALUES ('[\"选项一\",\"222\",\"3333\",\"444444\"]', null, '18701553449', 'q2le0rk1y3', '2020-02-01 14:40:00', 'fimegt0j3b');
