import React, { useState } from 'react';
import Header from './Header';
import './App.css';
import Body from './Body';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
	return (
		<div className="app">
			<Header />
			{/* <Sidebar />
			<Feed /> */}
			<Body />
		</div>
	);
}

export default App;
