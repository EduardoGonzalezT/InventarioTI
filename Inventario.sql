-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-04-2026 a las 01:48:15
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sgeti`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `areas`
--

CREATE TABLE `areas` (
  `Id` int(11) NOT NULL,
  `Area` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `claves`
--

CREATE TABLE `claves` (
  `Id` int(11) NOT NULL,
  `Siglas` varchar(4) NOT NULL,
  `Descripcion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Codigo` varchar(50) NOT NULL,
  `Clave` int(11) NOT NULL,
  `Area` int(11) NOT NULL,
  `Sucursal` int(11) NOT NULL,
  `Status` int(11) DEFAULT NULL,
  `Descripcion` varchar(20) DEFAULT NULL,
  `Registro` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informacion_equipo`
--

CREATE TABLE `informacion_equipo` (
  `Id` int(11) NOT NULL,
  `SO` varchar(50) DEFAULT NULL,
  `Mac` varchar(50) DEFAULT NULL,
  `Ip` varchar(50) DEFAULT NULL,
  `Componentes` text NOT NULL,
  `Usuario` varchar(20) DEFAULT NULL,
  `IdEquipo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursales`
--

CREATE TABLE `sucursales` (
  `Id` int(11) NOT NULL,
  `Siglas` varchar(5) NOT NULL,
  `Descripcion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Usuario` varchar(255) NOT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Indices de la tabla `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `claves`
--
ALTER TABLE `claves`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Clave` (`Clave`),
  ADD KEY `Area` (`Area`),
  ADD KEY `Sucursal` (`Sucursal`);

--
-- Indices de la tabla `informacion_equipo`
--
ALTER TABLE `informacion_equipo`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `fk_equipo` (`IdEquipo`);

--
-- Indices de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `areas`
--
ALTER TABLE `areas`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `claves`
--
ALTER TABLE `claves`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `informacion_equipo`
--
ALTER TABLE `informacion_equipo`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD CONSTRAINT `equipos_ibfk_1` FOREIGN KEY (`Clave`) REFERENCES `claves` (`Id`),
  ADD CONSTRAINT `equipos_ibfk_2` FOREIGN KEY (`Area`) REFERENCES `areas` (`Id`),
  ADD CONSTRAINT `equipos_ibfk_3` FOREIGN KEY (`Sucursal`) REFERENCES `sucursales` (`Id`);

--
-- Filtros para la tabla `informacion_equipo`
--
ALTER TABLE `informacion_equipo`
  ADD CONSTRAINT `fk_equipo` FOREIGN KEY (`IdEquipo`) REFERENCES `equipos` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
