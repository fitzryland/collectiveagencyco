-- MySQL dump 10.13  Distrib 5.5.27, for Linux (i686)
--
-- Host: localhost    Database: wp_collectiveagen
-- ------------------------------------------------------
-- Server version	5.5.27-29.0-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `wp_commentmeta`
--

DROP TABLE IF EXISTS `wp_commentmeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_commentmeta` (
  `meta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `comment_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `meta_key` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`meta_id`),
  KEY `comment_id` (`comment_id`),
  KEY `meta_key` (`meta_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_commentmeta`
--

LOCK TABLES `wp_commentmeta` WRITE;
/*!40000 ALTER TABLE `wp_commentmeta` DISABLE KEYS */;
/*!40000 ALTER TABLE `wp_commentmeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wp_comments`
--

DROP TABLE IF EXISTS `wp_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_comments` (
  `comment_ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `comment_post_ID` bigint(20) unsigned NOT NULL DEFAULT '0',
  `comment_author` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `comment_author_email` varchar(100) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `comment_author_url` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `comment_author_IP` varchar(100) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `comment_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_content` text COLLATE utf8_unicode_ci NOT NULL,
  `comment_karma` int(11) NOT NULL DEFAULT '0',
  `comment_approved` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT '1',
  `comment_agent` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `comment_type` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `comment_parent` bigint(20) unsigned NOT NULL DEFAULT '0',
  `user_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`comment_ID`),
  KEY `comment_post_ID` (`comment_post_ID`),
  KEY `comment_approved_date_gmt` (`comment_approved`,`comment_date_gmt`),
  KEY `comment_date_gmt` (`comment_date_gmt`),
  KEY `comment_parent` (`comment_parent`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_comments`
--

LOCK TABLES `wp_comments` WRITE;
/*!40000 ALTER TABLE `wp_comments` DISABLE KEYS */;
INSERT INTO `wp_comments` VALUES (1,1,'Mr WordPress','','http://wordpress.org/','','2012-06-14 14:46:14','2012-06-14 14:46:14','Hi, this is a comment.<br />To delete a comment, just log in and view the post&#039;s comments. There you will have the option to edit or delete them.',0,'1','','',0,0);
/*!40000 ALTER TABLE `wp_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wp_links`
--

DROP TABLE IF EXISTS `wp_links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_links` (
  `link_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `link_url` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `link_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `link_image` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `link_target` varchar(25) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `link_description` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `link_visible` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y',
  `link_owner` bigint(20) unsigned NOT NULL DEFAULT '1',
  `link_rating` int(11) NOT NULL DEFAULT '0',
  `link_updated` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `link_rel` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `link_notes` mediumtext COLLATE utf8_unicode_ci NOT NULL,
  `link_rss` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`link_id`),
  KEY `link_visible` (`link_visible`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_links`
--

LOCK TABLES `wp_links` WRITE;
/*!40000 ALTER TABLE `wp_links` DISABLE KEYS */;
INSERT INTO `wp_links` VALUES (1,'http://codex.wordpress.org/','Documentation','','','','Y',1,0,'0000-00-00 00:00:00','','','');
INSERT INTO `wp_links` VALUES (2,'http://wordpress.org/news/','WordPress Blog','','','','Y',1,0,'0000-00-00 00:00:00','','','http://wordpress.org/news/feed/');
INSERT INTO `wp_links` VALUES (3,'http://wordpress.org/support/','Support Forums','','','','Y',1,0,'0000-00-00 00:00:00','','','');
INSERT INTO `wp_links` VALUES (4,'http://wordpress.org/extend/plugins/','Plugins','','','','Y',1,0,'0000-00-00 00:00:00','','','');
INSERT INTO `wp_links` VALUES (5,'http://wordpress.org/extend/themes/','Themes','','','','Y',1,0,'0000-00-00 00:00:00','','','');
INSERT INTO `wp_links` VALUES (6,'http://wordpress.org/support/forum/requests-and-feedback','Feedback','','','','Y',1,0,'0000-00-00 00:00:00','','','');
INSERT INTO `wp_links` VALUES (7,'http://planet.wordpress.org/','WordPress Planet','','','','Y',1,0,'0000-00-00 00:00:00','','','');
/*!40000 ALTER TABLE `wp_links` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wp_options`
--

DROP TABLE IF EXISTS `wp_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_options` (
  `option_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `option_name` varchar(64) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `option_value` longtext COLLATE utf8_unicode_ci NOT NULL,
  `autoload` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'yes',
  PRIMARY KEY (`option_id`),
  UNIQUE KEY `option_name` (`option_name`)
) ENGINE=InnoDB AUTO_INCREMENT=174 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_options`
--

LOCK TABLES `wp_options` WRITE;
/*!40000 ALTER TABLE `wp_options` DISABLE KEYS */;
INSERT INTO `wp_options` VALUES (1,'siteurl','http://collectiveagen.wpengine.com','yes');
INSERT INTO `wp_options` VALUES (2,'blogname','Collective Agency','yes');
INSERT INTO `wp_options` VALUES (3,'blogdescription','','yes');
INSERT INTO `wp_options` VALUES (4,'users_can_register','0','yes');
INSERT INTO `wp_options` VALUES (5,'admin_email','fitzryland@gmail.com','yes');
INSERT INTO `wp_options` VALUES (6,'start_of_week','1','yes');
INSERT INTO `wp_options` VALUES (7,'use_balanceTags','0','yes');
INSERT INTO `wp_options` VALUES (8,'use_smilies','1','yes');
INSERT INTO `wp_options` VALUES (9,'require_name_email','1','yes');
INSERT INTO `wp_options` VALUES (10,'comments_notify','1','yes');
INSERT INTO `wp_options` VALUES (11,'posts_per_rss','10','yes');
INSERT INTO `wp_options` VALUES (12,'rss_use_excerpt','0','yes');
INSERT INTO `wp_options` VALUES (13,'mailserver_url','mail.example.com','yes');
INSERT INTO `wp_options` VALUES (14,'mailserver_login','login@example.com','yes');
INSERT INTO `wp_options` VALUES (15,'mailserver_pass','password','yes');
INSERT INTO `wp_options` VALUES (16,'mailserver_port','110','yes');
INSERT INTO `wp_options` VALUES (17,'default_category','1','yes');
INSERT INTO `wp_options` VALUES (18,'default_comment_status','open','yes');
INSERT INTO `wp_options` VALUES (19,'default_ping_status','open','yes');
INSERT INTO `wp_options` VALUES (20,'default_pingback_flag','0','yes');
INSERT INTO `wp_options` VALUES (22,'posts_per_page','10','yes');
INSERT INTO `wp_options` VALUES (23,'date_format','F j, Y','yes');
INSERT INTO `wp_options` VALUES (24,'time_format','g:i a','yes');
INSERT INTO `wp_options` VALUES (25,'links_updated_date_format','F j, Y g:i a','yes');
INSERT INTO `wp_options` VALUES (26,'links_recently_updated_prepend','<em>','yes');
INSERT INTO `wp_options` VALUES (27,'links_recently_updated_append','</em>','yes');
INSERT INTO `wp_options` VALUES (28,'links_recently_updated_time','120','yes');
INSERT INTO `wp_options` VALUES (29,'comment_moderation','0','yes');
INSERT INTO `wp_options` VALUES (30,'moderation_notify','1','yes');
INSERT INTO `wp_options` VALUES (31,'permalink_structure','','yes');
INSERT INTO `wp_options` VALUES (32,'gzipcompression','0','yes');
INSERT INTO `wp_options` VALUES (33,'hack_file','0','yes');
INSERT INTO `wp_options` VALUES (34,'blog_charset','UTF-8','yes');
INSERT INTO `wp_options` VALUES (35,'moderation_keys','','no');
INSERT INTO `wp_options` VALUES (36,'active_plugins','a:0:{}','yes');
INSERT INTO `wp_options` VALUES (37,'home','http://collectiveagen.wpengine.com','yes');
INSERT INTO `wp_options` VALUES (38,'category_base','','yes');
INSERT INTO `wp_options` VALUES (39,'ping_sites','http://rpc.pingomatic.com/','yes');
INSERT INTO `wp_options` VALUES (40,'advanced_edit','0','yes');
INSERT INTO `wp_options` VALUES (41,'comment_max_links','2','yes');
INSERT INTO `wp_options` VALUES (42,'gmt_offset','0','yes');
INSERT INTO `wp_options` VALUES (43,'default_email_category','1','yes');
INSERT INTO `wp_options` VALUES (44,'recently_edited','','no');
INSERT INTO `wp_options` VALUES (45,'template','twentytwelve','yes');
INSERT INTO `wp_options` VALUES (46,'stylesheet','twentytwelve','yes');
INSERT INTO `wp_options` VALUES (47,'comment_whitelist','1','yes');
INSERT INTO `wp_options` VALUES (48,'blacklist_keys','','no');
INSERT INTO `wp_options` VALUES (49,'comment_registration','0','yes');
INSERT INTO `wp_options` VALUES (50,'html_type','text/html','yes');
INSERT INTO `wp_options` VALUES (51,'use_trackback','0','yes');
INSERT INTO `wp_options` VALUES (52,'default_role','subscriber','yes');
INSERT INTO `wp_options` VALUES (53,'db_version','22441','yes');
INSERT INTO `wp_options` VALUES (54,'uploads_use_yearmonth_folders','1','yes');
INSERT INTO `wp_options` VALUES (55,'upload_path','','yes');
INSERT INTO `wp_options` VALUES (56,'blog_public','0','yes');
INSERT INTO `wp_options` VALUES (57,'default_link_category','2','yes');
INSERT INTO `wp_options` VALUES (58,'show_on_front','posts','yes');
INSERT INTO `wp_options` VALUES (59,'tag_base','','yes');
INSERT INTO `wp_options` VALUES (60,'show_avatars','1','yes');
INSERT INTO `wp_options` VALUES (61,'avatar_rating','G','yes');
INSERT INTO `wp_options` VALUES (62,'upload_url_path','','yes');
INSERT INTO `wp_options` VALUES (63,'thumbnail_size_w','150','yes');
INSERT INTO `wp_options` VALUES (64,'thumbnail_size_h','150','yes');
INSERT INTO `wp_options` VALUES (65,'thumbnail_crop','1','yes');
INSERT INTO `wp_options` VALUES (66,'medium_size_w','300','yes');
INSERT INTO `wp_options` VALUES (67,'medium_size_h','300','yes');
INSERT INTO `wp_options` VALUES (68,'avatar_default','mystery','yes');
INSERT INTO `wp_options` VALUES (71,'large_size_w','1024','yes');
INSERT INTO `wp_options` VALUES (72,'large_size_h','1024','yes');
INSERT INTO `wp_options` VALUES (73,'image_default_link_type','file','yes');
INSERT INTO `wp_options` VALUES (74,'image_default_size','','yes');
INSERT INTO `wp_options` VALUES (75,'image_default_align','','yes');
INSERT INTO `wp_options` VALUES (76,'close_comments_for_old_posts','0','yes');
INSERT INTO `wp_options` VALUES (77,'close_comments_days_old','14','yes');
INSERT INTO `wp_options` VALUES (78,'thread_comments','1','yes');
INSERT INTO `wp_options` VALUES (79,'thread_comments_depth','5','yes');
INSERT INTO `wp_options` VALUES (80,'page_comments','0','yes');
INSERT INTO `wp_options` VALUES (81,'comments_per_page','50','yes');
INSERT INTO `wp_options` VALUES (82,'default_comments_page','newest','yes');
INSERT INTO `wp_options` VALUES (83,'comment_order','asc','yes');
INSERT INTO `wp_options` VALUES (84,'sticky_posts','a:0:{}','yes');
INSERT INTO `wp_options` VALUES (85,'widget_categories','a:2:{i:2;a:4:{s:5:\"title\";s:0:\"\";s:5:\"count\";i:0;s:12:\"hierarchical\";i:0;s:8:\"dropdown\";i:0;}s:12:\"_multiwidget\";i:1;}','yes');
INSERT INTO `wp_options` VALUES (86,'widget_text','a:0:{}','yes');
INSERT INTO `wp_options` VALUES (87,'widget_rss','a:0:{}','yes');
INSERT INTO `wp_options` VALUES (88,'uninstall_plugins','a:0:{}','no');
INSERT INTO `wp_options` VALUES (89,'timezone_string','','yes');
INSERT INTO `wp_options` VALUES (90,'embed_autourls','1','yes');
INSERT INTO `wp_options` VALUES (91,'embed_size_w','','yes');
INSERT INTO `wp_options` VALUES (92,'embed_size_h','600','yes');
INSERT INTO `wp_options` VALUES (93,'page_for_posts','0','yes');
INSERT INTO `wp_options` VALUES (94,'page_on_front','0','yes');
INSERT INTO `wp_options` VALUES (95,'default_post_format','0','yes');
INSERT INTO `wp_options` VALUES (96,'initial_db_version','20596','yes');
INSERT INTO `wp_options` VALUES (97,'wp_user_roles','a:5:{s:13:\"administrator\";a:2:{s:4:\"name\";s:13:\"Administrator\";s:12:\"capabilities\";a:62:{s:13:\"switch_themes\";b:1;s:11:\"edit_themes\";b:1;s:16:\"activate_plugins\";b:1;s:12:\"edit_plugins\";b:1;s:10:\"edit_users\";b:1;s:10:\"edit_files\";b:1;s:14:\"manage_options\";b:1;s:17:\"moderate_comments\";b:1;s:17:\"manage_categories\";b:1;s:12:\"manage_links\";b:1;s:12:\"upload_files\";b:1;s:6:\"import\";b:1;s:15:\"unfiltered_html\";b:1;s:10:\"edit_posts\";b:1;s:17:\"edit_others_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:10:\"edit_pages\";b:1;s:4:\"read\";b:1;s:8:\"level_10\";b:1;s:7:\"level_9\";b:1;s:7:\"level_8\";b:1;s:7:\"level_7\";b:1;s:7:\"level_6\";b:1;s:7:\"level_5\";b:1;s:7:\"level_4\";b:1;s:7:\"level_3\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:17:\"edit_others_pages\";b:1;s:20:\"edit_published_pages\";b:1;s:13:\"publish_pages\";b:1;s:12:\"delete_pages\";b:1;s:19:\"delete_others_pages\";b:1;s:22:\"delete_published_pages\";b:1;s:12:\"delete_posts\";b:1;s:19:\"delete_others_posts\";b:1;s:22:\"delete_published_posts\";b:1;s:20:\"delete_private_posts\";b:1;s:18:\"edit_private_posts\";b:1;s:18:\"read_private_posts\";b:1;s:20:\"delete_private_pages\";b:1;s:18:\"edit_private_pages\";b:1;s:18:\"read_private_pages\";b:1;s:12:\"delete_users\";b:1;s:12:\"create_users\";b:1;s:17:\"unfiltered_upload\";b:1;s:14:\"edit_dashboard\";b:1;s:14:\"update_plugins\";b:1;s:14:\"delete_plugins\";b:1;s:15:\"install_plugins\";b:1;s:13:\"update_themes\";b:1;s:14:\"install_themes\";b:1;s:11:\"update_core\";b:1;s:10:\"list_users\";b:1;s:12:\"remove_users\";b:1;s:9:\"add_users\";b:1;s:13:\"promote_users\";b:1;s:18:\"edit_theme_options\";b:1;s:13:\"delete_themes\";b:1;s:6:\"export\";b:1;}}s:6:\"editor\";a:2:{s:4:\"name\";s:6:\"Editor\";s:12:\"capabilities\";a:34:{s:17:\"moderate_comments\";b:1;s:17:\"manage_categories\";b:1;s:12:\"manage_links\";b:1;s:12:\"upload_files\";b:1;s:15:\"unfiltered_html\";b:1;s:10:\"edit_posts\";b:1;s:17:\"edit_others_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:10:\"edit_pages\";b:1;s:4:\"read\";b:1;s:7:\"level_7\";b:1;s:7:\"level_6\";b:1;s:7:\"level_5\";b:1;s:7:\"level_4\";b:1;s:7:\"level_3\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:17:\"edit_others_pages\";b:1;s:20:\"edit_published_pages\";b:1;s:13:\"publish_pages\";b:1;s:12:\"delete_pages\";b:1;s:19:\"delete_others_pages\";b:1;s:22:\"delete_published_pages\";b:1;s:12:\"delete_posts\";b:1;s:19:\"delete_others_posts\";b:1;s:22:\"delete_published_posts\";b:1;s:20:\"delete_private_posts\";b:1;s:18:\"edit_private_posts\";b:1;s:18:\"read_private_posts\";b:1;s:20:\"delete_private_pages\";b:1;s:18:\"edit_private_pages\";b:1;s:18:\"read_private_pages\";b:1;}}s:6:\"author\";a:2:{s:4:\"name\";s:6:\"Author\";s:12:\"capabilities\";a:10:{s:12:\"upload_files\";b:1;s:10:\"edit_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:4:\"read\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:12:\"delete_posts\";b:1;s:22:\"delete_published_posts\";b:1;}}s:11:\"contributor\";a:2:{s:4:\"name\";s:11:\"Contributor\";s:12:\"capabilities\";a:5:{s:10:\"edit_posts\";b:1;s:4:\"read\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:12:\"delete_posts\";b:1;}}s:10:\"subscriber\";a:2:{s:4:\"name\";s:10:\"Subscriber\";s:12:\"capabilities\";a:2:{s:4:\"read\";b:1;s:7:\"level_0\";b:1;}}}','yes');
INSERT INTO `wp_options` VALUES (98,'widget_search','a:2:{i:2;a:1:{s:5:\"title\";s:0:\"\";}s:12:\"_multiwidget\";i:1;}','yes');
INSERT INTO `wp_options` VALUES (99,'widget_recent-posts','a:2:{i:2;a:2:{s:5:\"title\";s:0:\"\";s:6:\"number\";i:5;}s:12:\"_multiwidget\";i:1;}','yes');
INSERT INTO `wp_options` VALUES (100,'widget_recent-comments','a:2:{i:2;a:2:{s:5:\"title\";s:0:\"\";s:6:\"number\";i:5;}s:12:\"_multiwidget\";i:1;}','yes');
INSERT INTO `wp_options` VALUES (101,'widget_archives','a:2:{i:2;a:3:{s:5:\"title\";s:0:\"\";s:5:\"count\";i:0;s:8:\"dropdown\";i:0;}s:12:\"_multiwidget\";i:1;}','yes');
INSERT INTO `wp_options` VALUES (102,'widget_meta','a:2:{i:2;a:1:{s:5:\"title\";s:0:\"\";}s:12:\"_multiwidget\";i:1;}','yes');
INSERT INTO `wp_options` VALUES (103,'sidebars_widgets','a:7:{s:19:\"wp_inactive_widgets\";a:0:{}s:9:\"sidebar-1\";a:6:{i:0;s:8:\"search-2\";i:1;s:14:\"recent-posts-2\";i:2;s:17:\"recent-comments-2\";i:3;s:10:\"archives-2\";i:4;s:12:\"categories-2\";i:5;s:6:\"meta-2\";}s:9:\"sidebar-2\";a:0:{}s:9:\"sidebar-3\";a:0:{}s:9:\"sidebar-4\";a:0:{}s:9:\"sidebar-5\";a:0:{}s:13:\"array_version\";i:3;}','yes');
INSERT INTO `wp_options` VALUES (105,'db_upgraded','','yes');
INSERT INTO `wp_options` VALUES (111,'link_manager_enabled','1','yes');
INSERT INTO `wp_options` VALUES (112,'can_compress_scripts','0','yes');
INSERT INTO `wp_options` VALUES (115,'theme_mods_twentyeleven','a:1:{s:16:\"sidebars_widgets\";a:2:{s:4:\"time\";i:1355339202;s:4:\"data\";a:6:{s:19:\"wp_inactive_widgets\";a:0:{}s:9:\"sidebar-1\";a:6:{i:0;s:8:\"search-2\";i:1;s:14:\"recent-posts-2\";i:2;s:17:\"recent-comments-2\";i:3;s:10:\"archives-2\";i:4;s:12:\"categories-2\";i:5;s:6:\"meta-2\";}s:9:\"sidebar-2\";a:0:{}s:9:\"sidebar-3\";a:0:{}s:9:\"sidebar-4\";a:0:{}s:9:\"sidebar-5\";a:0:{}}}}','yes');
INSERT INTO `wp_options` VALUES (116,'current_theme','Twenty Twelve','yes');
INSERT INTO `wp_options` VALUES (117,'theme_mods_twentytwelve','a:1:{i:0;b:0;}','yes');
INSERT INTO `wp_options` VALUES (118,'theme_switched','','yes');
INSERT INTO `wp_options` VALUES (120,'cron','a:4:{i:1355487093;a:2:{s:16:\"wp_version_check\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}s:17:\"wp_update_plugins\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1355487094;a:1:{s:16:\"wp_update_themes\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1355530419;a:1:{s:19:\"wp_scheduled_delete\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}s:7:\"version\";i:2;}','yes');
INSERT INTO `wp_options` VALUES (122,'_site_transient_update_core','O:8:\"stdClass\":3:{s:7:\"updates\";a:1:{i:0;O:8:\"stdClass\":9:{s:8:\"response\";s:6:\"latest\";s:8:\"download\";s:38:\"http://wordpress.org/wordpress-3.5.zip\";s:6:\"locale\";s:5:\"en_US\";s:8:\"packages\";O:8:\"stdClass\":4:{s:4:\"full\";s:38:\"http://wordpress.org/wordpress-3.5.zip\";s:10:\"no_content\";s:49:\"http://wordpress.org/wordpress-3.5-no-content.zip\";s:11:\"new_bundled\";s:50:\"http://wordpress.org/wordpress-3.5-new-bundled.zip\";s:7:\"partial\";b:0;}s:7:\"current\";s:3:\"3.5\";s:11:\"php_version\";s:5:\"5.2.4\";s:13:\"mysql_version\";s:3:\"5.0\";s:11:\"new_bundled\";s:3:\"3.5\";s:15:\"partial_version\";s:0:\"\";}}s:12:\"last_checked\";i:1355445374;s:15:\"version_checked\";s:3:\"3.5\";}','yes');
INSERT INTO `wp_options` VALUES (123,'_site_transient_update_plugins','O:8:\"stdClass\":2:{s:12:\"last_checked\";i:1355445374;s:8:\"response\";a:1:{s:19:\"akismet/akismet.php\";O:8:\"stdClass\":5:{s:2:\"id\";s:2:\"15\";s:4:\"slug\";s:7:\"akismet\";s:11:\"new_version\";s:5:\"2.5.7\";s:3:\"url\";s:44:\"http://wordpress.org/extend/plugins/akismet/\";s:7:\"package\";s:55:\"http://downloads.wordpress.org/plugin/akismet.2.5.7.zip\";}}}','yes');
INSERT INTO `wp_options` VALUES (126,'_site_transient_update_themes','O:8:\"stdClass\":3:{s:12:\"last_checked\";i:1355445374;s:7:\"checked\";a:2:{s:12:\"twentyeleven\";s:3:\"1.5\";s:12:\"twentytwelve\";s:3:\"1.1\";}s:8:\"response\";a:0:{}}','yes');
INSERT INTO `wp_options` VALUES (128,'limit_login_retries','a:1:{s:15:\"199.223.125.134\";i:1;}','no');
INSERT INTO `wp_options` VALUES (129,'limit_login_retries_valid','a:1:{s:15:\"199.223.125.134\";i:1355400802;}','no');
INSERT INTO `wp_options` VALUES (130,'_site_transient_timeout_browser_e58bd835efa60adfb2ab805e92094244','1355962419','yes');
INSERT INTO `wp_options` VALUES (131,'_site_transient_browser_e58bd835efa60adfb2ab805e92094244','a:9:{s:8:\"platform\";s:9:\"Macintosh\";s:4:\"name\";s:6:\"Chrome\";s:7:\"version\";s:12:\"23.0.1271.97\";s:10:\"update_url\";s:28:\"http://www.google.com/chrome\";s:7:\"img_src\";s:49:\"http://s.wordpress.org/images/browsers/chrome.png\";s:11:\"img_src_ssl\";s:48:\"https://wordpress.org/images/browsers/chrome.png\";s:15:\"current_version\";s:2:\"18\";s:7:\"upgrade\";b:0;s:8:\"insecure\";b:0;}','yes');
INSERT INTO `wp_options` VALUES (132,'dashboard_widget_options','a:4:{s:25:\"dashboard_recent_comments\";a:1:{s:5:\"items\";i:5;}s:24:\"dashboard_incoming_links\";a:5:{s:4:\"home\";s:34:\"http://collectiveagen.wpengine.com\";s:4:\"link\";s:110:\"http://blogsearch.google.com/blogsearch?scoring=d&partner=wordpress&q=link:http://collectiveagen.wpengine.com/\";s:3:\"url\";s:143:\"http://blogsearch.google.com/blogsearch_feeds?scoring=d&ie=utf-8&num=10&output=rss&partner=wordpress&q=link:http://collectiveagen.wpengine.com/\";s:5:\"items\";i:10;s:9:\"show_date\";b:0;}s:17:\"dashboard_primary\";a:7:{s:4:\"link\";s:26:\"http://wordpress.org/news/\";s:3:\"url\";s:31:\"http://wordpress.org/news/feed/\";s:5:\"title\";s:14:\"WordPress Blog\";s:5:\"items\";i:2;s:12:\"show_summary\";i:1;s:11:\"show_author\";i:0;s:9:\"show_date\";i:1;}s:19:\"dashboard_secondary\";a:7:{s:4:\"link\";s:28:\"http://planet.wordpress.org/\";s:3:\"url\";s:33:\"http://planet.wordpress.org/feed/\";s:5:\"title\";s:20:\"Other WordPress News\";s:5:\"items\";i:5;s:12:\"show_summary\";i:0;s:11:\"show_author\";i:0;s:9:\"show_date\";i:0;}}','yes');
INSERT INTO `wp_options` VALUES (133,'wpe_notices','a:2:{s:4:\"read\";s:0:\"\";s:8:\"messages\";a:0:{}}','yes');
INSERT INTO `wp_options` VALUES (134,'wpe_notices_ttl','1355361220','yes');
INSERT INTO `wp_options` VALUES (172,'_site_transient_timeout_theme_roots','1355447174','yes');
INSERT INTO `wp_options` VALUES (173,'_site_transient_theme_roots','a:2:{s:12:\"twentyeleven\";s:7:\"/themes\";s:12:\"twentytwelve\";s:7:\"/themes\";}','yes');
/*!40000 ALTER TABLE `wp_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wp_postmeta`
--

DROP TABLE IF EXISTS `wp_postmeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_postmeta` (
  `meta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `meta_key` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`meta_id`),
  KEY `post_id` (`post_id`),
  KEY `meta_key` (`meta_key`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_postmeta`
--

LOCK TABLES `wp_postmeta` WRITE;
/*!40000 ALTER TABLE `wp_postmeta` DISABLE KEYS */;
INSERT INTO `wp_postmeta` VALUES (1,2,'_wp_page_template','default');
/*!40000 ALTER TABLE `wp_postmeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wp_posts`
--

DROP TABLE IF EXISTS `wp_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_posts` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `post_author` bigint(20) unsigned NOT NULL DEFAULT '0',
  `post_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content` longtext COLLATE utf8_unicode_ci NOT NULL,
  `post_title` text COLLATE utf8_unicode_ci NOT NULL,
  `post_excerpt` text COLLATE utf8_unicode_ci NOT NULL,
  `post_status` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'publish',
  `comment_status` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'open',
  `ping_status` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'open',
  `post_password` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `post_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `to_ping` text COLLATE utf8_unicode_ci NOT NULL,
  `pinged` text COLLATE utf8_unicode_ci NOT NULL,
  `post_modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_modified_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content_filtered` longtext COLLATE utf8_unicode_ci NOT NULL,
  `post_parent` bigint(20) unsigned NOT NULL DEFAULT '0',
  `guid` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `menu_order` int(11) NOT NULL DEFAULT '0',
  `post_type` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'post',
  `post_mime_type` varchar(100) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `comment_count` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `post_name` (`post_name`),
  KEY `type_status_date` (`post_type`,`post_status`,`post_date`,`ID`),
  KEY `post_parent` (`post_parent`),
  KEY `post_author` (`post_author`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_posts`
--

LOCK TABLES `wp_posts` WRITE;
/*!40000 ALTER TABLE `wp_posts` DISABLE KEYS */;
INSERT INTO `wp_posts` VALUES (1,1,'2012-06-14 14:46:14','2012-06-14 14:46:14','Welcome to WordPress. This is your first post. Edit or delete it, then start blogging!','Hello world!','','publish','open','open','','hello-world','','','2012-06-14 14:46:14','2012-06-14 14:46:14','',0,'http://collectiveagen.wpengine.com/?p=1',0,'post','',1);
INSERT INTO `wp_posts` VALUES (2,1,'2012-06-14 14:46:14','2012-06-14 14:46:14','This is an example page. It\'s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this:\n\n<blockquote>Hi there! I\'m a bike messenger by day, aspiring actor by night, and this is my blog. I live in Los Angeles, have a great dog named Jack, and I like pi&#241;a coladas. (And gettin\' caught in the rain.)</blockquote>\n\n...or something like this:\n\n<blockquote>The XYZ Doohickey Company was founded in 1971, and has been providing quality doohickies to the public ever since. Located in Gotham City, XYZ employs over 2,000 people and does all kinds of awesome things for the Gotham community.</blockquote>\n\nAs a new WordPress user, you should go to <a href=\"http://collectiveagen.wpengine.com/wp-admin/\">your dashboard</a> to delete this page and create new pages for your content. Have fun!','Sample Page','','publish','open','open','','sample-page','','','2012-06-14 14:46:14','2012-06-14 14:46:14','',0,'http://collectiveagen.wpengine.com/?page_id=2',0,'page','',0);
INSERT INTO `wp_posts` VALUES (4,2,'2012-12-13 00:13:40','0000-00-00 00:00:00','','Auto Draft','','auto-draft','open','open','','','','','2012-12-13 00:13:40','0000-00-00 00:00:00','',0,'http://collectiveagen.wpengine.com/?p=4',0,'post','',0);
/*!40000 ALTER TABLE `wp_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wp_term_relationships`
--

DROP TABLE IF EXISTS `wp_term_relationships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_term_relationships` (
  `object_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `term_taxonomy_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `term_order` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`object_id`,`term_taxonomy_id`),
  KEY `term_taxonomy_id` (`term_taxonomy_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_term_relationships`
--

LOCK TABLES `wp_term_relationships` WRITE;
/*!40000 ALTER TABLE `wp_term_relationships` DISABLE KEYS */;
INSERT INTO `wp_term_relationships` VALUES (1,2,0);
INSERT INTO `wp_term_relationships` VALUES (2,2,0);
INSERT INTO `wp_term_relationships` VALUES (3,2,0);
INSERT INTO `wp_term_relationships` VALUES (4,2,0);
INSERT INTO `wp_term_relationships` VALUES (5,2,0);
INSERT INTO `wp_term_relationships` VALUES (6,2,0);
INSERT INTO `wp_term_relationships` VALUES (7,2,0);
INSERT INTO `wp_term_relationships` VALUES (1,1,0);
/*!40000 ALTER TABLE `wp_term_relationships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wp_term_taxonomy`
--

DROP TABLE IF EXISTS `wp_term_taxonomy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_term_taxonomy` (
  `term_taxonomy_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `term_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `taxonomy` varchar(32) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `parent` bigint(20) unsigned NOT NULL DEFAULT '0',
  `count` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`term_taxonomy_id`),
  UNIQUE KEY `term_id_taxonomy` (`term_id`,`taxonomy`),
  KEY `taxonomy` (`taxonomy`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_term_taxonomy`
--

LOCK TABLES `wp_term_taxonomy` WRITE;
/*!40000 ALTER TABLE `wp_term_taxonomy` DISABLE KEYS */;
INSERT INTO `wp_term_taxonomy` VALUES (1,1,'category','',0,1);
INSERT INTO `wp_term_taxonomy` VALUES (2,2,'link_category','',0,7);
/*!40000 ALTER TABLE `wp_term_taxonomy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wp_terms`
--

DROP TABLE IF EXISTS `wp_terms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_terms` (
  `term_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `slug` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `term_group` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`term_id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_terms`
--

LOCK TABLES `wp_terms` WRITE;
/*!40000 ALTER TABLE `wp_terms` DISABLE KEYS */;
INSERT INTO `wp_terms` VALUES (1,'Uncategorized','uncategorized',0);
INSERT INTO `wp_terms` VALUES (2,'Blogroll','blogroll',0);
/*!40000 ALTER TABLE `wp_terms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wp_usermeta`
--

DROP TABLE IF EXISTS `wp_usermeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_usermeta` (
  `umeta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `meta_key` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`umeta_id`),
  KEY `user_id` (`user_id`),
  KEY `meta_key` (`meta_key`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_usermeta`
--

LOCK TABLES `wp_usermeta` WRITE;
/*!40000 ALTER TABLE `wp_usermeta` DISABLE KEYS */;
INSERT INTO `wp_usermeta` VALUES (1,1,'first_name','');
INSERT INTO `wp_usermeta` VALUES (2,1,'last_name','');
INSERT INTO `wp_usermeta` VALUES (3,1,'nickname','wpengine');
INSERT INTO `wp_usermeta` VALUES (4,1,'description','');
INSERT INTO `wp_usermeta` VALUES (5,1,'rich_editing','true');
INSERT INTO `wp_usermeta` VALUES (6,1,'comment_shortcuts','false');
INSERT INTO `wp_usermeta` VALUES (7,1,'admin_color','fresh');
INSERT INTO `wp_usermeta` VALUES (8,1,'use_ssl','0');
INSERT INTO `wp_usermeta` VALUES (9,1,'show_admin_bar_front','true');
INSERT INTO `wp_usermeta` VALUES (10,1,'wp_capabilities','a:1:{s:13:\"administrator\";s:1:\"1\";}');
INSERT INTO `wp_usermeta` VALUES (11,1,'wp_user_level','10');
INSERT INTO `wp_usermeta` VALUES (12,1,'dismissed_wp_pointers','wp330_toolbar,wp330_media_uploader,wp330_saving_widgets,wp340_choose_image_from_library,wp340_customize_current_theme_link');
INSERT INTO `wp_usermeta` VALUES (13,1,'show_welcome_panel','1');
INSERT INTO `wp_usermeta` VALUES (14,1,'aim','');
INSERT INTO `wp_usermeta` VALUES (15,1,'yim','');
INSERT INTO `wp_usermeta` VALUES (16,1,'jabber','');
INSERT INTO `wp_usermeta` VALUES (28,1,'wp_dashboard_quick_press_last_post_id','3');
INSERT INTO `wp_usermeta` VALUES (29,2,'first_name','');
INSERT INTO `wp_usermeta` VALUES (30,2,'last_name','');
INSERT INTO `wp_usermeta` VALUES (31,2,'nickname','collectiveagen');
INSERT INTO `wp_usermeta` VALUES (32,2,'description','');
INSERT INTO `wp_usermeta` VALUES (33,2,'rich_editing','true');
INSERT INTO `wp_usermeta` VALUES (34,2,'comment_shortcuts','false');
INSERT INTO `wp_usermeta` VALUES (35,2,'admin_color','fresh');
INSERT INTO `wp_usermeta` VALUES (36,2,'use_ssl','0');
INSERT INTO `wp_usermeta` VALUES (37,2,'show_admin_bar_front','true');
INSERT INTO `wp_usermeta` VALUES (38,2,'wp_capabilities','a:1:{s:13:\"administrator\";b:1;}');
INSERT INTO `wp_usermeta` VALUES (39,2,'wp_user_level','10');
INSERT INTO `wp_usermeta` VALUES (40,2,'wp_dashboard_quick_press_last_post_id','4');
INSERT INTO `wp_usermeta` VALUES (41,2,'dismissed_wp_pointers','wp330_toolbar');
/*!40000 ALTER TABLE `wp_usermeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wp_users`
--

DROP TABLE IF EXISTS `wp_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wp_users` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_login` varchar(60) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `user_pass` varchar(64) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `user_nicename` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `user_email` varchar(100) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `user_url` varchar(100) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_activation_key` varchar(60) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `user_status` int(11) NOT NULL DEFAULT '0',
  `display_name` varchar(250) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`ID`),
  KEY `user_login_key` (`user_login`),
  KEY `user_nicename` (`user_nicename`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_users`
--

LOCK TABLES `wp_users` WRITE;
/*!40000 ALTER TABLE `wp_users` DISABLE KEYS */;
INSERT INTO `wp_users` VALUES (1,'wpengine','$P$BF6GpL0IX0/he95quGhlMHzUwA1dx91','wpengine','bitbucket@wpengine.com','http://wpengine.com','2012-06-14 14:46:14','',0,'wpengine');
INSERT INTO `wp_users` VALUES (2,'collectiveagen','$P$B0JGcFqPIE0a5tuTDfWN.ukJjr5Wku.','collectiveagen','fitzryland@gmail.com','http://collectiveagen.wpengine.com','2012-12-13 00:08:05','',0,'collectiveagen');
/*!40000 ALTER TABLE `wp_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-12-14  5:07:14
