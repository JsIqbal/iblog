import { Formik } from "formik";
import Typography from "../../../core/common/typography.component";
import { loginSchema } from "../user.schema";
import useLogin from "../hooks/useLogin";
import LoginForm from "./login-form.component";

const Login: React.FC = () => {
    const { initialValues, handleSubmit } = useLogin();
    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center login-background">
            <div className="card p-3" style={{ borderRadius: "10px" }}>
                <Typography className="text-center mb-4 fs-2" element="iBlog" />
                <Formik
                    initialValues={initialValues}
                    validationSchema={loginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <LoginForm isSubmitting={isSubmitting} />
                    )}
                </Formik>
            </div>
        </div>
    );
};

export { Login };
