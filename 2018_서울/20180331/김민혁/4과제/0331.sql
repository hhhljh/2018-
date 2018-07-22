-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 18-03-31 11:49
-- 서버 버전: 10.1.21-MariaDB
-- PHP 버전: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `0331`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `files`
--

CREATE TABLE `files` (
  `idx` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `change_name` varchar(100) NOT NULL,
  `size` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `create_date` date NOT NULL,
  `change_date` date NOT NULL,
  `midx` int(11) NOT NULL,
  `parent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `files`
--

INSERT INTO `files` (`idx`, `name`, `change_name`, `size`, `type`, `create_date`, `change_date`, `midx`, `parent`) VALUES
(11, '수정Photoshop_13_LS16.exe', '15224875159031Photoshop_13_LS16.exe', 1228608, '파일', '2018-03-31', '2018-03-31', 2, 0),
(12, '1.jpg', '152248837437751.jpg', 97345, '파일', '2018-03-31', '2018-03-31', 2, 0);

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
(1, 11, 2, '2018-03-31', 0),
(2, 12, 2, '2018-03-31', 0);

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
(2, 'admin', 'dbe9787aaf4002c6662e490b3f1f7512807459b6dee2e1c2e56738e1cbbd993c', '관리자', 10),
(3, 'user1', '2fc577149080578c983f969a6ce84146fb79b5e17c0447d4e0718e039d62da19', 'user1', 1),
(4, 'user2', '7a9f58a002c9682fceda675a74759336805785d34c0f10ce1cee6e8315a17711', 'user2', 1),
(5, 'user3', 'd9f593bb452232b6a85b46816ee33292a4776a22c09973cbc138e4e91242c96c', 'user3', 1);

-- --------------------------------------------------------

--
-- 테이블 구조 `outfile_list`
--

CREATE TABLE `outfile_list` (
  `idx` int(11) NOT NULL,
  `fidx` int(11) NOT NULL,
  `midx` int(11) NOT NULL,
  `date` date NOT NULL,
  `url` varchar(255) NOT NULL,
  `cnt` int(11) NOT NULL
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
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- 테이블의 AUTO_INCREMENT `infile_list`
--
ALTER TABLE `infile_list`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- 테이블의 AUTO_INCREMENT `member`
--
ALTER TABLE `member`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- 테이블의 AUTO_INCREMENT `outfile_list`
--
ALTER TABLE `outfile_list`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
