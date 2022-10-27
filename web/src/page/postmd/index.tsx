import React, { useState, useEffect, useRef } from 'react';
import OmsViewMarkdown from '@/utils/markdown';
import { message } from 'antd';
import './index.less';
import MdEditor from 'md-editor-rt';
// import { postmd } from '@/http/login';
import { postmds } from '@/http/login';
function Postmd() {
    const [text, setText] = useState('# hello md-editor-rt！');
    const titleRef = useRef(null) as any;
    const tagRef = useRef(null) as any;
    const imgeRef = useRef(null) as any;
    const postmd = () => {
        console.log(titleRef.current, tagRef.current, imgeRef.current);

        if (titleRef.current && tagRef.current && imgeRef.current && text) {
            postmds({
                title: titleRef.current.value,
                text: text,
                time: +new Date(),
                tag: tagRef.current.value,
                img: imgeRef.current.value,
            }).then((res: any) => {
                console.log(res);
                if (res.status === 200) {
                    message.success('发送成功');
                    tagRef.current.value = '';
                    imgeRef.current.value = '';
                    titleRef.current.value = '';
                }
            });
        }
    };
    return (
        <div className="md">
            <div className="md-box">
                <MdEditor modelValue={text} onChange={setText} />;
            </div>
            <div>
                <input type="text" ref={titleRef} placeholder="title" />
                <input type="text" ref={tagRef} placeholder="tag" />
                <input type="text" ref={imgeRef} placeholder="img" />
                <button onClick={postmd}>提交</button>
            </div>
        </div>
    );
}

export default Postmd;
