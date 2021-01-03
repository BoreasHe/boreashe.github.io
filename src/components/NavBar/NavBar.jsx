import React from 'react';
import { AppBar } from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faIdBadge, faToolbox, faMagic, faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll';
import './NavBar.scss';

export const NavBar = () => {
	return (
		<AppBar position="fixed" className="navbar" elevation={0}>
			<ul className="navbar-list">
				<NavBarHref hrefName="home" icon={faHome} />
				{/* <NavBarHref hrefName="profile" icon={faIdBadge} />
				<NavBarHref hrefName="skills" icon={faToolbox} />
				<NavBarHref hrefName="specialism" icon={faMagic} /> */}
				<NavBarHref hrefName="projects" icon={faLaptopCode} />
				{/* <NavBarHref hrefName="contact" icon={faEnvelope} /> */}
			</ul>
		</AppBar>
	)
};

const NavBarHref = ({ hrefName, icon }) => {
	return (
		<>
			<li className="nav-item nav-text">
				<Link activeClass="active" to={hrefName.toLowerCase()} spy={true} smooth={true} duration={500} >
					<a
						className="nav-link"
						href={`#${hrefName}`}
					>
						{hrefName.toUpperCase()}
					</a>
				</Link>
			</li>

			<li className="nav-item nav-icon">
				<Link activeClass="active" to={hrefName.toLowerCase()} spy={true} smooth={true} duration={500} >
					<a
						className="nav-link"
						href={`#${hrefName}`}
					>
						<FontAwesomeIcon icon={icon} />
					</a>
				</Link>
			</li>
		</>
	)
}

export default NavBar;