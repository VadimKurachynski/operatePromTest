import {Button, Checkbox, Form, Input} from 'antd';
import {useDispatch} from "react-redux";
import {postAuth} from "../../features/themes/themesSlice";
import s from "/component/loginForm/loginForm.module.css"
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const LoginForm = () => {
    const dispatch = useDispatch()
    const onFinish = (values) => {
        const {username, password} = values;
        dispatch(postAuth({username: username, password: password}));
    };

    return (
        <>

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 800,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Имя"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите имя',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите пароль!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Подтвердить</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>

        </>
    )
}

export default LoginForm