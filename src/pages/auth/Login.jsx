import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import Request from "../../Requests";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log("Success:", values);

        Request.login(values, "login")
            .then((res) => {
                localStorage.setItem("token", res.data.token);

                navigate("/dashboard/table_2");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="login-wrapper">
            <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: "Please input your username!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your password!" }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
