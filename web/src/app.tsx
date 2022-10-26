import React, { useEffect, useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import RouteConfigs from './router';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import Login from './page/login/index';
import getcookie from './utils/getcookie';
import Message from './page/message';
import './index.less';

function App() {
    const [login, setLogin] = useState(false);
    const [text, setText] = useState('hello md-editor-rt！');
    const [name, setName] = useState('');
    // return <MdEditor modelValue={text} onChange={setText} />;
    const openLogin = () => {
        setLogin(true);
    };
    const ccc = (s: any) => {
        setLogin(s);
        setName(getcookie('id'));
    };

    useEffect(() => {
        setName(getcookie('id'));
    }, []);
    return (
        <>
            {login ? <Login ccc={ccc} /> : ''}
            <div>
                <div className="header">
                    <div className="header-title">
                        <div>欢迎</div>
                    </div>
                    <div className="header-img">
                        <img src="https://cdn.jim-nielsen.com/ios/512/dislyte-2022-06-08.png" alt="" />
                        <div>{name ? name : <span onClick={openLogin}>登陆</span>}</div>
                    </div>
                </div>
                <BrowserRouter>
                    <RouteConfigs></RouteConfigs>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
