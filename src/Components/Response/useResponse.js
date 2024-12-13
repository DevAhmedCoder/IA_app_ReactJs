import { useState } from "react";

export const useResponse = () => {
  const [response, setResponse] = useState("");

  return {
    response,
    setResponse,
  };
};
