import React from 'react';
import {useValue} from 'react-cosmos/fixture';
import Icon from "./Icon.js";

const IconFixture = () => {
    const [name] = useValue('name', {defaultValue: 'like'});
    return (
        <Icon name={name}/>
    )
};
export default IconFixture;