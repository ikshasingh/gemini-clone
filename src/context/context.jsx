import { createContext } from "react";
import main from "../config/gemini.js";
import { useState } from "react";

export const Context = createContext();
const Contextprovider = (props) => {

  const [input, setInput] = useState(""); // for the input of user
  const [recentPrompt, setRecentPrompt] = useState(""); // when we click send button the input data will be saved in this
  const [previousPrompt, setPreviousPrompt] = useState([]); // saved previous chats input history
  const [showResult, setShowResult] = useState(false); // display the result
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState(""); // to store result data

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 45 * index);
  };

// for new chat function
const newChat =()=>{
    setLoading(false);
    setShowResult(false);
}

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    // to save previous prompts
    let response;
    if(prompt != undefined){
response = await main(prompt);
setRecentPrompt(prompt);
    }else{
        setPreviousPrompt(prev =>[...prev , input])
        setRecentPrompt(input);
        response = await main(input);
    }
    // setRecentPrompt(input);
    // setPreviousPrompt(prev =>[...prev , input]);
    // const response = await main(input);

// to make the response more readable
    let ResponseArray = response
      .replace(/^#{1,6}\s*/gm, "") // remove markdown headers (#, ##, ###)
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // bold text
      .replace(/^\*\s+/gm, "• ") // convert * list items to bullet points
      .replace(/\n\s*\n/g, "<br/><br/>") // double newlines → paragraph spacing
      .replace(/\n/g, "<br/>") // single newline → line break
      .replace(/\s{2,}/g, " "); // clean extra spaces

    let words = ResponseArray.split(" "); // split for typewriter effect
    for (let i = 0; i < words.length; i++) {
      const nextWord = words[i];
      delayPara(i, nextWord + " ");
    }

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default Contextprovider;
