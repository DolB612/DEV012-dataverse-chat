export const openIAapi = (driver, text) => {
  // console.log({ driver, text });
  const Key = localStorage.getItem("apiKey");

  const requestBody = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Vas a simular que eres ${driver} contestame mis preguntas como si fueras ${driver}`,
      },
      {
        role: "user",
        content: text,
      },
    ],
  };

  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Key}`,
    },
    body: JSON.stringify(requestBody),
  });
};
