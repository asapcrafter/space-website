import React, {Suspense} from 'react';
import Stars from './components/Stars.js';

const App = () => {
  return (
		<div id="canvas-container">
			<Suspense fallback={<div>Loading...</div>}>
				<Stars/>
			</Suspense>
		</div>
	);
}

export default App;

