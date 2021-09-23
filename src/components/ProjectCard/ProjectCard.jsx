import React from 'react';
import './ProjectCard.scss';
import { Grid, Card, Typography, CardActionArea, CardMedia, CardActions, CardContent, Button, Chip, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnity, faNodeJs, faReact, faHtml5, faJsSquare, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import indicatorFront from 'assets/img/ui/indicator_front.png';
import indicatorBack from 'assets/img/ui/indicator_back.png';

const tagConfig = [
    { key: "Unity", icon: faUnity, class: "black" },
    { key: "Node.js", icon: faNodeJs, class: "green" },
    { key: "C#", icon: faHashtag, class: "purple" },
    { key: "React.js", icon: faReact, class: "blue" },
    { key: "MySQL", icon: faDatabase, class: "gray" },
    { key: "HTML", icon: faHtml5, class: "orange" },
    { key: "CSS", icon: faCss3Alt, class: "red" },
    { key: "JavaScript", icon: faJsSquare, class: "yellow" }
]

export const ProjectCard = ({ thumbnail, title, desc, type, shortDesc, onClickAction, wip, tags, palette, handleMouseEnterProjectCard, handleMouseExitProjectCard, onHoverComponent }) => {
    const ItchWidget = onHoverComponent;

    const [isHover, setIsHover] = useState(false);
    const [showWidget, setShowWidget] = useState(false);

    // const cardStyles = makeStyles(() => ({
    //     root: {
    //         backgroundColor: themeCardColor ? themeCardColor : undefined,
    //         color: themeTextColor ? themeTextColor : undefined,
    //         transition: "all .5s ease 0s"
    //     }
    // }));

    // const cardTextStyles = makeStyles(() => ({
    //     root: {
    //         color: themeTextColor ? themeTextColor : undefined,
    //         transition: "all .5s ease 0s"
    //     }
    // }));

    // const chipStyles = makeStyles(() => ({
    //     root: {
    //         backgroundColor: themeChipColor ? themeChipColor : undefined,
    //         color: themeChipTextColor ? themeChipTextColor : undefined,
    //         transition: "all .5s ease 0s"
    //     }
    // }));

    // const iconStyles = makeStyles(() => ({
    //     root: {
    //         backgroundColor: "rgba(0,0,0,0)",
    //         color: themeChipTextColor ? themeChipTextColor : undefined,
    //         transition: "all .5s ease 0s"
    //     }
    // }));

    // const cardClasses = cardStyles();
    // const cardTextClasses = cardTextStyles();
    // const chipClasses = chipStyles();
    // const iconClasses = iconStyles();

    return (
        // <Card
        //     className={`project-card`}
        //     onMouseEnter={() => {
        //         handleMouseEnterProjectCard(title);
        //         setShowWidget(true);
        //     }}
        //     onMouseLeave={() => {
        //         handleMouseExitProjectCard();
        //         setShowWidget(false);
        //     }}
        // >
        //     <CardActionArea
        //         className="project-card-action-area"
        //         onClick={onClickAction ? onClickAction : null}
        //     >
        //         {
        //             ItchWidget && <ItchWidget style={{ opacity: onHoverComponent && showWidget ? 1 : 0 }} />
        //         }
        //         <CardMedia
        //             className={`project-card-thumbnail ${onHoverComponent ? "enable-hover" : ""}`}
        //             image={thumbnail}
        //             title={title}
        //         />
        //         <CardContent className={`project-card-content ${cardClasses.root}`}>
        //             <Typography gutterBottom variant="h5" component="h2" className={`project-card-title ${cardTextClasses.root}`}>
        //                 {title.toUpperCase()} {wip === true && <WIPSuffix />}
        //             </Typography>
        //             <Typography variant="body2" component="p" className={`project-card-desc ${cardTextClasses.root}`}>
        //                 {desc}
        //             </Typography>
        //         </CardContent>
        //     </CardActionArea>
        //     <CardActions className={`project-card-footer ${cardClasses.root}`}>
        //         {
        //             tags && tags.map(t => {
        //                 return (
        //                     <Chip
        //                         className={`project-card-chip ${!themeChipColor ? (tagConfig.find(tag => tag.key === t) ? tagConfig.find(tag => tag.key === t).class : "default") : chipClasses.root}`}
        //                         label={t}
        //                         size="small"
        //                         icon={
        //                             tagConfig.find(tag => tag.key === t)
        //                                 ?
        //                                 <FontAwesomeIcon
        //                                     className={
        //                                         !themeChipColor
        //                                             ? (tagConfig.find(tag => tag.key === t)
        //                                                 ? tagConfig.find(tag => tag.key === t).class + " lite"
        //                                                 : "default lite")
        //                                             : iconClasses.root
        //                                     }
        //                                     icon={tagConfig.find(tag => tag.key === t).icon}
        //                                     style={{
        //                                         paddingLeft: "5px",
        //                                     }}
        //                                 />
        //                                 :
        //                                 undefined
        //                         }
        //                     />
        //                 )
        //             })
        //         }
        //     </CardActions>
        // </Card>
        <div className={`project-card`}>
            <ButtonBase className={`project-card-button-base`} style={{ backgroundColor: isHover ? palette.secondary : "transparent" }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <div style={{ backgroundImage: `url(${thumbnail})` }} className={`project-background`} />
            </ButtonBase>
            <div className="project-card-title" style={{ color: isHover ? palette.text : undefined }}>
                {title.toUpperCase()} {wip === true && <WIPSuffix />}
            </div>
            <div className="project-card-desc" style={{ color: isHover ? palette.text : undefined }}>
                {shortDesc}
            </div>

            {/* <div className="project-card-left-indicator" style={{ backgroundImage: `url(${indicatorFront})` }}>
                <div className="project-card-type">
                    {type}
                </div>
            </div>

            <div className="project-card-left-indicator-back" style={{ backgroundImage: `url(${indicatorBack})` }}>
            </div>

            <div className="project-card-right-indicator" style={{ backgroundImage: `url(${indicatorFront})` }}>
            </div>

            <div className="project-card-right-indicator-back" style={{ backgroundImage: `url(${indicatorBack})` }}>
            </div> */}

        </div>
    )
}

const WIPSuffix = () => {
    return (
        <span className="wipText">(WIP)</span>
    )
}