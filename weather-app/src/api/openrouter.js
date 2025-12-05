export const askAI = async (message) => {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",  // 🔥 Add model
        messages: [
          { role: "system", content: "You are a helpful AI assistant for a weather app. Respond in short, friendly messages." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();
    console.log("AI Response:", data);

    return data.choices?.[0]?.message?.content || "⚠ I didn’t understand. Try again!";
  } catch (error) {
    console.error("AI Error:", error);
    return "⚠ AI service unavailable. Try again!";
  }
};
