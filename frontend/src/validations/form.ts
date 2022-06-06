import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  id: Yup.string().required(),
  // password: Yup.string().required(),
  password: Yup.string(),
});

export const newIncidentSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  value: Yup.string().required(),
});

export const registerSchema = Yup.object().shape({
  password: Yup.string().required(),
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  whatsapp: Yup.string().required(),
  city: Yup.string().required(),
  uf: Yup.string().required(),
})