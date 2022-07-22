import * as yup from "yup";

export const hatSchema = yup.object({
  name: yup.string(),
  color: yup.string(),
  state: yup.string(),
});
