
# 🌤️ Weather Info API - Projeto Completo

## 🧩 Descrição
Projeto completo em **Node.js** com frontend simples em HTML/CSS/JS e backend que consome uma **API simulada de clima**, sem banco de dados.

---

## ⚙️ Tecnologias
- Node.js + Express
- node-fetch
- HTML, CSS e JavaScript puro

---

## 📁 Estrutura do Projeto
```
weather-api-full/
│
├── api/
│   └── mockWeatherAPI.js       # API simulada de clima
│
├── public/
│   ├── index.html              # Frontend
│   ├── style.css
│   └── script.js
│
├── server.js                   # Servidor principal
│
├── package.json
└── README.md
```

---

## ▶️ Como executar

### 1️⃣ Instalar dependências
```bash
npm install
```

### 2️⃣ Rodar a API simulada
```bash
npm run mock
```
> A API estará em http://localhost:4000

### 3️⃣ Rodar o servidor principal (frontend + backend)
Em outro terminal:
```bash
npm start
```
> O app estará em http://localhost:3000

---

## 🌡️ Teste no navegador
Acesse:
```
http://localhost:3000
```
Digite o nome de uma cidade (ex: SãoPaulo, RioDeJaneiro, Fortaleza ou Curitiba)

---

