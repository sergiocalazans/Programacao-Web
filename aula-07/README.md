# Aula 06: Template String - Construindo HTML Dinamicamente

## Resumo

Esta aula avançou nossos conhecimentos em JavaScript, introduzindo uma forma moderna e poderosa de manipular texto e HTML: as **Template Strings** (também conhecidas como Template Literals).

### Tópicos Principais:

- **Definição:** Template Strings são literais de texto que permitem strings de múltiplas linhas e interpolação de expressões. Elas são definidas com crases (`` ` ``) em vez de aspas simples ou duplas.
- **Strings Multilinha:** Vimos como é fácil criar blocos de texto ou HTML com várias linhas sem a necessidade de concatenação manual ou caracteres de escape.
- **Interpolação de Strings:** Este é o recurso mais poderoso. Aprendemos a injetar o valor de variáveis ou o resultado de expressões diretamente dentro de uma string usando a sintaxe `${expressao}`. Isso torna o código muito mais limpo e legível em comparação com a concatenação tradicional com o operador `+`.
- **Construção Dinâmica de HTML:** O principal caso de uso prático foi a geração de blocos de HTML dinamicamente a partir de dados (como um vetor de objetos). Usamos Template Strings para construir o HTML de um "Card" e, em seguida, o injetamos no DOM usando a propriedade `.innerHTML`.

O exercício final combinou HTML, CSS e JavaScript para renderizar uma lista de dados em formato de cards, uma técnica fundamental no desenvolvimento web moderno.
