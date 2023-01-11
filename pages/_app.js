import '../styles/globals.css'
import {Provider} from "react-redux";
import {store} from "../store/store";
import { ConfigProvider} from 'antd';


export default function App({Component, pageProps}) {
    return (
        <Provider store={store}>
            <ConfigProvider theme={{token: { colorPrimary: '#4d3806' } }} >
            <Component {...pageProps} />
            </ConfigProvider>
        </Provider>
    )
}
