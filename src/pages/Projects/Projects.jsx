import React, { useState } from 'react';
import './Projects.scss';
import { Container, Grid } from "@material-ui/core";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { ProjectDetailDialog } from '../../components/ProjectDetailDialog/ProjectDetailDialog'

// Project thubnail
import valhalla from 'assets/img/projects/Valhalla.jpg';
import hanabi from 'assets/img/projects/Hanabi.jpg';
import repairGrandson from 'assets/img/projects/Repair-Grandson.jpg';
import onikiri from 'assets/img/projects/Onikiri.jpg';
import artofLife from 'assets/img/projects/ArtofLife.jpg';
import portfolioSite from 'assets/img/projects/PortfolioSite.jpg';

// Project snapshots
import valhalla1 from 'assets/img/projects/valhalla/valhalla1.jpg'
import valhalla2 from 'assets/img/projects/valhalla/valhalla2.jpg'
import valhalla3 from 'assets/img/projects/valhalla/valhalla3.jpg'
import valhalla4 from 'assets/img/projects/valhalla/valhalla4.jpg'
import valhalla5 from 'assets/img/projects/valhalla/valhalla5.jpg'

import hanabi1 from 'assets/img/projects/hanabi/hanabi1.jpg'
import hanabi2 from 'assets/img/projects/hanabi/hanabi2.jpg'
import hanabi3 from 'assets/img/projects/hanabi/hanabi3.jpg'
import hanabi4 from 'assets/img/projects/hanabi/hanabi4.jpg'

import onikiri1 from 'assets/img/projects/onikiri/onikiri1.jpg'
import onikiri2 from 'assets/img/projects/onikiri/onikiri2.jpg'
import onikiri3 from 'assets/img/projects/onikiri/onikiri3.jpg'

import repairGrandson1 from 'assets/img/projects/repair-grandson/repair-grandson1.jpg'
import repairGrandson2 from 'assets/img/projects/repair-grandson/repair-grandson2.jpg'
import repairGrandson3 from 'assets/img/projects/repair-grandson/repair-grandson3.jpg'

const Projects = () => {

    const [openProjectDetailDialog, setOpenProjectDetailDialog] = useState(false);

    const [projectDetailDialogData, setProjectDetailDialogData] = useState();

    const setProjectDetailDialog = (data) => {
        setProjectDetailDialogData(data);
        setOpenProjectDetailDialog(true);
    }

    return (
        <>
            {projectDetailDialogData && <ProjectDetailDialog data={projectDetailDialogData} toggleOpen={openProjectDetailDialog} onClose={() => { setOpenProjectDetailDialog(false) }} />}
            <Container id="projects" name="home" className="section-wrapper">
                <SectionTitle titleText="PROJECTS" />
                <Grid container spacing={4} alignContent="space-around" alignItems="space-around">
                    <ProjectCard
                        thumbnail={valhalla}
                        title="Valhalla"
                        desc="My solo final year project. A multiplayer 1v1 competitive turn-based card game with in-match drafting and deck building elements."
                        tags={["C#", "Unity", "Node.js", "MySQL"]}
                        onClickAction={() => setProjectDetailDialog({
                            title: "Valhalla",
                            slides: [
                                {
                                    desc: "A Node.js matchmaking server is used to match players with similar rankings.",
                                    image: valhalla1
                                },
                                {
                                    desc: "The purpose of the game is to destroy the enemy's castle. Players have to place cards on the map to play it.",
                                    image: valhalla2
                                },
                                {
                                    desc: "Players need to draft three factions in the match at first and they have a equal start.",
                                    image: valhalla3
                                },
                                {
                                    desc: "Players can enhance their decks through the technology tree.",
                                    image: valhalla4
                                },
                                {
                                    desc: "Players can view the card properties interface through the hovering the card.",
                                    image: valhalla5
                                }
                            ],
                            authors: [
                                "ME",
                                "Credit to artworks from internet"
                            ]
                        })}
                    />
                    <ProjectCard
                        thumbnail={hanabi}
                        title="Hanabi"
                        desc="A web-based digital demo version of well-known cooperation multiplayer boardgame Hanabi (花火)."
                        tags={["Node.js", "Express.js", "Phaser 3", "Socket.io"]}
                        onClickAction={() => setProjectDetailDialog({
                            title: "Hanabi",
                            slides: [
                                {
                                    desc: "A Node.js lobby server and a webpage frontend is used to let players to join rooms.",
                                    image: hanabi1
                                },
                                {
                                    desc: "Players need to play firework cards sequentially to process the game.",
                                    image: hanabi2
                                },
                                {
                                    desc: "Players can give hints to other players in order to let them know what cards are in their hand.",
                                    image: hanabi3
                                },
                                {
                                    desc: "The detail rules of this game can be found at https://www.ultraboardgames.com/hanabi/game-rules.php.",
                                    image: hanabi4
                                }
                            ],
                            authors: [
                                "ME"
                            ],
                            link: "http://hanabi-game.herokuapp.com/"
                        })}
                    />
                    <ProjectCard
                        thumbnail={repairGrandson}
                        title="Repair-Grandson"
                        desc="A simple game I and my teammates made at Global Game Jam (GGJ) Hong Kong 2020."
                        tags={["C#", "Unity"]}
                        onClickAction={() => setProjectDetailDialog({
                            title: "Repair-Grandson",
                            slides: [
                                {
                                    desc: "Made with \"Repair\" theme featured on Global Game Jam 2020. I finished the game flow and interaction logic part.",
                                    image: repairGrandson1
                                },
                                {
                                    desc: "Players are needed to gather materials in the level to finish their objectives in the game.",
                                    image: repairGrandson3
                                },
                                {
                                    desc: "This game is a story-driven game and it contains an alternative ending.",
                                    image: repairGrandson2
                                }
                            ],
                            authors: [
                                "ME",
                                "Fhy",
                                "1kmountains",
                                "Ning"
                            ],
                            link: "https://fhy.itch.io/repair-grandson"
                        })}
                    />
                    <ProjectCard
                        thumbnail={onikiri}
                        title="Onikiri"
                        desc="An action platformer game I and my teammates made at Brackeys Jam 2020.2."
                        tags={["C#", "Unity"]}
                        onClickAction={() => setProjectDetailDialog({
                            title: "Onikiri",
                            slides: [
                                {
                                    desc: "Made with \"Rewind\" theme featured on Brackeys Jam 2020.2. I finished the rewind mechanism part.",
                                    image: onikiri1
                                },
                                {
                                    desc: "Apart from enemies, players will also face several control challenges during the level.",
                                    image: onikiri2
                                },
                                {
                                    desc: "Players can rewind their action as long as they are pressing on the rewind key. They can release the rewind key to resume the game.",
                                    image: onikiri3
                                }
                            ],
                            authors: [
                                "ME",
                                "Fhy",
                                "1kmountains"
                            ],
                            link: "https://fhy.itch.io/onikiri"
                        })}
                    />
                    <ProjectCard
                        thumbnail={artofLife}
                        title="Art of Life"
                        desc="A mobile simulation game that I am working with my teammates."
                        wip={true}
                        tags={["C#", "Unity"]}
                        onClickAction={() => window.open("https://www.instagram.com/artoflife.official/")}
                    />
                    <ProjectCard
                        thumbnail={portfolioSite}
                        title="Portfolio Site"
                        desc="This site! Planning to add more contents to it when I have more stuffs to show.😏"
                        tags={["HTML", "CSS", "JavaScript", "React.js",]}
                    />
                </Grid>
            </Container>
        </>
    );
};

export default Projects;