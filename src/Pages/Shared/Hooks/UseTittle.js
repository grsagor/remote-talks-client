import React from 'react';
import { useEffect } from 'react';

const UseTittle = title => {
    useEffect(()=>{
        document.title=`${title} | Remote Talks`;
    },[title])
};

export default UseTittle;