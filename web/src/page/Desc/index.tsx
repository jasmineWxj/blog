import React, { useState, useEffect } from 'react';
import OmsViewMarkdown from '@/utils/markdown';
import './index.less';
import { getmd } from '@/http/login';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import MdEditor from 'md-editor-rt';
import getcookie from '@/utils/getcookie';

function Desc() {
    const navigate = useNavigate();
    const params = useParams();
    const [md, setMd] = useState({}) as any;
    const list = [
        {
            name: '哇哈哈',
            text: 'ni ta ma de zhen niu b',
            img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.56662o4yV01NUau07Nm5fwAAAA?pid=ImgDet&rs=1',
            time: '12/12/12/12',
        },
        {
            name: '哇哈哈',
            text: 'ni ta ma de zhen niu b',
            img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.56662o4yV01NUau07Nm5fwAAAA?pid=ImgDet&rs=1',
            time: '12/12/12/12',
        },
        {
            name: '哇哈哈',
            text: 'ni ta ma de zhen niu b',
            img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.56662o4yV01NUau07Nm5fwAAAA?pid=ImgDet&rs=1',
            time: '12/12/12/12',
        },
    ];
    useEffect(() => {
        getmd({ id: params.id }).then((res: any) => {
            setMd(res.res[0]);
        });
    }, []);
    return (
        <div className="md-box-cc">
            <div
                className="md-img"
                style={{
                    background: 'url(https://www.splitshire.com/wp-content/uploads/2021/10/SplitShire-20-4896.jpg)',
                    backgroundSize: 'cover',
                }}
            ></div>
            <div className="md-box">
                {/* <OmsViewMarkdown textContent={md.text} darkMode /> */}
                <MdEditor modelValue={md.text} previewOnly />
            </div>
            <div className="msg">
                <img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.56662o4yV01NUau07Nm5fwAAAA?pid=ImgDet&rs=1" alt="" />
                <input type="text" name="" id="" placeholder="请友善发送评论" />
                <button>发送</button>
            </div>
            {list.map((item, index) => {
                return (
                    <div className="list-msg" key={index}>
                        <img
                            src="https://tse2-mm.cn.bing.net/th/id/OIP-C.56662o4yV01NUau07Nm5fwAAAA?pid=ImgDet&rs=1"
                            alt=""
                        />
                        <div className="list-text">
                            <div className={item.name == getcookie('id') ? 'list-name color' : 'list-name'}>
                                {item.name}
                            </div>
                            <div className="text">{item.text}</div>
                            <p className="time">{item.time}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Desc;
