import React, {useEffect} from 'react'
import '../styles/css/home.css'
import SpaceshipCanvas from './SpaceshipCanvas.js'
import ProjectCard from './ProjectCard'

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
	useEffect(() => {
		window.history.scrollRestoration = 'manual';
		window.scrollTo(0, 0);
	  }, []);

	// Returns current year for copyright use.
	const getYear = () => new Date().getFullYear();

	// Disables scrolling on the website when first entering
	var keys = {37: 1, 38: 1, 39: 1, 40: 1};

	function preventDefault(e) {
		e.preventDefault();
	}

	function preventDefaultForScrollKeys(e) {
		if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
		}
	}

	var supportsPassive = false;
	try {
		window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
			get: function () { supportsPassive = true; } 
		}));
	} catch(e){}

	var wheelOpt = supportsPassive ? { passive: false } : false;
	var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

	// call this to Disable 
	const disableScroll = () => {
		window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
		window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
		window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
		window.addEventListener('keydown', preventDefaultForScrollKeys, false);
	}

	// call this to Enable
	const enableScroll = () => {
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
		window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
		window.removeEventListener('touchmove', preventDefault, wheelOpt);
		window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
	}

	// Automatically disables scrolling when the page loads
	useEffect(() => {disableScroll(); window.scrollTo(0, 0)});

	return (
		<div id='body'>
			<div id='intro-wrapper'>
				<div id='intro-container'>
					<div id='intro-h1'>STEPHEN TRIEU</div>
					<div id='intro-p'> WEB DEVELOPER | DESIGNER</div>
					<div id='intro-button-container'>
						<div id='intro-button-about' href='#about-title' onClick={() => {handleScrollAbout(); enableScroll()}}>ABOUT</div>
						<div id='intro-button-work' onClick={() => {handleScrollWork(); enableScroll()}}>WORK</div>
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
							polished and beautiful applications. My focus is on creating unique experiences and products using React, Canvas, and Javascript.
							On top of the basic technologies, I also love to  experiment
							in new areas such as 3D graphics using WebGL and ThreeJS.
						</p>
						<p>
							Based in California, I am currently an undergrad at UC Santa Barbara. In my free time, I am always learning new technologies and finding new projects. You can check out some of these ideas down below!
						</p>
					</div>
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
				<div id='about-tools-title'>Technologies</div>
					<div id='about-tools-container'>
						<img src="/assets/icons/html5.png" title="" height="54" alt=""/>
						<img src="/assets/icons/react2.png" title="" height="54" alt=""/>
						<img src="/assets/icons/sass2.png" title="" height="54" alt=""/>
						<img src="/assets/icons/node2.png" title="" height="54" alt=""/>
						<img src="/assets/icons/firebase2.png" title="" height="54" alt=""/>
						<img src="/assets/icons/github2.png" title="" height="54" alt=""/>
						<img src="/assets/icons/git2.png" title="" height="54" alt=""/>
						<img src="/assets/icons/bash.png" title="Bash" height="54" alt=""/>
						<img src="/assets/icons/mapbox.png" title="" height="54" alt=""/>
						<img src="/assets/icons/threejs.png" title="" height="54" alt=""/>
						<img src="/assets/icons/vscode.png" title="" height="54" alt=""/>
						<img src="/assets/icons/webgl.png" title="" height="54" alt=""/>
					</div>
				</div>
				<div id="card-wrapper">
					<div id="card-title">Projects</div>
					<ProjectCard 
						image="/assets/projects/pekoe.jpg"
						title='Shopping Site Landing Page'
					/>
					<ProjectCard
						image='/assets/projects/mcgame.jpg'
						title='Minecraft Memory Game'
					/>
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
