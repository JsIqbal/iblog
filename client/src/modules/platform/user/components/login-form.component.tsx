import { Form, Field, ErrorMessage } from "formik";
import Label from "../../../core/common/label.component";

const LoginForm = ({ isSubmitting }: any) => {
    return (
        <Form>
            <div className="form-group">
                <Label htmlFor="email" title="email" />
                <Field
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Username"
                />
                <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                />
            </div>
            <div className="form-group mb-2">
                <Label htmlFor="password" title="Password" />
                <Field
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                />
                <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                />
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
            >
                {isSubmitting ? "Loading..." : "Login"}
            </button>
        </Form>
    );
};

export default LoginForm;
