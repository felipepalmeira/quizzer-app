Aqui está o README atualizado com o passo a passo para iniciar o servidor usando Eclipse ou IntelliJ:

---

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
- **Eclipse IDE** ou **IntelliJ IDEA**

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

## Configuração do Servidor Tomcat no Eclipse

### Passo a Passo para Iniciar o Servidor no Eclipse:

1. **Baixe e Instale o Eclipse IDE for Java EE Developers**:
   - Certifique-se de que o Eclipse está configurado com o plugin do Tomcat. Você pode baixá-lo [aqui](https://www.eclipse.org/downloads/).

2. **Configure o Tomcat no Eclipse**:
   - Abra o Eclipse e vá para `Window` > `Show View` > `Servers`.
   - Na nova aba de `Servers`, clique com o botão direito e selecione `New` > `Server`.
   - Escolha a versão do Tomcat instalada (por exemplo, Tomcat v9.0) e clique em `Next`.
   - Selecione o diretório de instalação do Tomcat (onde o Tomcat foi instalado) e clique em `Finish`.

3. **Importe o Projeto no Eclipse**:
   - Vá para `File` > `Import` > `Maven` > `Existing Maven Projects`.
   - Navegue até a pasta do projeto clonado (`quizzer-app`) e clique em `Finish`.

4. **Adicione o Projeto ao Servidor**:
   - Na aba de `Servers`, clique com o botão direito no servidor Tomcat que você configurou e selecione `Add and Remove...`.
   - Selecione o projeto `quizzer-app` e clique em `Add` e depois `Finish`.

5. **Inicie o Servidor**:
   - Clique com o botão direito no servidor Tomcat na aba de `Servers` e selecione `Start`.
   - O Tomcat será iniciado e você poderá acessar a aplicação em `http://localhost:8080/quizzer-app`.

---

## Configuração do Servidor Tomcat no IntelliJ IDEA

### Passo a Passo para Iniciar o Servidor no IntelliJ:

1. **Baixe e Instale o IntelliJ IDEA**:
   - Se ainda não tem o IntelliJ, você pode baixá-lo [aqui](https://www.jetbrains.com/idea/download/).

2. **Configure o Tomcat no IntelliJ**:
   - Vá em `File` > `Project Structure` > `Facets`.
   - No menu lateral, clique em `+` e selecione `Web`.
   - Na aba `Run/Debug Configurations`, clique em `+` e escolha `Tomcat Server` > `Local`.
   - No campo `Application Server`, clique em `Configure...` e adicione o diretório de instalação do Tomcat.

3. **Importe o Projeto no IntelliJ**:
   - Vá em `File` > `New` > `Project from Existing Sources`.
   - Navegue até o diretório do projeto clonado (`quizzer-app`) e selecione o arquivo `pom.xml` (se estiver usando Maven) ou o diretório raiz do projeto.

4. **Configure o Artefato**:
   - Vá para `File` > `Project Structure` > `Artifacts`.
   - Clique em `+` e adicione um novo artefato `Web Application: Exploded` e configure o diretório de saída.
   - Na aba de `Run/Debug Configurations`, selecione o artefato que você acabou de configurar para ser implantado no Tomcat.

5. **Inicie o Servidor**:
   - Selecione o servidor Tomcat configurado na lista de configurações de execução e clique em `Run`.
   - O Tomcat será iniciado e você poderá acessar a aplicação em `http://localhost:8080/quizzer-app`.

---

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
- **Deploy no Tomcat**: Certifique-se de que o Tomcat esteja corretamente configurado e que o projeto seja compatível com um servidor web Java.
