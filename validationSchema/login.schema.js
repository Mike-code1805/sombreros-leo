import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("El Email debe ser válido").required("Es necesario un Email"),
  password: yup
    .string()
    .required("Es necesario una Contraseña")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});
