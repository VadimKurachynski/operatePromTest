import LoginForm from "../component/loginForm/Login";

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const Login = () => {

    return (
        <>
            <LoginForm/>

        </>
    )
}


export default Login