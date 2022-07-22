import * as yup from "yup";

export const hatSchema = yup.object({
  name: yup.string(),
  color: yup.string(),
  state: yup.string(),
  state_payment: yup.string().matches(/[c,p]/, 'Solo escriba "p" ó "c"')
});
