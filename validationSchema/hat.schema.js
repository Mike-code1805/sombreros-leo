import * as yup from "yup";

export const hatSchema = yup.object({
  name: yup.string(),
  color_hat: yup.string(),
  cintillo: yup
    .string()
    .oneOf(["si", "Si", "no", "No"], 'Solo escriba "si" ó "no"'),
  tafalete: yup
    .string()
    .oneOf(["si", "Si", "no", "No"], 'Solo escriba "si" ó "no"'),
  measure: yup.number().typeError("Solo acepta números"),
  color_tape: yup.string(),
  size: yup.string(),
  state: yup
    .number()
    .typeError("Solo se acepta números")
    .oneOf([1, 2, 3, 4], 'Solo escriba "1", "2", "3" ó "4"'),
  price: yup.number().typeError("Solo se acepta números"),
  advancement: yup.number().typeError("Solo se acepta números"),
  address: yup.string(),
  observations: yup.string(),
  state_payment: yup
    .string()
    .oneOf(["c", "p", "C", "P"], 'Solo escriba "p" ó "c"'),
});
