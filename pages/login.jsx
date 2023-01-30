import LoginForm from "../component/loginForm/Login";
import s from "../component/loginForm/loginForm.module.css"

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const Login = () => {
    return (
        <>

<div className={s.authorizBlock}>
            <div className={s.authorization}>Авторизация</div>
            <div className={s.loginForm}><LoginForm/></div>
        </div>

        </>
    )
}


export default Login