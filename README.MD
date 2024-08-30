# QUIZZER APP

**QUIZZER APP** é uma aplicação que exibe um questionário básico usando perguntas definidas em um arquivo JSON. O aplicativo precisa ser executado em um servidor local para funcionar corretamente. 

## Descrição

O QUIZZER APP carrega perguntas e respostas a partir de um arquivo JSON e apresenta um questionário interativo. A aplicação requer um servidor local para funcionar, já que os arquivos JSON precisam ser acessados via HTTP.

## Funcionalidades

- Carrega perguntas e respostas de um arquivo JSON.
- Permite ao usuário responder às perguntas e ver as respostas.
- Necessita de um servidor local para servir o arquivo JSON e o frontend.

## Requisitos

- **Node.js** (para criar e rodar o servidor local)
- **npm** (ou **yarn**) para instalar as dependências

## Instalação

1. **Clone o Repositório**

   Clone o repositório para o seu ambiente local:

   ```sh
   git clone https://github.com/seuusuario/quizzer-app.git
   ```

2. **Navegue até o Diretório do Projeto**

   ```sh
   cd quizz-app
   ```

3. **Instale as Dependências**

   Se estiver usando **npm**:

   ```sh
   npm install
   ```

   Ou se estiver usando **yarn**:

   ```sh
   yarn install
   ```

## Configuração do Servidor Local

O projeto inclui um servidor básico em Node.js para servir os arquivos necessários. Siga os passos abaixo para configurá-lo:

1. **Inicie o Servidor**

   Execute o seguinte comando para iniciar o servidor local:

   ```sh
   npm start
   ```

   Ou se estiver usando **yarn**:

   ```sh
   yarn start
   ```

   Isso iniciará um servidor local na porta padrão (por exemplo, `http://localhost:3000`).

2. **Acesse a Aplicação**

   Abra o navegador e vá para `http://localhost:3000` para acessar o QUIZZER APP.

## Estrutura do Projeto

- **index.html**: Arquivo principal HTML que exibe o questionário.
- **app.js**: Código JavaScript responsável pela lógica do questionário.
- **questions.json**: Arquivo JSON contendo as perguntas e respostas.
- **server.js**: Script Node.js para iniciar o servidor local.

## Exemplo de Arquivo `questions.json`

```json
{
    "questions": [
        {
            "question": "Qual é o principal benefício oferecido pela empresa?",
            "options": [
                "Vale-refeição",
                "Assistência médica",
                "Seguro de vida",
                "Transporte"
            ],
            "answer": "Assistência médica"
        },
        {
            "question": "Qual é a política da empresa em relação ao trabalho remoto?",
            "options": [
                "Trabalho remoto não é permitido",
                "Trabalho remoto é permitido apenas uma vez por mês",
                "Trabalho remoto é permitido conforme a necessidade e acordo com o gerente",
                "Trabalho remoto é permitido todos os dias"
            ],
            "answer": "Trabalho remoto é permitido conforme a necessidade e acordo com o gerente"
        },
        {
            "question": "Como a empresa descreve sua cultura organizacional?",
            "options": [
                "Hierárquica e formal",
                "Inovadora e colaborativa",
                "Competitiva e individualista",
                "Tradicional e rígida"
            ],
            "answer": "Inovadora e colaborativa"
        }
    ]
}
```

## Contribuição

Se você deseja contribuir para o projeto, sinta-se à vontade para abrir um **pull request** ou **issue**.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para dúvidas ou sugestões, entre em contato através do e-mail: [seuemail@exemplo.com](mailto:seuemail@exemplo.com).

---

**QUIZZER APP** - 2024
```

### Notas:
1. **Dependências e Scripts**: O `README.md` assume que você tem um arquivo `package.json` com os scripts necessários para iniciar o servidor (`npm start` ou `yarn start`).
2. **Estrutura do Projeto**: Ajuste a estrutura do projeto e o nome dos arquivos conforme o seu projeto real.
3. **Licença e Contato**: Modifique as seções de licença e contato conforme necessário.
