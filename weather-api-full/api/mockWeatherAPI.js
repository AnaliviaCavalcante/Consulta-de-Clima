
// Simula uma API externa de clima
import express from "express";
const app = express();
const PORT = 4000;

// Dados simulados
const weatherData = {
  SãoPaulo: { temp: 25, condition: "Ensolarado" },
  RioDeJaneiro: { temp: 29, condition: "Parcialmente nublado" },
  Fortaleza: { temp: 31, condition: "Quente e úmido" },
  Curitiba: { temp: 19, condition: "Chuvoso" },
};

app.get("/api/weather/:city", (req, res) => {
  const city = req.params.city;
  const data = weatherData[city];

  if (!data) {
    return res.status(404).json({ error: "Cidade não encontrada" });
  }

  res.json({
    city,
    temperature: data.temp,
    condition: data.condition,
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () =>
  console.log(`Mock Weather API rodando em http://localhost:${PORT}`)
);
