import React from "react";
import CGLogo from "../../chatGPT.png";
import { useFormQ } from "./useFormQ";
const Form = () => {
  const { prompt, setPrompt, loading, handleSubmit } = useFormQ();

  return (
    <form onSubmit={handleSubmit}>
      <img src={CGLogo} className={loading ? "cg-logo loading" : "cg-logo"} />
      <input
        type="text"
        value={prompt}
        placeholder="Ask anything..."
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button type="submit">Ask</button>
    </form>
  );
};

export default Form;
