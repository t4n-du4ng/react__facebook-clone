import React from 'react';
import './Body.css';
import Contact from './Contact';
import Feed from './Feed';
import Sidebar from './Sidebar';

function Body() {
	return (
		<div className="body">

      <Sidebar />

      <Feed />

      <Contact />

		</div>
	);
}

export default Body;
