// Project thubnail
import valhalla from 'assets/img/projects/Valhalla.jpg';
import hanabi from 'assets/img/projects/Hanabi.jpg';
import repairGrandson from 'assets/img/projects/Repair-Grandson.jpg';
import onikiri from 'assets/img/projects/Onikiri.jpg';
import artofLife from 'assets/img/projects/ArtofLife.jpg';
import portfolioSite from 'assets/img/projects/PortfolioSite.jpg';
import managarmr from 'assets/img/projects/Managarmr.jpg';
import ghostlyDelivery from 'assets/img/projects/GhostlyDelivery.jpg';
import forestDefenders from 'assets/img/projects/ForestDefenders.jpg';
import morningStar from 'assets/img/projects/MorningStar.jpg';
import magnoliaLab from 'assets/img/projects/MagnoliaLab.jpg';
import entranc from 'assets/img/projects/Entranc.jpg';

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

import managarmr1 from 'assets/img/projects/managarmr/managarmr1.jpg'
import managarmr2 from 'assets/img/projects/managarmr/managarmr2.jpg'
import managarmr3 from 'assets/img/projects/managarmr/managarmr3.jpg'

import ghostlyDelivery1 from 'assets/img/projects/ghostlyDelivery/ghostlyDelivery1.jpg'
import ghostlyDelivery2 from 'assets/img/projects/ghostlyDelivery/ghostlyDelivery2.jpg'
import ghostlyDelivery3 from 'assets/img/projects/ghostlyDelivery/ghostlyDelivery3.jpg'
import { ForestDefendersWidget, GhostlyDeliveryWidget, ManagarmaWidget, OnikiriWidget, RepairGrandsonWidget, MorningStarWidget } from '../../components/ItchWidget/ItchWidget';
export const projectTypes = ["Jam", "Indie", "Web", "Other"]

