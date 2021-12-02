import React, {Suspense} from 'react'
import '../styles/css/home.css'
import SpaceshipCanvas from './SpaceshipCanvas.js'

const Home = () => {
	// Scrolls to the About section on-click.
	const handleScrollAbout = () => {
		document.getElementById('about-wrapper').scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest'
		});
	}

	// Scrolls to the Work section on-click.
	const handleScrollWork = () => {
		document.getElementById('work-title').scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest'
		});
	}

	// Website scrolls to the top on page reload.
	window.onbeforeunload = setTimeout(window.scrollTo(0, 0), 5000)

	// Returns current year for copyright use.
	const getYear = () => {
		return new Date().getFullYear();
	}

	return (
		<div id='body'>
			<div id='intro-wrapper'>
				<div id='intro-container'>
					<div id='intro-h1'>STEPHEN TRIEU</div>
					<div id='intro-p'> WEB DEVELOPER | DESIGNER</div>
					<div id='intro-button-container'>
						<div id='intro-button-about' href='#about-title' onClick={handleScrollAbout}>ABOUT</div>
						<div id='intro-button-work' onClick={handleScrollWork}>WORK</div>
					</div>
				</div>
			</div>
			<div id='about-wrapper'>
				<div id='about-container'>
					<div id='about-title'></div>
					<div id='about-p'>
						<p>Welcome to my portfolio.</p>
						<p>
							I am a web developer with a passion for designing
							polished and beautiful applications. My focus is on creating unique experiences using React, Canvas, and Javascript.
							On top of the basic technologies, I also love to  experiment
							in new areas such as 3D graphics using WebGL and ThreeJS.
						</p>
						<p>
							Based in California, I am currently an undergrad at UC Santa Barbara. In my free time, I am always learning new technologies and finding new projects. You can check out some of these ideas down below. 
						</p>
					</div>

					{/* <div id='about-tools'>TOOLS</div>
					<div id='about-tools-container'>
						<div className='about-tech-container'>
							<div className='about-tech-title'>LANGUAGES</div>
							<div className='about-tech-content'>
								<p>JavaScript (ES6)</p>
								<p>TypeScript</p>
								<p>HTML5</p>
								<p>SASS/CSS3</p>
							</div>
						</div>
						<div className='about-tech-container'>
							<div className='about-tech-title'>WEB</div>
							<div className='about-tech-content'>
								<p>React</p>
								<p>Node.js</p>
								<p>Webpack</p>
								<p>JSON</p>
							</div>
						</div>
						<div className='about-tech-container'>
							<div className='about-tech-title'>TOOLS</div>
							<div className='about-tech-content'>
								<p>Web Service APIs</p>
								<p>Git</p>
								<p>VSCode</p>
								<p>Jest</p>
							</div>
						</div>
					</div> */}

					{/* Icon link: https://www.flaticon.com/packs/social-media-171 */}
					<div id="socials">
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
							<img className="social-logo" src="/assets/facebook-white.png" alt="fb" width="50" height="50"/>
						</a>
						<a href="https://github.com/asapcrafter" target="_blank" rel="noopener noreferrer">
							<img className="social-logo" src="/assets/gh.png" alt="gh" width="50" height="50"/>
						</a>
						<a href="https://www.linkedin.com/in/stephen-trieu-2170011b8/" target="_blank" rel="noopener noreferrer">
							<img className="social-logo" src="/assets/linkedin.png" alt="linkedin" width="50" height="50"/>
						</a>
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
							<img className="social-logo" src="/assets/twitter.png" alt="twitter" width="50" height="50"/>
						</a>
					</div>
					<div id="work-wrapper">
						<div id="work-container">
							<div id="work-title"></div>
						</div>
					</div>
				</div>
			</div>
			<div id="footer-wrapper">
				<div id="footer-container">
					<small>© {getYear()} Stephen Trieu. All Rights Reserved.</small>
				</div>
			</div>
		</div>
	)
}

export default Home
