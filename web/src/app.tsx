import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

function App() {
    const [text, setText] = useState('hello md-editor-rt！');
    return <MdEditor modelValue={text} onChange={setText} />;
}

export default App;
