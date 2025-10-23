# Analisando o Uso de Programação Visual no Ensino de Assembly

O projeto tem como objetivo explorar o uso de programação visual baseada em blocos como ferramenta de apoio ao ensino da linguagem Assembly. A proposta busca compreender como a representação visual de instruções de baixo nível pode contribuir para o aprendizado de conceitos fundamentais da arquitetura de computadores, reduzindo a complexidade sintática e melhorando a acessibilidade do conteúdo.

A aplicação desenvolvida integra o ambiente Blockly, uma biblioteca de código aberto para programação visual, com geradores personalizados de código Assembly e JSON. Dessa forma, é possível que o estudante construa programas arrastando blocos visuais, observando simultaneamente a tradução automática para código Assembly, o que incentiva a compreensão prática da lógica por trás das operações de máquina.

---

## Objetivo Educacional

A utilização de ferramentas visuais no ensino de Assembly visa tornar o aprendizado mais intuitivo e exploratório, promovendo a compreensão conceitual dos processos de:

- Movimentação de dados entre registradores e memória;
- Execução de operações aritméticas e lógicas;
- Controle de fluxo (saltos condicionais e labels);
- Representação simbólica da arquitetura interna da máquina.

Com isso, busca-se aproximar o estudante dos fundamentos da programação de baixo nível, permitindo que o foco recaia sobre a lógica e estrutura das instruções, em vez da memorização sintática.

---
## Conclusão

O projeto “Analisando o Uso de Programação Visual no Ensino de Assembly” propõe uma abordagem inovadora e interativa para o ensino de conceitos tradicionalmente considerados complexos.
A partir da visualização de blocos e da tradução automática para Assembly, o estudante pode compreender, de maneira incremental, a correspondência entre a lógica de alto nível e sua representação em código de máquina.

---
## Execução Local

Para executar o projeto localmente, é necessário possuir o Node.js e o npm (Node Package Manager) instalados em seu sistema.

#### 2.1. Clonar o repositório
```bash
git clone https://github.com/scalcogigi/blocos-e-bits.git
cd blocos-e-bits.git

```

#### 2.2. Instalar as dependências
```
npm install
```

#### 2.3. Executar o servidor de desenvolvimento
```
npm start
```

O projeto será inicializado em modo de desenvolvimento e poderá ser acessado, por padrão, no endereço:

```
http://localhost:3000/
```

---
## Tecnologias Utilizadas

- Blockly
- JavaScript
- Node.js / npm
- Webpack / Babel
- HTML / CSS / Tailwind

---
## Licença
Este projeto está licenciado sob os termos da Licença MIT.  
É permitido o uso, modificação e redistribuição do código, desde que sejam mantidos os créditos originais da autora.

Copyright (c) 2025 Giovanna Barros Scalco
