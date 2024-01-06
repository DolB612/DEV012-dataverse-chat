import data from '../data/dataset.js';

export const openIAapi = (piloto, texto) => {
  const apiKey = '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';  // Reemplaza 'tu_clave_de_api' con tu clave real

  const data = {
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "system",
        "content": `Eres un ${piloto} de la Fórmula 1, responderás preguntas sobre tu vida, acontecimientos importantes como piloto de la Fórmula 1`
      },
      {
        "role": "user",
        "content": texto
      },
    ]
  };

  console.log(piloto, texto);

  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify(data)
  });
};
