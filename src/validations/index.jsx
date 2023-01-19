import * as yup from "yup";

const schema = yup.object({
  amount: yup
    .number()
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    })
    .positive("Digite um valor maior que zero")
    .required("O campo é obrigatório"),
  installments: yup
    .number()
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    })
    .min(0, "Digite um valor entre 0 e 12")
    .max(12, "Digite um valor entre 0 e 12")
    .required("O campo é obrigatório"),
  mdr: yup
    .number()
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    })
    .positive("Digite um valor maior que zero")
    .required("O campo é obrigatório"),
});

export default schema;
