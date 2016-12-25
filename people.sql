-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Дек 21 2016 г., 03:10
-- Версия сервера: 5.7.13-log
-- Версия PHP: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `people`
--

-- --------------------------------------------------------

--
-- Структура таблицы `about`
--

CREATE TABLE IF NOT EXISTS `about` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `about`
--

INSERT INTO `about` (`id`, `first_name`, `last_name`, `email`) VALUES
(1, 'Иван ', 'Петров', 'ivanpetrov@ukr.net'),
(2, 'Петр', 'Сидоров', 'petrsidorov@mail.ru'),
(3, 'sdd', 'dsd', 'dsds'),
(4, 'sdfsdf', 'sfdfsdf', 'fsdfs@fsdf.ri'),
(5, 'sdfsdf', 'sfdfsdf', 'fsdfs@fsdf.ri'),
(6, 'sdfsdf', 'sfdfsdf', 'fsdfs@fsdf.ri'),
(7, 'sdfsdf', 'sfdfsdf', 'fsdfs@fsdf.ri'),
(8, 'sdfsdf', 'sfdfsdf', 'fsdfs@fsdf.ri'),
(9, 'sdfsdf', 'sfdfsdf', 'fsdfs@fsdf.ri'),
(10, 'sdfsdf', 'sfdfsdf', 'fsdfs@fsdf.ri'),
(11, '3423423', '23434', '234234'),
(12, '4234', '23423', '2'),
(13, 'asds', 'sdasd', 'asdasd');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_2` (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