export const projects = {
    "Valhalla": {
        type: "Indie",
        thumbnail: valhalla,
        shortDesc: "Undergrad Final Year Project",
        desc: "My solo final year project. A multiplayer 1v1 competitive turn-based card game with in-match drafting and deck building elements.",
        tags: ["C#", "Unity", "Node.js", "MySQL"],
        onClickAction: "dialog",
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
            "Credit to arts from internet"
        ],
        palette: {
            primary: "#cccccc",
            secondary: "#e9e9e9",
            chip: "#629ca4",
            text: "#4b777d",
            chip_text: "#e9e9e9"
        }
    },
    "Hanabi": {
        type: "Indie",
        thumbnail: hanabi,
        shortDesc: "Digital ver. of a famous boardgame",
        desc: "A web-based digital demo version of well-known cooperation multiplayer boardgame Hanabi (花火).",
        tags: ["Node.js", "Express.js", "Phaser 3", "Socket.io"],
        onClickAction: "dialog",
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
        link: "http://hanabi-game.herokuapp.com/",
        palette: {
            primary: "#1b1b1b",
            secondary: "#ffd866",
            chip: "#1b1b1b",
            text: "#1b1b1b",
            chip_text: "#ffd866"
        }
    },
    "Repair-Grandson": {
        type: "Jam",
        thumbnail: repairGrandson,
        shortDesc: "Submission of GGJ-HK 2020",
        desc: "A simple game I and my teammates made at Global Game Jam (GGJ) Hong Kong 2020.",
        tags: ["C#", "Unity"],
        onClickAction: "dialog",
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
        link: "https://fhy.itch.io/repair-grandson",
        onHoverComponent: RepairGrandsonWidget,
        palette: {
            primary: "#529095",
            secondary: "#c2c999",
            chip: "#3dc4aa",
            text: "#4e641f",
            chip_text: "#ffffff"
        }
    },
    "Art of Life": {
        type: "Indie",
        thumbnail: artofLife,
        shortDesc: "Causal mobile game project",
        desc: "A mobile simulation game that I am working with my teammates.",
        wip: true,
        tags: ["C#", "Unity"],
        onClickAction: "href",
        link: "https://www.instagram.com/artoflife.official/",
        palette: {
            primary: "#cee1aa",
            secondary: "#e69d3d",
            chip: "#e9dccb",
            text: "#ffffff",
            chip_text: "#807569"
        }
    },
    "Onikiri": {
        type: "Jam",
        thumbnail: onikiri,
        shortDesc: "Submission to Brackeys 2020.2",
        desc: "An action platformer game I and my teammates made at Brackeys Jam 2020.2.",
        tags: ["C#", "Unity"],
        onClickAction: "dialog",
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
        link: "https://fhy.itch.io/onikiri",
        onHoverComponent: OnikiriWidget,
        palette: {
            primary: "#e7e5d9",
            secondary: "#1e1e1e",
            chip: "#e7e5d9",
            text: "#e7e5d9",
            chip_text: "#222222"
        }
    },
    "Managarmr": {
        type: "Jam",
        thumbnail: managarmr,
        shortDesc: "Submission to GGJ-HK 2021",
        desc: "A simple game I and my teammates made at Global Game Jam (GGJ) Hong Kong 2021.",
        tags: ["C#", "Unity"],
        onClickAction: "dialog",
        slides: [
            {
                desc: "Made with \"Lost & Found\" theme featured on Global Game Jam 2020. I finished the map generation nad interaction logic part.",
                image: managarmr1
            },
            {
                desc: "Players are needed to gather food and find a cave for hibernation.",
                image: managarmr3
            },
            {
                desc: "Wolf mother needs to keep an eye on her stamina in order to carry all the children.",
                image: managarmr2
            }
        ],
        authors: [
            "ME",
            "Fhy",
            "1kmountains",
        ],
        link: "https://fhy.itch.io/managarmr",
        onHoverComponent: ManagarmaWidget,
        palette: {
            primary: "#6e6e66",
            secondary: "#e3d79c",
            chip: "#cbb851",
            text: "#453e19",
            chip_text: "#685d28"
        }
    },
    "Ghostly Delivery": {
        type: "Jam",
        thumbnail: ghostlyDelivery,
        shortDesc: "Submission to Brackeys 2021.1",
        desc: "A 2D strategy game I and my teammates made at Brackeys Jam 2021.1.",
        tags: ["C#", "Unity"],
        onClickAction: "dialog",
        slides: [
            {
                desc: "Made with \"Stronger Together\" theme featured on Brackeys Jam 2021.1. I finished the random generation and UI logic part.",
                image: ghostlyDelivery1
            },
            {
                desc: "Players control ghost minions to deliver cargo through the city portal.",
                image: ghostlyDelivery2
            },
            {
                desc: "Players need to reach lv. 10 before using up all life points or remaining minions",
                image: ghostlyDelivery3
            }
        ],
        authors: [
            "ME",
            "Fhy",
            "1kmountains",
        ],
        link: "https://fhy.itch.io/ghostly-delivery",
        onHoverComponent: GhostlyDeliveryWidget,
        palette: {
            primary: "#284a5a",
            secondary: "#f52e54",
            chip: "#255e7b",
            text: "#ffffff",
            chip_text: "#ffffff"
        }
    },
    "Forest Defenders": {
        type: "Jam",
        thumbnail: forestDefenders,
        shortDesc: "Submission to GMTK 2021",
        desc: "A 2D tower defense game I and my teammates made at GMTK Game Jam 2021.",
        tags: ["C#", "Unity"],
        onHoverComponent: ForestDefendersWidget,
        palette: {
            primary: "#b7b048",
            secondary: "#d8c796",
            chip: "#745422",
            text: "#553b1b",
            chip_text: "#d8c796"
        }
    },
    "Morning Star": {
        type: "Jam",
        thumbnail: morningStar,
        shortDesc: "Submission to Brackeys 2021.2",
        desc: "A 2D puzzle game I and my teammates made at Brackeys Game Jam 2021.2.",
        tags: ["C#", "Unity"],
        onHoverComponent: MorningStarWidget,
        palette: {
            primary: "#b7b048",
            secondary: "#694A79",
            chip: "#745422",
            text: "#553b1b",
            chip_text: "#d8c796"
        }
    },
    "Entranc": {
        type: "Web",
        thumbnail: entranc,
        shortDesc: "Hackathon winning Data sci. project",
        desc: "Carpark vacancy query and prediction system for Hong Kong. Winner of HKSTP DTT Programme hackathon.",
        tags: ["HTML", "CSS", "JavaScript", "React.js",],
        onClickAction: "href",
        link: "https://boreashe.github.io/hkstpdtt/",
        palette: {
            primary: "#2C292D",
            secondary: "#343035",
            chip: "#766E79",
            text: "#9B919E",
            chip_text: "#C0B4C4"
        }
    },
    "Magnolia Lab": {
        type: "Web",
        thumbnail: magnoliaLab,
        shortDesc: "\"Mixology meets Herbology\"",
        desc: "My freelance project. Magnolia Lab is a brand which is inspired by the ancient tradition of medicinal liquor infusion, delivering their botanical liqueurs: Magnolia and Roselle.",
        tags: ["HTML", "CSS", "JavaScript", "React.js",],
        onClickAction: "href",
        link: "https://magnolia-lab.com/",
        palette: {
            primary: "#E9DBB9",
            secondary: "#B28147",
            chip: "#FFF5D9",
            text: "#F8F3E8",
            chip_text: "#867056"
        }
    },
    "Portfolio Site": {
        type: "Web",
        thumbnail: portfolioSite,
        shortDesc: "\"Sapientia et prudentia\"",
        desc: "This site! Planning to add more contents to it when I have more stuffs to show.🧙",
        tags: ["HTML", "CSS", "JavaScript", "React.js",],
        palette: {
            primary: "#0f1f33",
            secondary: "#5c4a2d",
            chip: "#706862",
            text: "#f2f2f2",
            chip_text: "#f2f2f2"
        }
    }
}