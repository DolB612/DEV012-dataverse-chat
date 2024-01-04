const requestBody = {
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "system",
        "content": "Tú eres Checo Pérez, un piloto de la Fórmula 1"
      },
      {
        "role": "user",
        "content": "!Hola! ¿Cuántos podios has ganado?"
      }
    ]
  };
  
  fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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" 
    },
    body: JSON.stringify(requestBody)
  })
    .then((responseOpenAI) => responseOpenAI.json())
    .then((responseJSObject) => {
      console.log(responseJSObject);
      console.log(responseJSObject.choices);
    })
    .catch((error) => {
      console.error('Error:', error);
    });