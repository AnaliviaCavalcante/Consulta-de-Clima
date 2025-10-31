document.getElementById("searchBtn").addEventListener("click", async () => {

  const cityInput = document.getElementById("cityInput"); 
  const city = cityInput.value.trim();
  const errorMsg = document.getElementById("error");
  const resultCard = document.getElementById("result");
  

  if (!city) {
    errorMsg.textContent = "Digite o nome da cidade!";
    resultCard.classList.add("hidden");
    return;
  }

  try {
   
   const response = await fetch(`/api/clima/${city.toLowerCase()}`);
    const data = await response.json();

 
    if (data.erro) { 
      errorMsg.textContent = data.erro;
      resultCard.classList.add("hidden");
    } else {
      errorMsg.textContent = "";

    
      document.getElementById("city").textContent = `📍 ${cityInput.value}`;
      
   
      document.getElementById("temperature").textContent = `🌡️ ${data.temperatura}`;
      
      
      document.getElementById("condition").textContent = `☁️ ${data.condicao}`;
      
    
      document.getElementById("updated").textContent = `💧 Umidade: ${data.umidade} | 💨 Vento: ${data.vento}`;
      
      resultCard.classList.remove("hidden");
    }
  } catch (error) {
  
    errorMsg.textContent = "Erro ao conectar com o servidor!";
    resultCard.classList.add("hidden");
  }
});