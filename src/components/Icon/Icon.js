import React from 'react';
import './Icon.css'

const ICONS = {
    like: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path
                d="M21.216 8h-2.216v-1.75l1-3.095v-3.155h-5.246c-2.158 6.369-4.252 9.992-6.754 10v-1h-8v13h8v-1h2l2.507 2h8.461l3.032-2.926v-10.261l-2.784-1.813zm.784 11.225l-1.839 1.775h-6.954l-2.507-2h-2.7v-7c3.781 0 6.727-5.674 8.189-10h1.811v.791l-1 3.095v4.114h3.623l1.377.897v8.328z"/>
        </svg>
    ),
    heart: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path
                d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
        </svg>
    ),
    share: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z"/>
        </svg>
    )
};

const Icon = ({name}) => {
    return (
        <div className='Icon'>
            {ICONS[name]}
        </div>
    );
};

export default Icon;