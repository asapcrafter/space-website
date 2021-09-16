import React, {Suspense, useMemo} from 'react';
import ReactDOM from 'react-dom';
import Stars from './components/Stars.js';
import Home from './components/Home.js';

const App = () => {
  return (
		<div id="canvas-container">
			<Suspense fallback={<div>Loading...</div>}>
				<Stars/>
				<Home />
			</Suspense>
		</div>
	);
}

export default App;

