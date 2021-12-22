import { object, string } from "yup";

export const createUserSchema = object({
  body: object({
    email: string()
      .email("Must be a valid email")
      .required("Email is required"),
    name: string().required("Name is required"),
  }),
});
