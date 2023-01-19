import { useState } from "react";
import { createContext } from "react";
import api from "../services/api";

export const CalcContext = createContext();

const CalcProvider = ({ children }) => {
  const [amount, setAmount] = useState("");
  const [installments, setInstallments] = useState("");
  const [mdr, setMdr] = useState("");
  const [response, setResponse] = useState({ 1: 0, 15: 0, 30: 0, 90: 0 });

  const handleSubmit = (event) => {
    event.preventDefault();

    api
      .post("", {
        amount: amount,
        installments: installments,
        mdr: mdr,
      })
      .then((response) => setResponse(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <CalcContext.Provider
      value={{
        amount,
        installments,
        mdr,
        response,
        setAmount,
        setInstallments,
        setMdr,
        handleSubmit,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
