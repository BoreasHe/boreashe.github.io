import React from 'react';
import diamond from 'assets/img/ui/diamond.png';
import './HomePageTitle.scss';
export const HomePageTitle = () => {
    return (
        <>
            <div id="name" className="align-middle">BOREAS HE</div>
            <div className="horizontal">
                <div className="hr"></div>
                <img src={diamond} className="diamond" alt="" />
                <div className="hr"></div>
            </div>
            <div id="top-desc" className="align-middle">GAME DEVELOPER</div>
        </>
    )
}