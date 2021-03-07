import React from 'react';

const MobileMenu = ({ setMenuShow, menuShow }) => {
	return (
			<ul className={`fixed top-0 left-0 z-10 w-3/4 h-screen bg-lightpink transition-all duration-500 transform flex flex-col justify-center items-center ${menuShow ? 'opacity-90 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
				<a className='mt-8 text-xl font-body p-2 border-b-4 border-primpink' href='/'>Home</a>
				<a className='mt-8 text-xl font-body p-2 border-b-4 border-primpink' href='#gallery'>Gallery</a>
				<a className='mt-8 text-xl font-body p-2 border-b-4 border-primpink' href='#services'>Services</a>
				<a className='mt-8 text-xl font-body p-2 border-b-4 border-primpink' href='#about'>About</a>
				<a className='mt-8 text-xl font-body p-2 border-b-4 border-primpink' href='#contact'>Contact</a>
			</ul>
	);
};

export default MobileMenu;
