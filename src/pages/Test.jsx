import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

function Test() {
  const [prompt, setPrompt] = useState("");
  const [placeInfoList, setPlaceInfoList] = useState([]);

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  let places;

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 1000,
    });
    const answer = response.data.choices[0].text;
    const numRegex = /[0-9]+\./g;
    let answers = answer.replace(numRegex, "~*");
    places = answers.split("~*");

    console.log(answers);
    console.log(places);

    setPlaceInfoList(placeInfoList);
  };

  useEffect(() => {
    const func = async () => {
      for (let i = 1; i < places.length; i++) {
        let placePrompt = "Tell me about the " + places[i];
        let placeInfo = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: placePrompt,
          max_tokens: 1000,
        });
        console.log(placeInfo);
        placeInfoList.push(<p key={i}>{placeInfo}</p>);
        //setResponse(placeInfo.data.choices[0].text);
      }
    };
    func();
    setPlaceInfoList(placeInfoList);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Submit</button>
        {placeInfoList}
      </form>
    </div>
  );
}

export default Test;
