import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup
    .string()
    .required("Es necesario un Nombre")
    .max(10, "El nombre no debe tener más de 10 carateres"),
  password: yup
    .string()
    .required("Es necesario una Contraseña")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});
