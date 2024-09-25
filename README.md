
# QRCodePDFModule

Este é um módulo desenvolvido em Node.js, que permite exportar informações com QRCode convertendo-as em PDF.

## Autoria

Este módulo foi desenvolvido e customizado por Emaricar Developer.

## Iniciando
Primeiro clone o repositório https://github.com/Emaricarprogrammer/QRCodeScriptPDF.

## Estrutura do Código

Na pasta  `QRCodeScriptPDF`, contém o `CodePDF.js`, que é responsável por criar duas classes, `GenerateQrcode` e `CreatePDFCode`.

- A classe `GenerateQrcode` contém o método assíncrono `generateQrCode`, responsável por criar o código QR por meio do `qrcode`.
- A classe `CreatePDFCode` contém o método assíncrono `createPDF`, responsável por exportar o QRCode no formato PDF por meio do `pdfkit`.

## Mudando a Estrutura

Se você deseja adaptar a estilização do seu PDF, você pode acessar a documentação do pdfkit [pdfkit](https://www.npmjs.com/package/pdfkit).

## Como Usar

Você pode começar por utilizar a seguinte sintaxe:

### Exemplo:

```javascript
const qr = require('./QRcodePDF/CodePDF');
const data = {
    title: "Emaricar Technology start-up",
    nome: "Emaricar",
    email: "teste@gmail.com",
    mensagem: "Sou estudante"
};
const fields = ["title", "nome", "email", "mensagem"];

if (!data.nome) {
    const path = `output.pdf`;
    qr.createPDF(data, path, fields).then((filepath) => {
        console.log("Criado com sucesso");
    }).catch((error) => {
        console.error("Erro ao criar pdf:", error);
    });
} else {
    const path = \`${data.nome}.pdf\`;
    qr.createPDF(data, path, fields).then((filepath) => {
        console.log("Criado com sucesso");
    }).catch((error) => {
        console.error("Erro ao criar pdf:", error);
    });
}
```

## Exemplo de Uso com Explicação Linha a Linha

Aqui está um exemplo de como utilizar o módulo para gerar um QRCode em PDF, com uma explicação detalhada de cada linha de código:

```javascript
const qr = require('./QRcodePDF/CodePDF');
// Descrição: Importa o módulo CodePDF localizado no diretório ./QRcodePDF/. Este módulo contém as classes e métodos necessários para gerar o QRCode e criar o PDF.
```

```javascript
const data = {
    title: "Emaricar Technology start-up",
    nome: "Emaricar",
    email: "teste@gmail.com",
    mensagem: "Sou estudante"
};
// Descrição: Cria um objeto data que contém as informações que serão incluídas no QRCode e no PDF. Cada propriedade do objeto representa um campo de dados.
```

```javascript
const fields = ["title", "nome", "email", "mensagem"];
// Descrição: Define um array fields com os nomes das propriedades do objeto data que serão utilizadas no PDF. Isso permite que o método createPDF saiba quais campos incluir no documento.
```

```javascript
if (!data.nome) {
    const path = `output.pdf`;
    qr.createPDF(data, path, fields)
        .then((filepath) => {
            console.log("PDF criado com sucesso:", filepath);
        })
        .catch((error) => {
            console.error("Erro ao criar PDF:", error);
        });
} else {
    const path = \`${data.nome}.pdf\`;
    qr.createPDF(data, path, fields)
        .then((filepath) => {
            console.log("PDF criado com sucesso:", filepath);
        })
        .catch((error) => {
            console.error("Erro ao criar PDF:", error);
        });
}
// Descrição: Condição if (!data.nome): Verifica se a propriedade nome está vazia ou não foi definida.
```

**Descrição Detalhada:**
- Se `data.nome` não existir:
  - Define a variável `path` como 'output.pdf'.
  - Chama o método `createPDF` do módulo `qr`, passando `data`, `path` e `fields` como argumentos.
- Se `data.nome` existir:
  - Define a variável `path` como `${data.nome}.pdf`, utilizando o valor da propriedade `nome` como nome do arquivo PDF.
  - Repete o processo de criação do PDF e tratamento da promessa como no bloco if.

## Passo a Passo Detalhado:

**Importação do Módulo:**

Importa o módulo CodePDF, que contém os métodos para gerar o QRCode e criar o PDF.

**Definição dos Dados:**

Cria um objeto `data` com as informações que serão codificadas no QRCode e inseridas no PDF. Cada chave do objeto corresponde a um campo de informação.

**Especificação dos Campos:**

Cria um array `fields` que lista as chaves do objeto `data` que devem ser incluídas no PDF.

**Determinação do Caminho do Arquivo PDF:**

Verifica se o campo `nome` está presente em `data`.
- Se não estiver presente:
  - Define o nome do arquivo PDF como `output.pdf`.
- Se estiver presente:
  - Define o nome do arquivo PDF como o valor de `data.nome` seguido de `.pdf`.

**Criação do PDF:**

Chama o método assíncrono `createPDF(data, path, fields)` para gerar o PDF.

**Tratamento da Promessa:**
- `.then()`: Executado quando o PDF é criado com sucesso.
- Exibe uma mensagem de sucesso no console.
- `.catch()`: Executado se ocorrer um erro durante a criação do PDF.
- Exibe uma mensagem de erro no console.

**Execução Condicional:**

Todo o processo está encapsulado em uma estrutura condicional para assegurar que o nome do arquivo PDF seja definido adequadamente, seja com um nome padrão ou personalizado.

## Notas Adicionais:

**Método createPDF:**

É um método assíncrono que retorna uma promessa. Recebe três parâmetros:
- **data:** O objeto com os dados a serem inseridos.
- **path:** O caminho ou nome do arquivo PDF a ser gerado.
- **fields:** Um array com os campos que serão incluídos no PDF.

## Tratamento de Erros:

É importante tratar erros usando `.catch()` para capturar quaisquer problemas que possam ocorrer durante a geração do PDF, como falta de permissões de escrita ou erros nos dados fornecidos.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais detalhes.
"# QRCodeScriptPDF"  
