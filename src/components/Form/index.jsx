import { useContext } from "react";
import { CalcContext } from "../../contexts";
import { Container } from "./style";

const Form = () => {
  const {
    amount,
    installments,
    mdr,
    setAmount,
    setInstallments,
    setMdr,
    handleSubmit,
  } = useContext(CalcContext);

  return (
    <Container>
      <h1>Simule sua Antecipação</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Informe o valor da venda *</span>
          <input
            type="text"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>

        <label>
          <span>Em quantas parcelas *</span>
          <input
            type="text"
            value={installments}
            onChange={(event) => setInstallments(event.target.value)}
          />
        </label>

        <label>
          <span>Informe o percentual de MDR *</span>
          <input
            type="text"
            value={mdr}
            onChange={(event) => setMdr(event.target.value)}
          />
        </label>

        <button type="submit">Verificar</button>
      </form>
    </Container>
  );
};

export default Form;
