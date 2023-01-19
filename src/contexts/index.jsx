import { useState } from "react";
import { createContext } from "react";
import api from "../services/api";

export const CalcContext = createContext();

const CalcProvider = ({ children }) => {
  const [response, setResponse] = useState({ 1: 0, 15: 0, 30: 0, 90: 0 });

  const onSubmit = (data) => {
    api
      .post("", data)
      .then((response) => setResponse(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <CalcContext.Provider
      value={{
        response,
        onSubmit,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
