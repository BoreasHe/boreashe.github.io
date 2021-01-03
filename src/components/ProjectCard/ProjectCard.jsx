import React from 'react';
import './ProjectCard.scss';
import { Grid, Card, Typography, CardActionArea, CardMedia, CardActions, CardContent, Button, Chip } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnity, faNodeJs, faReact, faHtml5, faJsSquare, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faHashtag } from '@fortawesome/free-solid-svg-icons';

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

export const ProjectCard = ({ thumbnail, title, desc, onClickAction, wip, tags }) => {
    return (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className="project-card-grid">
            <Card className="project-card">
                <CardActionArea
                    className="project-card-action-area"
                    onClick={onClickAction ? onClickAction : null}
                >
                    <CardMedia
                        className="project-card-thumbnail"
                        image={thumbnail}
                        title={title}
                    />
                    <CardContent className="project-card-content">
                        <Typography gutterBottom variant="h5" component="h2" className="project-card-title">
                            {title} {wip === true && <WIPSuffix />}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="project-card-desc">
                            {desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="project-card-footer">
                    {
                        tags && tags.map(t => {
                            return (
                                <Chip
                                    className={`project-card-chip ${tagConfig.find(tag => tag.key === t) ? tagConfig.find(tag => tag.key === t).class : "default"}`}
                                    label={t}
                                    icon={
                                        tagConfig.find(tag => tag.key === t)
                                            ?
                                            <FontAwesomeIcon className={tagConfig.find(tag => tag.key === t) ? tagConfig.find(tag => tag.key === t).class : "default"} icon={tagConfig.find(tag => tag.key === t).icon} style={{ paddingLeft: "5px" }} />
                                            :
                                            undefined
                                    }
                                />
                            )
                        })
                    }
                </CardActions>
            </Card>
        </Grid>
    )
}

const WIPSuffix = () => {
    return (
        <span className="wipText">(WORK IN PROGRESS)</span>
    )
}