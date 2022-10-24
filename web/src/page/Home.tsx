import React, { useState, useEffect, useRef } from 'react';
import OmsViewMarkdown from '../utils/markdown';
import { useNavigate } from 'react-router-dom';
import './index.less';
// <OmsViewMarkdown textContent={aav} darkMode />;
import aav from '../MD/home/index.md';
import getcookie from '@/utils/getcookie';

import { util } from 'webpack';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { getArticleList } from '../http/login';
const list = [
    {
        title: 'js前端面试',
        img: 'https://images.pexels.com/photos/13850240/pexels-photo-13850240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        tag: ['javascrip', 'html', 'css'],
        id: '1',
        desc: '语法上面，上面，两者最明显的差异是，CommonJS 模块使两者最明显的差异是，CommonJS 模块使用 require()和 module.exports，ES6 模块使用 import 和 export。',
    },
    {
        title: 'js前端面试',
        img: 'https://images.pexels.com/photos/13850240/pexels-photo-13850240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        tag: ['javascrip', 'html', 'css'],
        id: '1',
        desc: '语法上面，两上面，两者最明显的差异是，CommonJS 模块使者最明显的差异是，CommonJS 模块使用 require()和 module.exports，ES6 模块使用 import 和 export。',
    },
    {
        title: 'js前端面试',
        img: 'https://images.pexels.com/photos/13850240/pexels-photo-13850240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        tag: ['javascrip', 'html', 'css'],
        id: '1',
        desc: '语法上面，两者最明显的差异是，CommonJS 模块使用 require()和 module.exports，ES6 模块使用 import 和 export。',
    },
    {
        title: 'js前端面试',
        img: 'https://images.pexels.com/photos/13850240/pexels-photo-13850240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        tag: ['javascrip', 'html', 'css'],
        id: '1',
        desc: '语法上面，两者最明显的差异是，CommonJS 模块使用 require()和 module.exports，ES6 模块使用 import 和 export。',
    },
];

const App = () => {
    const a = useRef(null) as any;
    const [line, setLine] = useState(0);
    const [start, setStart] = useState(true);
    const [from, setFrom] = useState('');
    const navigate = useNavigate();
    const PandaSvg = () => (
        <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
            <path
                d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
                fill="#6B676E"
            />
            <path
                d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
                fill="#FFEBD2"
            />
            <path
                d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
                fill="#E9D7C3"
            />
            <path
                d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
                fill="#FFFFFF"
            />
            <path
                d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
                fill="#6B676E"
            />
            <path
                d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
                fill="#464655"
            />
            <path
                d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
                fill="#464655"
            />
            <path
                d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
                fill="#464655"
            />
        </svg>
    );

    const starts = () => {
        setStart(!start);
        console.log(start);

        if (start) {
            setFrom('from');
            a.current.play();
        } else {
            setFrom('');
            a.current.pause();
        }
    };
    const toDesc = () => {
        navigate('/11');
    };
    const mess = () => {
        if (getcookie('id')) {
            navigate('/message');
        }
    };
    useEffect(() => {
        setInterval(() => {
            if (a?.current?.currentTime) {
                setLine((a.current.currentTime / a.current.duration) * 100);
            }
        }, 1000);
    }, []);
    return (
        <>
            <div className="message" onClick={mess}></div>

            <div className="home-box">
                <div className="home-img"></div>
                <div className="home-title">JASMINES</div>
                <div className="home-name">
                    <div className="home-hello">Hello World</div>
                    <div className="home-occupation">前端程序员</div>
                    <div></div>
                </div>
                {/* <div className="old-book"></div> */}
                <div className="new-book">
                    <span>最新文章</span>
                    <em></em>
                </div>
                <div className="box">
                    <div className="list">
                        {list.map((item, index) => {
                            return (
                                <div className="list-box" key={index} onClick={toDesc}>
                                    <img src={item.img} alt="" />
                                    <div className="list-title">
                                        <div className="list-title-t">{item.title}</div>
                                        <div className="list-desc">{item.desc}</div>
                                        {item?.tag.map((item, index) => {
                                            return (
                                                <span className="list-tag" key={index}>
                                                    {item}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="MY">
                        <div className="audio-box">
                            <div className="audio-name">我的音乐</div>
                            <div className="img">
                                <div className={from}>
                                    <div className="img-header"></div>
                                </div>
                                <div className="img-name">
                                    <div>邓紫棋</div>
                                    <div>多久都早在一起</div>
                                    <div className="img-open">
                                        <CaretLeftOutlined />
                                        <div onClick={starts}>
                                            <PandaSvg />
                                        </div>
                                        <CaretRightOutlined />
                                        <audio
                                            preload="auto"
                                            src="https://www.xzmp3.com/down/e40cfb114b2f.mp3"
                                            controls
                                            ref={a}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="imgline">
                                <span style={{ width: line + '%' }}></span>
                            </div>
                        </div>
                        <div className="pic-name">MY相册</div>
                        <div className="pic">
                            {list?.map((item, index) => [<img src={item.img} alt="" key={index} />])}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
