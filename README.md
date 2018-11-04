# Projekt DT173G


**Command Prompt**.
Mitt projekt finns att klona från följande adress <https://github.com/Tiia-Mai/projekt.git> Den innehåller "package.json" fil vilket gör att igenom "npm install" installeras alla filer/paket som behövs för att använda mitt projekt. Kommandot "gulp" startar alla automatiseringsprocesser.

Databasen som används installeras enligt följande:
-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- VÃ¤rd: 127.0.0.1
-- Tid vid skapande: 04 nov 2018 kl 08:34
-- Serverversion: 10.1.30-MariaDB
-- PHP-version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `weatherrest`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `posts`
--

CREATE TABLE `posts` (
  `ID` int(11) NOT NULL,
  `city` varchar(50) NOT NULL,
  `info` varchar(50) NOT NULL,
  `temp` varchar(50) NOT NULL,
  `postdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `posts`
--

INSERT INTO `posts` (`ID`, `city`, `info`, `temp`, `postdate`) VALUES
(196, 'TrollhÃƒÂ¤ttan', 'moln', '+10', '2018-11-04 06:35:35'),
(197, 'Stockholm', 'regn', '+9', '2018-11-04 06:41:11'),
(198, 'Stockholm', 'vind', '+8', '2018-11-04 06:41:27'),
(199, 'Stockholm', 'moln', '+7', '2018-11-04 06:41:54'),
(200, 'Stockholm', 'regn', '+6', '2018-11-04 06:42:05'),
(201, 'TrollhÃƒÂ¤ttan', 'sol', '+6', '2018-11-04 06:42:41'),
(202, 'TrollhÃƒÂ¤ttan', 'sol', '+8', '2018-11-04 06:43:10'),
(203, 'TrollhÃƒÂ¤ttan', 'moln', '+8', '2018-11-04 06:43:32'),
(204, 'GÃƒÂ¶teborg', 'regn', '+7', '2018-11-04 06:44:02'),
(205, 'GÃƒÂ¶teborg', 'moln', '+6', '2018-11-04 06:44:19'),
(206, 'Helsingborg', 'sol', '+12', '2018-11-04 06:44:52'),
(207, 'LuleÃƒÂ¥', 'snÃƒÂ¶', '0', '2018-11-04 06:45:32'),
(208, 'LuleÃƒÂ¥', 'snÃƒÂ¶', '-1', '2018-11-04 06:46:02'),
(209, 'VÃƒÂ¤sterÃƒÂ¥s', 'sol', '+5', '2018-11-04 07:12:36'),
(210, 'VÃƒÂ¤sterÃƒÂ¥s', 'moln', '+6', '2018-11-04 07:12:52'),
(211, 'Sundsvall', 'vind', '+4', '2018-11-04 07:13:27');

--
-- Index fÃ¶r dumpade tabeller
--

--
-- Index fÃ¶r tabell `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT fÃ¶r dumpade tabeller
--

--
-- AUTO_INCREMENT fÃ¶r tabell `posts`
--
ALTER TABLE `posts`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=212;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
