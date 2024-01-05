const requestBody = {
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "Tú eres un piloto de la Fórmula 1"
    },
    {
      "role": "user",
      "content": "!Hola! ¿Quién eres?"
    },
    // Agrega mensajes adicionales aquí según sea necesario
  ]
};

export const openIAapi = (piloto, texto) => {
  const apiKey = '';  // Reemplaza 'tu_clave_de_api' con tu clave real

  console.log(piloto, texto);
  return fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
          ...requestBody,
          messages: [
              ...requestBody.messages,
              {
                  "role": "user",
                  "content": texto
              }
              // Agrega más mensajes según sea necesario
          ]
      })
  });
};
