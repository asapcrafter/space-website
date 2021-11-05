import React, {Suspense} from 'react'
import '../styles/css/home.css'
import SpaceshipCanvas from './SpaceshipCanvas.js'

const Home = () => {
	// Scrolls to the About section on-click.
	const handleScrollAbout = () => {
		document.getElementById('about-title').scrollIntoView({
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
					<div id='about-title'>ABOUT</div>
					<div id='about-p'>
						<p>Welcome to my portfolio.</p>
						<p>
							I am a web developer with a passion for designing
							polished and beautiful applications. My focus is in desktop
							responsive websites using JavaScript, SASS/CSS, React, and Node.
							On top of the basic technologies, I love to  experiment
							in new areas such as 3D graphics using WebGL and ThreeJS.
						</p>
					</div>
					<div id='about-tools'>TOOLS</div>
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
					</div>
					<div id="work-wrapper">
						<div id="work-container">
							<div id="work-title">WORK</div>
						</div>
					</div>
				</div>
			</div>
			{/* <Suspense fallback={<div>Loading...</div>}>
				<SpaceshipCanvas />
			</Suspense> */}
			<div id="footer-wrapper">
				<div id="footer-container"></div>
			</div>
		</div>
	)
}

export default Home
