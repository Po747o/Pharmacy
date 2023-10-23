-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23/10/2023 às 16:43
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `techpharma`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cliente`
--

CREATE TABLE `cliente` (
  `id_cli` int auto_increment NOT NULL,
  `nome_cli` varchar(100) DEFAULT NULL,
  `data_nasc_cli` date DEFAULT NULL,
  `cpf_cli` varchar(15) DEFAULT NULL,
  `celular_cli` varchar(15) DEFAULT NULL,
  `cep_cli` varchar(30) DEFAULT NULL,
  `email_cli` varchar(100) DEFAULT NULL,
  `sexo_cli` varchar(15) DEFAULT NULL,
  `rg_cli` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `cliente` (`id_cli`, `nome_cli`, `data_nasc_cli`, `cpf_cli`, `celular_cli`, `cep_cli`, `email_cli`, `sexo_cli`, `rg_cli`) VALUES
(null, 'Vinicius Nano', '2004-06-23', '033.684.742-43', '69 99246-4915', '76912665', 'vinidenanoholanda@gmail.com', 'Intersexo', 1653019);



CREATE TABLE `endereco` (
  `ende_id` int auto_increment NOT NULL,
  `ende_estado` varchar(200) DEFAULT NULL,
  `ende_cidade` varchar(50) DEFAULT NULL,
  `ende_bairro` varchar(50) DEFAULT NULL,
  `ende_rua` varchar(50) DEFAULT NULL,
  `ende_numero` int(11) DEFAULT NULL,
  `ende_complemento` varchar(200) DEFAULT NULL,
  `ende_cep` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `endereco` (`ende_id`, `ende_estado`, `ende_cidade`, `ende_bairro`, `ende_rua`, `ende_numero`, `ende_complemento`, `ende_cep`) VALUES
(null, 'Rondonia', 'distrito de medici', 'primavera', 'rondon', 3423, 'casa', '234141-13'),
(null, 'Rondonia', 'distrito de medici', 'nova brasilia', 'rondon', 3423, 'casa', '234141-13');



CREATE TABLE `funcionario` (
  `id_fun` int auto_increment NOT NULL,
  `nome_fun` varchar(100) DEFAULT NULL,
  `cpf_fun` varchar(15) DEFAULT NULL,
  `rg_fun` int(11) DEFAULT NULL,
  `data_nasc_fun` date DEFAULT NULL,
  `sexo_fun` varchar(15) DEFAULT NULL,
  `celular_fun` varchar(15) DEFAULT NULL,
  `funcao_fun` varchar(100) DEFAULT NULL,
  `salario_fun` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `login`
--

CREATE TABLE `login` (
  `id_log` int auto_increment NOT NULL,
  `usuario_log` varchar(100) DEFAULT NULL,
  `senha_log` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `login` (`id_log`, `usuario_log`, `senha_log`) VALUES
(null, 'Ethan', 'abacaxi2020');
(null, 'Nano', 'boiolinha123');

-- --------------------------------------------------------

--

CREATE TABLE `produto` (
  `id_pro` int auto_increment NOT NULL,
  `nome_pro` varchar(100) DEFAULT NULL,
  `tipo_pro` varchar(100) DEFAULT NULL,
  `peso_volume_pro` varchar(100) DEFAULT NULL,
  `codigo_barra_pro` varchar(100) DEFAULT NULL,
  `fornecedor_pro` varchar(300) DEFAULT NULL,
  `estoque_pro` int(11) DEFAULT NULL,
  `valor_compra_pro` double DEFAULT NULL,
  `valor_venda_pro` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



CREATE TABLE `servico` (
  `id_ser` int auto_increment NOT NULL,
  `nome_ser` varchar(100) DEFAULT NULL,
  `fabricante` varchar(100) DEFAULT NULL,
  `duracao_ser` time DEFAULT NULL,
  `valor_venda_ser` double DEFAULT NULL,
  `tipo_ser` varchar(100) DEFAULT NULL,
  `local_ser` varchar(100) DEFAULT NULL,
  `profissional_ser` varchar(200) DEFAULT NULL,
  `quant_ser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
