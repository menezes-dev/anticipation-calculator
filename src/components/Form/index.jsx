import { useContext } from "react";
import { CalcContext } from "../../contexts";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validations";

const Form = () => {
  const { onSubmit } = useContext(CalcContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <h1>Simule sua Antecipação</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Informe o valor da venda *</span>
          <input type="number" {...register("amount")} />
          <p className="error">{errors.amount?.message}</p>
        </label>

        <label>
          <span>Em quantas parcelas *</span>
          <input type="number" {...register("installments")} />
          <p className="error">{errors.installments?.message}</p>
        </label>

        <label>
          <span>Informe o percentual de MDR *</span>
          <input type="number" {...register("mdr")} />
          <p className="error">{errors.mdr?.message}</p>
        </label>

        <button type="submit">Verificar</button>
      </form>
    </Container>
  );
};

export default Form;
