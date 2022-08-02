import * as yup from "yup";

export const registerSchema = yup.object({
  username: yup
    .string()
    .required("Es necesario un Nombre")
    .max(10, "El nombre no debe tener más de 10 carateres"),
  email: yup.string().email("Invalid email").required("Es necesario un Email"),
  password: yup
    .string()
    .required("Es necesario una Contraseña")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});
