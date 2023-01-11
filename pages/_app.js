import '../styles/globals.css'
import {Provider} from "react-redux";
import {store} from "../store/store";
import { ConfigProvider,Slider, Switch, } from 'antd';


export default function App({Component, pageProps}) {
    return (
        <Provider store={store}>
            <ConfigProvider theme={{token: { colorPrimary: '#3a3938', }, }} >
            <Component {...pageProps} />
            </ConfigProvider>
        </Provider>
    )
}
