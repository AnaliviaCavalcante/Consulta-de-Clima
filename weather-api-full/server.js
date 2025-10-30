
import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/weather/:city", async (req, res) => {
  const { city } = req.params;
  const apiUrl = `http://localhost:4000/api/weather/${city}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return res.status(response.status).json({ error: "Cidade não encontrada" });
    }

    const data = await response.json();

    const result = {
      cidade: data.city,
      temperatura: `${data.temperature}°C`,
      clima: data.condition,
      atualizado_em: data.timestamp,
    };

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter dados da API" });
  }
});

app.listen(PORT, () =>
  console.log(`Servidor principal rodando em http://localhost:${PORT}`)
);
