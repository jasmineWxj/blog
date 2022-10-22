import './index.less';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteConfigs from './router';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
// 热更新
if (module && module.hot) {
    module.hot.accept();
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <div>
        <div className="header">header</div>
        <BrowserRouter>
            <RouteConfigs></RouteConfigs>
        </BrowserRouter>
    </div>,
);
