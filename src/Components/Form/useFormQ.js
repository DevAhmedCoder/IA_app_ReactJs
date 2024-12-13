import { useState } from "react";
import { requestPostIa } from "../../api";
import { useSelector } from "react-redux";

export const useFormQ = () => {
  const [prompt, setPrompt] = useState("");

  const loading = useSelector((state) => state.requestIa.isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    requestPostIa(prompt);
  };
  return {
    prompt,
    setPrompt,
    loading,
    handleSubmit,
  };
};
