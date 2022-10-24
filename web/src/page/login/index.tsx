import React, { useState, useRef } from 'react';
import './index.less';
import { Button, message, Space } from 'antd';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { getLogin, getArticleList } from '@/http/login';
import setcookie from '@/utils/setcookie';
function Login(props: any) {
    const [display, useStyle] = useState('block');
    const nameRef = useRef(null) as any;
    const passwordRef = useRef(null) as any;
    const close = () => {
        props.ccc(false);
        const a = document.querySelector('html') as HTMLElement;
        a.style.overflow = 'auto';
    };

    const login = () => {
        console.log(nameRef.current.value);
        console.log(passwordRef.current.value);

        getLogin({
            name: nameRef.current.value,
            password: passwordRef.current.value,
        }).then((res: any) => {
            console.log(res);
            if (res.msg == '登陆成功') {
                message.success('登陆成功');
                setcookie('id', nameRef.current.value);
                props.ccc(false);
                const a = document.querySelector('html') as HTMLElement;
                a.style.overflow = 'auto';
            } else if (res.msg == '注册成功') {
                message.success('注册成功');
                setcookie('id', nameRef.current.value);
                props.ccc(false);
                const a = document.querySelector('html') as HTMLElement;
                a.style.overflow = 'auto';
            } else {
                message.error('账号或者密码错误');
            }
        });
    };
    return (
        <div className="login-box">
            <div className="login">
                <div className="title">登陆即注册</div>
                <div className="name">
                    账号:
                    <input type="text" placeholder="请输入您的账号" ref={nameRef} />
                </div>
                <div className="password">
                    密码:
                    <input type="password" placeholder="请输入您的密码" ref={passwordRef} />
                </div>
                <button onClick={login}>登陆/注册</button>
                <button onClick={close}>关闭</button>;
            </div>
        </div>
    );
}

export default Login;
