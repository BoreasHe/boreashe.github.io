import React, { useState } from 'react';
import './Projects.scss';
import { Container, Grid } from "@material-ui/core";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { ProjectDetailDialog } from '../../components/ProjectDetailDialog/ProjectDetailDialog'
import { projects, projectTypes } from './projectConfig';
import { Flipped, Flipper } from 'react-flip-toolkit';

const Projects = ({ onThemeChanged }) => {

    const [openProjectDetailDialog, setOpenProjectDetailDialog] = useState(false);

    const [projectDetailDialogData, setProjectDetailDialogData] = useState();

    const [hoveredProjectCard, setHoveredProjectCard] = useState();

    const [themeCardColor, setThemeCardColor] = useState();

    const [themeChipColor, setThemeChipColor] = useState();

    const [themeTextColor, setThemeTextColor] = useState();

    const [themeChipTextColor, setThemeChipTextColor] = useState();

    const [projectTypeFilter, setProjectTypeFilter] = useState(undefined);

    const [filteredKey, setFilteredKey] = useState(undefined);

    const handleMouseEnterProjectCard = (title) => {
        setHoveredProjectCard(title);
        onThemeChanged(projects[title].palette);
        setThemeCardColor(projects[title].palette.secondary);
        setThemeChipColor(projects[title].palette.chip);
        setThemeTextColor(projects[title].palette.text);
        setThemeChipTextColor(projects[title].palette.chip_text);
    }

    const handleMouseExitProjectCard = () => {
        setHoveredProjectCard(undefined);
        onThemeChanged(undefined);
        setThemeCardColor(undefined);
        setThemeChipColor(undefined);
        setThemeTextColor(undefined);
        setThemeChipTextColor(undefined);
    }

    const handleClickFilter = (filter) => {
        setProjectTypeFilter(filter);
        setJoinedFilteredKey(filter);
    }

    const utilGetKeyByTitle = (title) => {
        return title.replaceAll("-", "").replaceAll(" ", "").toLowerCase();
    }

    const setJoinedFilteredKey = (filter) => {
        const result = Object.entries(projects).filter(([title, project]) => !(project.type === filter || filter === undefined)).map(([title, project]) => utilGetKeyByTitle(title));
        console.log(result);
        setFilteredKey(result);
    }

    const setProjectDetailDialog = (data) => {
        setProjectDetailDialogData(data);
        setOpenProjectDetailDialog(true);
    }

    const ProjectTabBar = () => (
        <div className="project-tab-bar-container" style={{ backgroundColor: themeCardColor ?? "#413F42", transition: "all .5s ease 0s" }}>
            {
                [
                    <div className={`project-tab-bar-tab ${projectTypeFilter === undefined ? "green" : ""}`} onClick={() => handleClickFilter(undefined)}>
                        <div className={`project-tab-bar-tab-text ${projectTypeFilter === undefined ? "green" : ""}`}>
                            ALL
                        </div>
                    </div>,

                    projectTypes.map(type => (
                        <div className={`project-tab-bar-tab ${projectTypeFilter === type ? "green" : ""}`} onClick={() => handleClickFilter(type)}>
                            <div className={`project-tab-bar-tab-text ${projectTypeFilter === type ? "green" : ""}`}>
                                {type.toUpperCase()}
                            </div>
                        </div>
                    ))
                ]
            }
        </div>
    )

    const WrappedProjectCard = ({ props, flippedProps }) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className="project-card-grid" {...flippedProps}>
            <ProjectCard
                handleMouseEnterProjectCard={handleMouseEnterProjectCard}
                handleMouseExitProjectCard={handleMouseExitProjectCard}
                palette={props.project.palette}
                thumbnail={props.project.thumbnail}
                title={props.title}
                desc={props.project.desc}
                type={props.project.type}
                tags={props.project.tags}
                shortDesc={props.project.shortDesc}
                onClickAction={() => {
                    switch (props.project.onClickAction) {
                        case "dialog":
                            setProjectDetailDialog({
                                title: props.title,
                                slides: props.project.slides,
                                authors: props.project.authors,
                                link: props.project.link
                            });
                            break;
                        case "href":
                            window.open(props.project.link);
                            break;
                        default:
                            break;
                    }
                }}
                onHoverComponent={props.project.onHoverComponent}
                wip={props.project.wip}
            />
        </Grid>
    )

    return (
        <>
            {projectDetailDialogData && <ProjectDetailDialog data={projectDetailDialogData} toggleOpen={openProjectDetailDialog} onClose={() => { setOpenProjectDetailDialog(false) }} />}
            <Container id="projects" name="projects" className="section-wrapper">
                <SectionTitle titleText="PROJECTS" />
                <ProjectTabBar />
                <Flipper flipKey={filteredKey}>
                    <Grid container spacing={4} alignContent="center" alignItems="center" justify="center" className="projects-container">
                        {
                            Object.entries(projects).filter(([title, project]) => project.type === projectTypeFilter || projectTypeFilter === undefined).map(([title, project]) => (
                                <Flipped key={utilGetKeyByTitle(title)} flipId={utilGetKeyByTitle(title)}>
                                    {(flippedProps) => { return (<WrappedProjectCard flippedProps={flippedProps} props={{ title: title, project: project }} />) }}
                                </Flipped>
                            ))
                        }
                    </Grid>
                </Flipper>
            </Container>
        </>
    );

};

export default Projects;