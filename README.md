# QUIZZER APP

**QUIZZER APP** é uma aplicação que exibe um questionário básico usando perguntas definidas em um arquivo JSON. O aplicativo precisa ser executado em um servidor Java Tomcat para funcionar corretamente. 

## Descrição

O QUIZZER APP carrega perguntas e respostas a partir de um arquivo JSON e apresenta um questionário interativo. A aplicação requer um servidor local (Java Tomcat) para funcionar, já que os arquivos JSON precisam ser acessados via HTTP.

## Funcionalidades

- Carrega perguntas e respostas de um arquivo JSON.
- Permite ao usuário responder às perguntas e ver as respostas.
- Necessita de um servidor Tomcat para servir o arquivo JSON e o frontend.

## Requisitos

- **Java 8+**
- **Apache Tomcat 9+**

## Instalação

1. **Clone o Repositório**

   Clone o repositório para o seu ambiente local:

   ```sh
   git clone https://github.com/felipepalmeira/quizzer-app.git
   ```

2. **Navegue até o Diretório do Projeto**

   ```sh
   cd quizzer-app
   ```

3. **Configure o Tomcat**

   - Certifique-se de que o Apache Tomcat está instalado corretamente e configurado.
   - Copie os arquivos da aplicação para a pasta `webapps` do Tomcat (ou crie um arquivo `.war` e o implante no Tomcat).

## Configuração do Servidor Tomcat

Siga os passos abaixo para rodar o QUIZZER APP no Tomcat:

1. **Inicie o Tomcat**

   Acesse a pasta de instalação do Tomcat e inicie o servidor com o comando:

   ```sh
   catalina.sh run
   ```

   Ou, no Windows:

   ```sh
   catalina.bat run
   ```

2. **Implante a Aplicação**

   Certifique-se de que os arquivos do projeto estão na pasta `webapps` do Tomcat ou que o arquivo `.war` foi corretamente implantado.

3. **Acesse a Aplicação**

   Abra o navegador e vá para `http://localhost:8080/quizzer-app` para acessar o QUIZZER APP.

## Estrutura do Projeto

- **index.html**: Arquivo principal HTML que exibe o questionário.
- **app.js**: Código JavaScript responsável pela lógica do questionário.
- **questions.json**: Arquivo JSON contendo as perguntas e respostas.
- **WEB-INF/web.xml**: Arquivo de configuração do Tomcat.
  
  Exemplo de `web.xml`:

  ```xml
  <web-app>
      <servlet>
          <servlet-name>quizzer</servlet-name>
          <jsp-file>/index.jsp</jsp-file>
      </servlet>
      <servlet-mapping>
          <servlet-name>quizzer</servlet-name>
          <url-pattern>/quizzer</url-pattern>
      </servlet-mapping>
  </web-app>
  ```

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

Para dúvidas ou sugestões, entre em contato através do e-mail: [pro.felipefeitosa@gmail.com](mailto:pro.felipefeitosa@gmail.com).

---

**QUIZZER APP** - 2024

---

### Notas:
- **Configuração de JSON via Servidor Tomcat**: Certifique-se de que o servidor Tomcat permite o acesso aos arquivos estáticos, como o `questions.json`.
