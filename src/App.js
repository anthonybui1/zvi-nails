import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './organisms/Header';
import Hero from './organisms/Hero';
import Gallery from './organisms/Gallery';
import Services from './organisms/Services';
import About from './organisms/About';
import Navigation from './organisms/Navigation';
import Footer from './organisms/Footer';
import ScrollChevron from './molecules/ScrollChevron';
import ServicesPage from './organisms/ServicesPage';

const App = () => {
	return (
		<BrowserRouter>
			<div className='container container-md mx-auto px-4' id='top'>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Hero />
						<Gallery />
						<Services />
						<About />
					</Route>
					<Route exact path='/services'>
						<ServicesPage />
					</Route>
				</Switch>
				<Navigation />
				<ScrollChevron />
			</div>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
