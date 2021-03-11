import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './organisms/Header';
import Hero from './organisms/Hero';
import Gallery from './organisms/Gallery';
import Services from './organisms/Services';
import About from './organisms/About';
import Location from './organisms/Location';
import Footer from './organisms/Footer';
import Menu from './templates/Menu';

const App = () => {
	return (
		<BrowserRouter>
			<main className='' id='top'>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Hero />
						<Gallery />
						<Services />
						<About />
					</Route>
					<Route exact path='/services'>
						<Menu />
					</Route>
				</Switch>
				<Location />
			</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
