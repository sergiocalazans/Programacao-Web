# Programação Web - Bacharelado em Ciência da Computação

<img src="banner.png" alt="Banner da disciplina"/>

## Introdução

Este repositório contém todos os exercícios, projetos e anotações desenvolvidos durante a disciplina de **Programação Web**, ofertada pela Escola Politécnica da PUCPR no segundo semestre de 2025.

A disciplina, de natureza prática, introduz o desenvolvimento de sistemas web interativos e responsivos, com comunicação assíncrona entre cliente-servidor e persistência de dados. O objetivo é capacitar o estudante a construir websites modernos, empregando boas práticas e as tecnologias essenciais do front-end.

---

## Conteúdos Abordados

Ao longo do semestre, os seguintes temas de estudo (Study Topics) foram explorados:

- **TE1:** Construção de elementos estáticos de páginas web (HTML).
- **TE2:** Formatação de páginas web (CSS).
- **TE3:** Programação em JavaScript para interatividade.
- **TE4:** Comunicação cliente e servidor.
- **TE5:** Persistência em banco de dados relacional.
- **TE6:** Boas práticas de programação web.

---

## Aulas e Atividades

O conteúdo que antes estava distribuído em branches foi consolidado na branch `main`. Cada branch foi arquivada em uma pasta com o mesmo nome, preservando os arquivos versionados de cada etapa.

| Pasta | Conteúdo |
| --- | --- |
| [`aula-01`](aula-01/) | Introdução ao HTML, estrutura de documentos, principais tags e formulários. |
| [`aula-02-1`](aula-02-1/) | Introdução ao CSS, seletores e estilização inicial. |
| [`aula-02-2`](aula-02-2/) | Continuidade dos exercícios de CSS e organização de arquivos. |
| [`aula-03`](aula-03/) | Projeto multipáginas e navegação usando links. |
| [`aula-04-1`](aula-04-1/) | Construção de layouts com `div` e Flexbox. |
| [`aula-04-2`](aula-04-2/) | Continuidade dos exercícios de cards e Flexbox. |
| [`aula-05-1`](aula-05-1/) | Introdução ao JavaScript e manipulação do DOM. |
| [`aula-05-2`](aula-05-2/) | Eventos, funções e interatividade com JavaScript. |
| [`aula-05-3`](aula-05-3/) | Exercícios complementares de JavaScript. |
| [`aula-06`](aula-06/) | Template Strings e construção dinâmica de HTML. |
| [`aula-07`](aula-07/) | Integração inicial entre front-end e PHP. |
| [`aula-08`](aula-08/) | Conexão com PHP e persistência inicial de dados. |
| [`aula-09`](aula-09/) | Fluxo de cadastro, entrada e área principal com PHP. |
| [`avaliacao-1`](avaliacao-1/) | Atividades da primeira avaliação. |
| [`avaliacao-2`](avaliacao-2/) | Atividades das avaliações RA2 e RA3. |
| [`extra`](extra/) | Materiais extras e projeto complementar com HTML, CSS, JavaScript e PHP. |

---

## Execução do Repositório

Para executar os projetos localmente, utilize o Git e o XAMPP:

1. Instale o [Git](https://git-scm.com/) e o [XAMPP](https://www.apachefriends.org/).
2. Abra o terminal na pasta `htdocs` do XAMPP:

```bash
cd C:\xampp\htdocs
```

3. Clone o repositório:

```bash
git clone https://github.com/sergiocalazans/Programacao-Web.git
```

4. Abra o XAMPP Control Panel e inicie o serviço **Apache**.
5. Se a atividade utilizar banco de dados ou arquivos PHP com conexão, inicie também o serviço **MySQL** e importe/crie as tabelas necessárias conforme os arquivos do exercício.
6. Acesse o projeto pelo navegador:

```text
http://localhost/Programacao-Web/
```

7. Para abrir uma atividade específica, acrescente o nome da pasta na URL. Exemplos:

```text
http://localhost/Programacao-Web/aula-09/
http://localhost/Programacao-Web/avaliacao-2/
http://localhost/Programacao-Web/extra/
```

---

**Professor Orientador:** Eduardo Lino

**Repositório desenvolvido por:** [Sérgio Calazans](https://github.com/sergiocalazans)
