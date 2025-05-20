import { useMemo, useState } from "react";

function GenerateRanDome() {
  const words = ["hi", "hello", "Muskan", "random", "study"];
  const [sentences, setSentences] = useState([]);
  const [filter, setFilter] = useState("");

  // Function to generate 15 random sentences
  function generateSentences() {
    let allSentences = [];
    for (let i = 1; i <= 15; i++) {
      let sentence = "";
      for (let j = 1; j <= 5; j++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        sentence += words[randomIndex] + " ";
      }
      allSentences.push(sentence.trim());
    }
    setSentences(allSentences);
  }

  // Filter sentences based on user input
  const filteredSentences = useMemo( function (){
          return  sentences.filter((sentence) =>sentence.includes(filter));

  },[sentences,filter])
  
  
  

  return (
    <div>
      <button onClick={generateSentences}>Generate Sentences</button>

      <input
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter sentences"
        style={{ margin: "10px", padding: "5px" }}
      />

      {filteredSentences.map((sentence, index) => (
        <div key={index}>{index + 1}. {sentence}</div>
      ))}
    </div>
  );
}

export default GenerateRanDome;
