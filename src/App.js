import React from 'react';
import Header from './organisms/Header';
import Hero from './organisms/Hero';
import Gallery from './organisms/Gallery';
import Services from './organisms/Services';
import About from './organisms/About';
import Navigation from './organisms/Navigation';
import Footer from './organisms/Footer';

const App = () => {
	return (
		<React.Fragment>
			<div className='container container-md mx-auto px-4'>
				<Header />
				<Hero />
				<Gallery />
				<Services />
				<About />
				<Navigation />
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default App;
