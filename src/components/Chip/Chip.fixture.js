import React from 'react';
import {useValue} from 'react-cosmos/fixture';
import Chip from "./Chip";

const ChipFixture = () => {
    const [isSelected] = useValue('isSelected', {defaultValue: false});
    const [isDisabled] = useValue('isDisabled', {defaultValue: false});
    return (
        <Chip
            text='Text'
            thumbnail='Iron Man'
            onClickRemove={() => {
            }}
            isDisabled={isDisabled}
            isSelected={isSelected}
        />
    )
};
export default ChipFixture;