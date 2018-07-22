-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 18-03-31 11:54
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
-- 테이블 구조 `file`
--

CREATE TABLE `file` (
  `idx` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `change_name` varchar(255) NOT NULL,
  `midx` int(11) NOT NULL,
  `parent` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `m_date` date NOT NULL,
  `c_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `file`
--

INSERT INTO `file` (`idx`, `name`, `change_name`, `midx`, `parent`, `size`, `type`, `m_date`, `c_date`) VALUES
(1, '메인', '', 1, 0, 0, 'folder', '2018-03-31', '2018-03-31');

-- --------------------------------------------------------

--
-- 테이블 구조 `in_list`
--

CREATE TABLE `in_list` (
  `idx` int(11) NOT NULL,
  `fidx` int(11) NOT NULL,
  `midx` int(11) NOT NULL,
  `s_date` date NOT NULL,
  `down` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 테이블 구조 `member`
--

CREATE TABLE `member` (
  `idx` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `pw` varchar(255) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `member`
--

INSERT INTO `member` (`idx`, `name`, `id`, `pw`, `level`) VALUES
(1, '관리자', 'admin', 'dbe9787aaf4002c6662e490b3f1f7512807459b6dee2e1c2e56738e1cbbd993c', 10),
(2, '사용자', 'user1', '2fc577149080578c983f969a6ce84146fb79b5e17c0447d4e0718e039d62da19', 1),
(3, '사용자', 'user2', '7a9f58a002c9682fceda675a74759336805785d34c0f10ce1cee6e8315a17711', 1),
(6, '사용자', 'user3', 'd9f593bb452232b6a85b46816ee33292a4776a22c09973cbc138e4e91242c96c', 1);

-- --------------------------------------------------------

--
-- 테이블 구조 `out_list`
--

CREATE TABLE `out_list` (
  `idx` int(11) NOT NULL,
  `midx` int(11) NOT NULL,
  `fidx` int(11) NOT NULL,
  `s_date` date NOT NULL,
  `down` int(11) NOT NULL,
  `ukey` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `file`
--
ALTER TABLE `file`
  ADD PRIMARY KEY (`idx`);

--
-- 테이블의 인덱스 `in_list`
--
ALTER TABLE `in_list`
  ADD PRIMARY KEY (`idx`);

--
-- 테이블의 인덱스 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`idx`);

--
-- 테이블의 인덱스 `out_list`
--
ALTER TABLE `out_list`
  ADD PRIMARY KEY (`idx`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `file`
--
ALTER TABLE `file`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 테이블의 AUTO_INCREMENT `in_list`
--
ALTER TABLE `in_list`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT;
--
-- 테이블의 AUTO_INCREMENT `member`
--
ALTER TABLE `member`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- 테이블의 AUTO_INCREMENT `out_list`
--
ALTER TABLE `out_list`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
