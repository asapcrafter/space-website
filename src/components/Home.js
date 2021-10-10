import React from 'react'
import '../styles/css/home.css'

const Home = () => {
	return (
		<div id='body'>
			<div id='intro-wrapper'>
				<div id='intro-container'>
					<div id='intro-h1'>STEPHEN TRIEU</div>
					<div id='intro-p'> WEB DEVELOPER | DESIGNER</div>
					<div id='intro-button-container'>
						<p id='intro-button-about'>ABOUT</p>
						<p id='intro-button-work'>WORK</p>
					</div>
				</div>
			</div>
			<div id='about-wrapper'>
				<div id='about-container'>
					<div id='about-title'>ABOUT</div>
					<div id='about-p'>
						<p>Welcome to my portfolio.</p>
						<p>
							I am a web developer developer with a passion for designing
							polished and beautiful applications. My focus is in desktop
							responsive websites using JavaScript, SASS/CSS, React, and Node.
							On top of the basic technologies, I love to constantly experiment
							in new fields such as 3D graphics using WebGL and ThreeJS.
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
				</div>
			</div>
		</div>
	)
}

export default Home
