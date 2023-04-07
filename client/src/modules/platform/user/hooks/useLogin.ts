import { FormikHelpers } from "formik";
import { login } from "../user.actions";

export interface FormValues {
    email: string;
    password: string;
}

const useLogin = () => {
    const initialValues = { email: "", password: "" };

    const handleSubmit = async (
        values: FormValues,
        actions: FormikHelpers<FormValues>
    ) => {
        await login(values).then((response: any) => {
            localStorage.setItem("userType", response.data.userType);
            localStorage.setItem("access", response.data.access);
            // window.location.href = "/";
        });
        actions.setSubmitting(false);
    };
    return { initialValues, handleSubmit };
};

export default useLogin;
