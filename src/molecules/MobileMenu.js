import React from 'react';
import MobileMenuAnchor from './MobileMenuAnchor';
import { Link } from 'react-router-dom';

const MobileMenu = ({ setOpen, isOpen }) => {
	return (
		<ul
			className={`fixed top-0 left-0 z-10 w-full h-screen bg-lightpink transition-all duration-300 ease-out transform flex flex-col justify-center items-center ${
				isOpen ? 'opacity-90 translate-y-0' : 'opacity-0 -translate-y-full'
			}`}
		>
			<Link
				to='/'
				onClick={() => setOpen(false)}
				className='mt-8 text-xl p-2 border-b-4 border-primpink'
			>
				Home
			</Link>
			<MobileMenuAnchor title='Gallery' link='#gallery' setOpen={setOpen} />
			<Link
				to='/services'
				onClick={() => setOpen(false)}
				className='mt-8 text-xl p-2 border-b-4 border-primpink'
			>
				Services
			</Link>
			<MobileMenuAnchor title='About' link='#about' setOpen={setOpen} />
			<MobileMenuAnchor title='Contact' link='#contact' setOpen={setOpen} />
		</ul>
	);
};

export default MobileMenu;
