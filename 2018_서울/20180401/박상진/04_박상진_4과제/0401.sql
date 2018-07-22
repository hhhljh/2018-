-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 18-04-01 11:44
-- 서버 버전: 10.1.21-MariaDB
-- PHP 버전: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `0401`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `files`
--

CREATE TABLE `files` (
  `idx` int(11) NOT NULL,
  `parent` int(11) NOT NULL,
  `midx` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `size` int(11) NOT NULL DEFAULT '0',
  `com_name` varchar(100) NOT NULL,
  `create_name` varchar(100) NOT NULL,
  `change_date` datetime NOT NULL,
  `create_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `files`
--

INSERT INTO `files` (`idx`, `parent`, `midx`, `type`, `size`, `com_name`, `create_name`, `change_date`, `create_date`) VALUES
(1, 0, 1, 1, 0, '13213', '3213165', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 0, 0, 0, 0, '', '', '2018-04-01 18:04:09', '2018-04-01 18:04:09'),
(10, 0, 0, 0, 0, '', '', '2018-04-01 18:06:54', '2018-04-01 18:06:54'),
(11, 0, 0, 0, 0, '', '', '2018-04-01 18:09:23', '2018-04-01 18:09:23');

-- --------------------------------------------------------

--
-- 테이블 구조 `infile_list`
--

CREATE TABLE `infile_list` (
  `idx` int(11) NOT NULL,
  `path` int(11) NOT NULL,
  `regdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 테이블 구조 `member`
--

CREATE TABLE `member` (
  `idx` int(11) NOT NULL,
  `id` varchar(100) NOT NULL,
  `pw` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `level` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `member`
--

INSERT INTO `member` (`idx`, `id`, `pw`, `name`, `level`) VALUES
(12, 'user1', '2fc577149080578c983f969a6ce84146fb79b5e17c0447d4e0718e039d62da19', 'user1', '1'),
(13, 'admin', 'dbe9787aaf4002c6662e490b3f1f7512807459b6dee2e1c2e56738e1cbbd993c', 'admin', '10'),
(14, 'user2', '7a9f58a002c9682fceda675a74759336805785d34c0f10ce1cee6e8315a17711', 'user2', '1'),
(15, 'user3', 'd9f593bb452232b6a85b46816ee33292a4776a22c09973cbc138e4e91242c96c', 'user3', '1'),
(16, 'qqq', 'b6197fe0d62a4e463edd2925382d4d268c4fce0859378682608efa4fda326f26', 'qqq', '1');

-- --------------------------------------------------------

--
-- 테이블 구조 `outfile_list`
--

CREATE TABLE `outfile_list` (
  `idx` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `regdate` datetime NOT NULL,
  `ukey` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`idx`);

--
-- 테이블의 인덱스 `infile_list`
--
ALTER TABLE `infile_list`
  ADD PRIMARY KEY (`idx`);

--
-- 테이블의 인덱스 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`idx`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `files`
--
ALTER TABLE `files`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- 테이블의 AUTO_INCREMENT `infile_list`
--
ALTER TABLE `infile_list`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT;
--
-- 테이블의 AUTO_INCREMENT `member`
--
ALTER TABLE `member`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
