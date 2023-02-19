import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { responsiveFontSizes } from "@material-ui/core";

function Test() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 1000,
    });

    console.log(response);
    setResponse(response.data.choices[0].text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default Test;
