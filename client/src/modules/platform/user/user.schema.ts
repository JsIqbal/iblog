import { string, object } from "yup";

export const loginSchema = object().shape({
    email: string().required("Invalid username"),
    password: string().required("Required"),
});
