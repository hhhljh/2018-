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
  `name` varchar(100) NOT NULL,
  `change_name` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `size` int(11) NOT NULL,
  `parent` int(11) NOT NULL,
  `midx` int(11) NOT NULL,
  `date` date NOT NULL,
  `change_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `files`
--

INSERT INTO `files` (`idx`, `name`, `change_name`, `type`, `size`, `parent`, `midx`, `date`, `change_date`) VALUES
(1, 'ㅁㅁㅁㅁㅁ', '', '폴더', 0, 0, 1, '2018-04-01', '2018-04-01'),
(9, '테스트', '', '폴더', 0, 0, 1, '2018-04-01', '2018-04-01'),
(10, 'ㅎㅎㅎ', '', '폴더', 0, 0, 1, '2018-04-01', '2018-04-01'),
(11, 'ㄱㄱ', '', '폴더', 0, 0, 1, '2018-04-01', '2018-04-01'),
(12, 'ㄹㄹㄹㄹ', '', '폴더', 0, 10, 1, '2018-04-01', '2018-04-01'),
(13, '7.jpg', '152257077926527.jpg', '파일', 102231, 11, 1, '2018-04-01', '2018-04-01'),
(21, 'Photoshop_13_LS16.exe', '15225754139134Photoshop_13_LS16.exe', '파일', 1228608, 0, 1, '2018-04-01', '2018-04-01');

-- --------------------------------------------------------

--
-- 테이블 구조 `infile_list`
--

CREATE TABLE `infile_list` (
  `idx` int(11) NOT NULL,
  `fidx` int(11) NOT NULL,
  `midx` int(11) NOT NULL,
  `date` date NOT NULL,
  `cnt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `infile_list`
--

INSERT INTO `infile_list` (`idx`, `fidx`, `midx`, `date`, `cnt`) VALUES
(5, 21, 1, '2018-04-01', 2);

-- --------------------------------------------------------

--
-- 테이블 구조 `member`
--

CREATE TABLE `member` (
  `idx` int(11) NOT NULL,
  `id` varchar(100) NOT NULL,
  `pw` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `member`
--

INSERT INTO `member` (`idx`, `id`, `pw`, `name`, `level`) VALUES
(1, 'admin', 'dbe9787aaf4002c6662e490b3f1f7512807459b6dee2e1c2e56738e1cbbd993c', '관리자', 10),
(2, 'user1', '2fc577149080578c983f969a6ce84146fb79b5e17c0447d4e0718e039d62da19', 'user1', 1),
(3, 'user2', '7a9f58a002c9682fceda675a74759336805785d34c0f10ce1cee6e8315a17711', 'user2', 1),
(4, 'user3', 'd9f593bb452232b6a85b46816ee33292a4776a22c09973cbc138e4e91242c96c', 'user3', 1);

-- --------------------------------------------------------

--
-- 테이블 구조 `outfile_list`
--

CREATE TABLE `outfile_list` (
  `idx` int(11) NOT NULL,
  `fidx` int(11) NOT NULL,
  `midx` int(11) NOT NULL,
  `cnt` int(11) NOT NULL,
  `date` date NOT NULL,
  `url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `outfile_list`
--

INSERT INTO `outfile_list` (`idx`, `fidx`, `midx`, `cnt`, `date`, `url`) VALUES
(4, 21, 1, 1, '2018-04-01', 'oNB5');

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
-- 테이블의 인덱스 `outfile_list`
--
ALTER TABLE `outfile_list`
  ADD PRIMARY KEY (`idx`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `files`
--
ALTER TABLE `files`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- 테이블의 AUTO_INCREMENT `infile_list`
--
ALTER TABLE `infile_list`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- 테이블의 AUTO_INCREMENT `member`
--
ALTER TABLE `member`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- 테이블의 AUTO_INCREMENT `outfile_list`
--
ALTER TABLE `outfile_list`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
