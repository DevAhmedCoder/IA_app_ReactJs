import React from "react";
import { useResponse } from "./useResponse";
import { useFormQ } from "../Form/useFormQ";

const Response = () => {
  const { response } = useResponse();
  const { loading } = useFormQ();

  return <p className="response-area">{loading ? "Loading..." : response}</p>;
};

export default Response;
