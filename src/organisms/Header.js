import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Squash as Hamburger } from 'hamburger-react';
import DesktopMenu from '../molecules/DesktopMenu';
import MobileMenu from '../molecules/MobileMenu';

const Header = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
		if (windowWidth > 864) {
			setOpen(false);
		}

		return window.removeEventListener('resize', () => {
			console.log('Resize listener cleaned up');
		});
	}, [windowWidth]);

	const showMenu = () => {
		return windowWidth > 864 ? (
			<DesktopMenu />
		) : (
			<span className='z-20'>
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</span>
		);
	};

	return (
		<div className='sticky top-0 bg-gray-50 z-10'>
			<header className='container max-w-screen-lg mx-auto mb-8 mt-6 px-4 py-2 flex justify-between items-end text-gray-900'>
				<Link
					to='/'
					className='text-5xl font-display mr-8'
					onClick={() => setTimeout(() => window.scrollTo(0, 0), 250)}
					aria-label='Clicking this logo takes you to the top of the page'
				>
					ZVI NAILS
				</Link>
				{showMenu()}
				<MobileMenu setOpen={setOpen} isOpen={isOpen} />
			</header>
		</div>
	);
};

export default Header;
