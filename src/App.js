import React, {Suspense} from 'react';
import Stars from './components/Stars.js';
// import Stats from 'three/examples/jsm/libs/stats.module'
import DebugStats from './components/Stats.js'

const App = () => {

  return (
		<div id="canvas-container">
			<Suspense fallback={<div>Loading...</div>}>
				<Stars />
				<DebugStats />
			</Suspense>
		</div>
	);
}

export default App;

