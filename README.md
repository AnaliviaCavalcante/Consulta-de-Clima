# 🌤️ Consulta de Clima

Este é um projeto simples de consulta de clima, desenvolvido como um trabalho acadêmico. Ele utiliza um frontend (HTML, CSS, JS) e um backend (Node.js + Express) para buscar e exibir dados meteorológicos de um arquivo JSON.

## ✨ Funcionalidades

* **Busca de Clima:** Permite ao usuário digitar o nome de uma cidade para consultar o clima.
* **Exibição de Dados:** Mostra a temperatura, condição do tempo, umidade e vento da cidade consultada.
* **API Própria:** O frontend consome uma API RESTful local (criada com Express) para obter os dados.
* **Servidor Integrado:** O servidor Node.js é responsável tanto pela API quanto por servir os arquivos do frontend (`index.html`, `style.css`, etc.).

## 💻 Tecnologias Utilizadas

* **Frontend:**
    * HTML5
    * CSS3
    * JavaScript (com `fetch` para chamadas API)

* **Backend:**
    * Node.js
    * Express.js (para o servidor e rotas)
    * CORS

* **Dados:**
    * JSON (Usado como um banco de dados mock)

## 🚀 Como Executar Localmente

Siga estes passos para rodar o projeto na sua máquina.

**Pré-requisitos:**

* Ter o [Node.js](https://nodejs.org/en) instalado.

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/AnaliviaCavalcante/Consulta-de-Clima.git](https://github.com/AnaliviaCavalcante/Consulta-de-Clima.git)
    cd Consulta-de-Clima
    ```

2.  **Instale as dependências do backend:**
    (Isso irá instalar o Express e o CORS)
    ```bash
    npm install
    ```

3.  **Inicie o servidor:**
    (Este comando executa o arquivo `app.js`)
    ```bash
    node app.js
    ```
    Você verá a mensagem "Servidor rodando na porta 3001" no seu terminal.

4.  **Acesse o projeto:**
    Abra seu navegador e acesse:
    ```
    http://localhost:3001
    ```
    O servidor Node.js entregará o `index.html` e o site estará 100% funcional para a apresentação.

## 📦 Endpoints da API

O servidor `app.js` expõe os seguintes endpoints:

* `GET http://localhost:3001/api/clima/:cidade`: Retorna os dados do clima para a cidade especificada (ex: `fortaleza`).
* `POST http://localhost:3001/api/clima`: Adiciona ou atualiza os dados de clima para uma nova cidade no `dados.json`.
