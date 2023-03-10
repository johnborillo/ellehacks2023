import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

function Search() {
  const [prompt, setPrompt] = useState("");
  const [placesList, setPlacesList] = useState([]);

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  let places;
  let placeInfoList = [];

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

    // console.log(answers);
    // console.log(places);

    for (let i = 1; i < places.length; i++) {
      let placePrompt = "Tell me about the " + places[i];
      let placeInfo = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: placePrompt,
        max_tokens: 1000,
      });
      //   console.log(placeInfo);
      placeInfoList.push("\n" + placeInfo.data.choices[0].text);
    }
    // console.log(placeInfoList);
    setPlacesList(placeInfoList);
  };

  const listItems = placesList.map((item, i) => (
    <li key={i}>
      {i + 1}: {item}
    </li>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Submit</button>
        <ul>{listItems}</ul>
      </form>
    </div>
  );
}

export default Search;
