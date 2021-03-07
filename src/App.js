import React from 'react';
import Header from './organisms/Header';
import Hero from './organisms/Hero';
import Gallery from './organisms/Gallery';
import Services from './organisms/Services';
import About from './organisms/About';
import Navigation from './organisms/Navigation';
import Footer from './organisms/Footer';
import ScrollChevron from './molecules/ScrollChevron';

const App = () => {
	return (
		<React.Fragment>
			<div className='container container-md mx-auto px-4' id='top'>
				<Header />
				<Hero />
				<Gallery />
				<Services />
				<About />
				<Navigation />
				<ScrollChevron />
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default App;
