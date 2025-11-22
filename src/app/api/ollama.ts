export async function ollamaGenerate(prompt: string) {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      body: JSON.stringify({
        model: "llama3.2",
        prompt,
        stream: false
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  
    const data = await response.json();
    return data.response;
  }
  