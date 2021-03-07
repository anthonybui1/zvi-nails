import React, { useEffect, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import DesktopMenu from '../molecules/DesktopMenu';
import MobileMenu from '../molecules/MobileMenu';

const Header = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [menuShow, setMenuShow] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
		if (windowWidth > 768) {
			setMenuShow(false);
		}

		return window.removeEventListener('resize', () => {
			console.log('Resize listener cleaned up');
		});
	}, [windowWidth]);

	const handleToggle = () => {
		setMenuShow(!menuShow);
	};

	const showMenu = () => {
		return windowWidth > 768 ? <DesktopMenu /> : <Hamburger onToggle={handleToggle} />;
	};

	return (
		<nav className='flex justify-between items-end mb-8 pt-6'>
			<a href='/' className='md:text-6xl text-5xl font-display'>
				ZVI NAILS
			</a>
			{showMenu()}
			<MobileMenu setMenuShow={setMenuShow} menuShow={menuShow} />
		</nav>
	);
};

export default Header;
