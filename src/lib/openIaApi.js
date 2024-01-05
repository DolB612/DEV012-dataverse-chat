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

  export const openIAapi = (piloto, texto) =>{  // Esto se agregó
    const apiKey = 'dajhdsjhfjh'   //Esto se agregó
    // console.log(piloto, texto);
    // return fetch("https://api.openai.com/v1/chat/completions", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${apiKey}`
    //   },
    //   body: JSON.stringify(requestBody)
    // })
   
  }
  
 