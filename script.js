async function analyzeSentiment() {
    const text = document.getElementById("inputText").value;
  
    const response = await fetch("https://sentiment-api-0mz2.onrender.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: text })
    });
  
    const result = await response.json();
  
    document.getElementById("result").innerText = `Sentiment: ${result.sentiment}`;
  }
  