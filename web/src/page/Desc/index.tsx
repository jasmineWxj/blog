import React, { useState } from 'react';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
function Desc() {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params.id);
    return <div>123</div>;
}

export default Desc;
