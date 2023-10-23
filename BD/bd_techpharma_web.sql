-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05/09/2023 às 05:35
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
-- Banco de dados: `bd_techpharma_web`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cliente`
--

CREATE TABLE `cliente` (
  `id_cli` int(11) NOT NULL,
  `nome_cli` varchar(100) DEFAULT NULL,
  `data_nasc_cli` date DEFAULT NULL,
  `cpf_cli` varchar(15) DEFAULT NULL,
  `celular_cli` varchar(15) DEFAULT NULL,
  `cep_cli` varchar(30) DEFAULT NULL,
  `email_cli` varchar(100) DEFAULT NULL,
  `sexo_cli` varchar(15) DEFAULT NULL,
  `rg_cli` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cliente`
--

INSERT INTO `cliente` (`id_cli`, `nome_cli`, `data_nasc_cli`, `cpf_cli`, `celular_cli`, `cep_cli`, `email_cli`, `sexo_cli`, `rg_cli`) VALUES
(1, 'Vinicius Nano', '2004-06-23', '033.684.742-43', '69 99246-4915', '76912665', 'vinidenanoholanda@gmail.com', 'Intersexo', 1653019);

-- --------------------------------------------------------

--
-- Estrutura para tabela `endereco`
--

CREATE TABLE `endereco` (
  `ende_id` int(11) NOT NULL,
  `ende_estado` varchar(200) DEFAULT NULL,
  `ende_cidade` varchar(50) DEFAULT NULL,
  `ende_bairro` varchar(50) DEFAULT NULL,
  `ende_rua` varchar(50) DEFAULT NULL,
  `ende_numero` int(11) DEFAULT NULL,
  `ende_complemento` varchar(200) DEFAULT NULL,
  `ende_cep` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `endereco`
--

INSERT INTO `endereco` (`ende_id`, `ende_estado`, `ende_cidade`, `ende_bairro`, `ende_rua`, `ende_numero`, `ende_complemento`, `ende_cep`) VALUES
(1, 'Rondonia', 'distrito de medici', 'primavera', 'rondon', 3423, 'casa', '234141-13'),
(2, 'Rondonia', 'distrito de medici', 'nova brasilia', 'rondon', 3423, 'casa', '234141-13');

-- --------------------------------------------------------

--
-- Estrutura para tabela `funcionario`
--

CREATE TABLE `funcionario` (
  `id_fun` int(11) NOT NULL,
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
-- Estrutura para tabela `produto`
--

CREATE TABLE `produto` (
  `id_pro` int(11) NOT NULL,
  `nome_pro` varchar(100) DEFAULT NULL,
  `tipo_pro` varchar(100) DEFAULT NULL,
  `peso_volume_pro` varchar(100) DEFAULT NULL,
  `codigo_barra_pro` varchar(100) DEFAULT NULL,
  `fornecedor_pro` varchar(300) DEFAULT NULL,
  `estoque_pro` int(11) DEFAULT NULL,
  `valor_compra_pro` double DEFAULT NULL,
  `valor_venda_pro` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `servico`
--

CREATE TABLE `servico` (
  `id_ser` int(11) NOT NULL,
  `nome_ser` varchar(100) DEFAULT NULL,
  `fabricante` varchar(100) DEFAULT NULL,
  `duracao_ser` time DEFAULT NULL,
  `valor_venda_ser` double DEFAULT NULL,
  `tipo_ser` varchar(100) DEFAULT NULL,
  `local_ser` varchar(100) DEFAULT NULL,
  `profissional_ser` varchar(200) DEFAULT NULL,
  `quant_ser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cli`);

--
-- Índices de tabela `endereco`
--
ALTER TABLE `endereco`
  ADD PRIMARY KEY (`ende_id`);

--
-- Índices de tabela `funcionario`
--
ALTER TABLE `funcionario`
  ADD PRIMARY KEY (`id_fun`);

--
-- Índices de tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id_pro`);

--
-- Índices de tabela `servico`
--
ALTER TABLE `servico`
  ADD PRIMARY KEY (`id_ser`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cli` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `endereco`
--
ALTER TABLE `endereco`
  MODIFY `ende_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `funcionario`
--
ALTER TABLE `funcionario`
  MODIFY `id_fun` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `id_pro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `servico`
--
ALTER TABLE `servico`
  MODIFY `id_ser` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
