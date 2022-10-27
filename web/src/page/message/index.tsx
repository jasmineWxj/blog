import React, { useState, useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import './index.less';
import getcookie from '@/utils/getcookie';
import { message, getmessage, delmessage } from '@/http/login';
import { MsgChild } from '@/page/maschild/index';
import { message as ccc } from 'antd';
import timestampToTime from '@/utils/time';
function Message() {
    const anim = useRef(null) as any;
    const [, setLottie] = useState() as any;
    const msgvalueRef = useRef(null) as any;
    const massageRef = useRef([]) as any;
    const [massage, setMassage] = useState([]) as any;
    const ccceRef = useRef({}) as any;

    const msgpost = () => {
        const id = getcookie('id');
        if (msgvalueRef.current.value && id) {
            message({
                name: id,
                value: msgvalueRef.current.value,
                time: +new Date(),
                pic: '',
            }).then((res: any) => {
                if (res.status === 200) {
                    ccc.success('发送成功');
                    msgvalueRef.current.value = '';
                }
            });
            setMassage([
                {
                    name: id,
                    value: msgvalueRef.current.value,
                    time: +new Date(),
                },
                ...massage,
            ]);
        }
    };

    useEffect(() => {
        lottie.loadAnimation({
            container: anim.current,
            // 渲染方式
            renderer: 'svg',
            // autoplay 自动播放
            // 是否循环播放
            loop: true,
            // 路径
            path: 'https://assets2.lottiefiles.com/packages/lf20_ch1qp0yv.json',
        });
        getmessage({}).then((res: any) => {
            if (res.status === 200) {
                setMassage(res.res);
                massageRef.current = res.res;
            }
        });
    }, []);

    const delect = (index: number, id: number) => {
        console.log(index);
        delmessage({
            id,
            status: 1,
        });
        setMassage(() => {
            massage.splice(index, 1);
            console.log(massage);

            return [...massage];
        });
    };
    return (
        <div className="message-box">
            <div className="message-list">
                <div className="title">评论</div>
                <div className="list">
                    {massage.map((item: any, index: number) => {
                        return (
                            <div className="list-con" key={index}>
                                <img
                                    src={
                                        item.pic
                                            ? item.pic
                                            : 'https://cdn.jim-nielsen.com/ios/512/dislyte-2022-06-08.png'
                                    }
                                    alt=""
                                />
                                <div className="list-text-box">
                                    <div className={item.name == getcookie('id') ? 'list-name color' : 'list-name'}>
                                        {item.name}
                                    </div>
                                    <div className="list-text">{item.value}</div>
                                    <div className="list-time">{timestampToTime(item.time)}</div>
                                </div>
                                {item.name == getcookie('id') ? (
                                    <button className="delet" onClick={() => delect(index, item.id)}>
                                        删除
                                    </button>
                                ) : (
                                    ''
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="message-img" ref={anim}></div>

            <div className="message-text">
                <img src="https://cdn.jim-nielsen.com/ios/512/dislyte-2022-06-08.png" alt="" />
                <input type="text" placeholder="请发送您的意见" ref={msgvalueRef} />
                <button className="msgpost" onClick={msgpost}>
                    发送
                </button>
            </div>
        </div>
    );
}

export default Message;
