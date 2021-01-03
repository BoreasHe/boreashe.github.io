import React from 'react';
import './SectionTitle.scss';
import diamond from 'assets/img/ui/diamond.png';

export const SectionTitle = ({ titleText }) => {
    return (
        <>
            <div className="section-header white-text">
                <span className="section-title">{titleText.toUpperCase()}</span>
                <div className="section-horizontal">
                    <div className="section-hr white-hr"></div>
                    <img src={diamond} alt="" className="section-diamond" />
                    <div className="section-hr white-hr"></div>
                </div>
            </div>
        </>
    );
};