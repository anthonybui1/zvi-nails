import React from 'react';
import MobileMenuAnchor from './MobileMenuAnchor';

const MobileMenu = ({ setOpen, isOpen }) => {
	return (
		<ul
			className={`fixed top-0 left-0 z-10 w-full h-screen bg-lightpink transition-all duration-500 transform flex flex-col justify-center items-center ${
				isOpen ? 'opacity-90 translate-y-0' : 'opacity-0 -translate-y-full'
			}`}
		>
			<MobileMenuAnchor title='Home' link='/' setOpen={setOpen} />
			<MobileMenuAnchor title='Gallery' link='#gallery' setOpen={setOpen} />
			<MobileMenuAnchor title='Services' link='#services' setOpen={setOpen} />
			<MobileMenuAnchor title='About' link='#about' setOpen={setOpen} />
			<MobileMenuAnchor title='Contact' link='#contact' setOpen={setOpen} />
		</ul>
	);
};

export default MobileMenu;
