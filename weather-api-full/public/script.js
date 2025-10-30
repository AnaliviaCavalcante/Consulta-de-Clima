
document.getElementById("searchBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();
  const errorMsg = document.getElementById("error");
  const resultCard = document.getElementById("result");

  if (!city) {
    errorMsg.textContent = "Digite o nome da cidade!";
    resultCard.classList.add("hidden");
    return;
  }

  try {
    const response = await fetch(`/weather/${city}`);
    const data = await response.json();

    if (data.error) {
      errorMsg.textContent = data.error;
      resultCard.classList.add("hidden");
    } else {
      errorMsg.textContent = "";
      document.getElementById("city").textContent = `📍 ${data.cidade}`;
      document.getElementById("temperature").textContent = `🌡️ ${data.temperatura}`;
      document.getElementById("condition").textContent = `☁️ ${data.clima}`;
      document.getElementById("updated").textContent = `⏱️ Atualizado em: ${new Date(
        data.atualizado_em
      ).toLocaleString("pt-BR")}`;
      resultCard.classList.remove("hidden");
    }
  } catch (error) {
    errorMsg.textContent = "Erro ao conectar com o servidor!";
    resultCard.classList.add("hidden");
  }
});
