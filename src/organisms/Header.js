import React, { useEffect, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import DesktopMenu from '../molecules/DesktopMenu';
import MobileMenu from '../molecules/MobileMenu';
import { Link } from 'react-router-dom';

const Header = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
		if (windowWidth > 768) {
			setOpen(false);
		}

		return window.removeEventListener('resize', () => {
			console.log('Resize listener cleaned up');
		});
	}, [windowWidth]);

	const showMenu = () => {
		return windowWidth > 768 ? (
			<DesktopMenu />
		) : (
			<div className='z-20'>
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</div>
		);
	};

	return (
		<nav className='sticky top-0 z-20 bg-gray-50 bg-opacity-80 flex justify-between items-end mb-8 mt-6 pb-1'>
			<Link
				to='/'
				className='md:text-6xl text-5xl font-display'
				onClick={() => window.scrollTo(0, 0)}
			>
				ZVI NAILS
			</Link>
			{showMenu()}
			<MobileMenu setOpen={setOpen} isOpen={isOpen} />
		</nav>
	);
};

export default Header;
