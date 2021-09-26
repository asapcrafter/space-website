import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/css/main.css'
import Home from './components/Home.js'

ReactDOM.render(
	<React.StrictMode>
		<Home />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
