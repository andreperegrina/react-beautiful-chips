import React from 'react';
import './cosmos.css'

const cosmoDecorator = ({children}) => <div
    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>{children}</div>;

export default cosmoDecorator;