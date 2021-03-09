import React from 'react';
import DesktopMenuAnchor from '../atoms/DesktopMenuAnchor';

const DesktopMenu = () => {
	const handleClick = (id) => {
		setTimeout(() => {
			document.getElementById(id).scrollIntoView();
		}, 250);
	};

	return (
		<nav className='flex flex-grow justify-between'>
			<DesktopMenuAnchor clickHandler={() => handleClick('root')} link='/' text='Home' />
			<DesktopMenuAnchor clickHandler={() => handleClick('gallery')} link='/' text='Gallery' />
			<DesktopMenuAnchor
				clickHandler={() => window.scrollTo(0, 0)}
				link='/services'
				text='Services'
			/>
			<DesktopMenuAnchor clickHandler={() => handleClick('about')} link='/' text='About' />
			<DesktopMenuAnchor clickHandler={() => handleClick('contact')} link='/' text='Contact' />
		</nav>
	);
};

export default DesktopMenu;
