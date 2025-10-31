import express from "express";
import path from "path";
import { fileURLToPath } from "url"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicFolderPath = path.join(__dirname, "public");
// ---

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(publicFolderPath));


const weatherData = {
  SãoPaulo: { temp: 25, condition: "Ensolarado" },
  RioDeJaneiro: { temp: 29, condition: "Parcialmente nublado" },
  Fortaleza: { temp: 31, condition: "Quente e úmido" },
  Curitiba: { temp: 19, condition: "Chuvoso" },
};


app.get("/weather/:city", async (req, res) => {
  const { city } = req.params;
  const data = weatherData[city];

  if (!data) {
    return res.status(404).json({ error: "Cidade não encontrada" });
  }

  const mockApiResponse = {
    city,
    temperature: data.temp,
    condition: data.condition,
    timestamp: new Date().toISOString(),
  };

  const result = {
    cidade: mockApiResponse.city,
    temperatura: `${mockApiResponse.temperature}°C`,
    clima: mockApiResponse.condition,
    atualizado_em: mockApiResponse.timestamp,
  };

  res.json(result);
});


app.get("/", (req, res) => {
  res.sendFile(path.join(publicFolderPath, "index.html"));
});

app.listen(PORT, () =>
  console.log(`Servidor principal rodando na porta ${PORT}`)
);
