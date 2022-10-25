import React, { useState, useEffect } from 'react';
import OmsViewMarkdown from '@/utils/markdown';
import './index.less';
import { getmd } from '@/http/login';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
function Desc() {
    const navigate = useNavigate();
    const params = useParams();
    const [md, setMd] = useState({}) as any;
    useEffect(() => {
        getmd({ id: params.id }).then((res: any) => {
            setMd(res.res[0]);
            console.log(res.res[0]);
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
                <OmsViewMarkdown textContent={md.text} darkMode />
            </div>
        </div>
    );
}

export default Desc;
