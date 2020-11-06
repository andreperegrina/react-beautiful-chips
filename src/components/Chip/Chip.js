import React from 'react';
import './Chip.css'

const Chip = ({text, onClick, onClickRemove, thumbnail, isDisabled, isSelected}) => {
    const isThumbnailString = typeof thumbnail === 'string';
    const isLeftSideEnable = (onClickRemove == null && thumbnail != null) || isSelected;
    const isRightSideEnable = onClickRemove != null && thumbnail == null;
    const disabledClass = isDisabled ? 'disabled' : '';
    const selectedClass = isSelected ? 'selected' : '';
    return (
        <div className={`Chip ${disabledClass} ${selectedClass}`} onClick={onClick}>
            {isThumbnailString && (
                <div className="thumbnail">
                    {!isSelected && <img
                        src={"https://ui-avatars.com/api/?size=24&rounded=true&background=949494&name=" + encodeURIComponent(thumbnail)}
                        alt=""/>}
                </div>
            )}
            {isSelected && (
                <div className="thumbnail">
                    <svg className='selected-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z"/>
                    </svg>
                </div>
            )}
            {!isThumbnailString && thumbnail != null && thumbnail}
            <span
                className={`text ${isLeftSideEnable ? 'left-side-enabled' : ''} ${isRightSideEnable ? 'right-side-enabled' : ''}`}>{text}</span>
            {onClickRemove && (
                <svg className="remove-icon" onClick={onClickRemove}
                     focusable="false" viewBox="0 0 24 24"
                     aria-hidden="true">
                    <path
                        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                </svg>
            )}
        </div>
    );
};

export default Chip;