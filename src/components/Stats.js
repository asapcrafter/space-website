import Stats from 'three/examples/jsm/libs/stats.module'

const DebugStats = () => {
	const stats = new Stats();
	stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
	document.body.appendChild( stats.dom );
	stats.dom.style.visibility = 'hidden';

    // Toggles visibility on keypress
    document.addEventListener('keydown', function (event) {
        if (event.key === '\\') stats.dom.style.visibility = 'visible'
      });
	
	function animate() {
		stats.begin();
		stats.end();
	
		requestAnimationFrame( animate );
	}
	
	requestAnimationFrame( animate );

    return null
}

export default DebugStats;
