import { Tabs } from 'antd';
import React, { useState, useEffect } from 'react';
import OmsViewMarkdown from './utils';
import './index.less';

import aav from '../MD/home/index.md';
console.log(aav);

const App = () => {
    return (
        <>
            {/* <Tabs
                tabPosition={tabPosition}
                items={list.map((_: any, i: number) => {
                    return {
                        label: _.label,
                        key: _.key,
                        children: _.children(),
                    };
                })}
            /> */}
            <OmsViewMarkdown textContent={aav} darkMode />
        </>
    );
};

export default App;
