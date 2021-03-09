import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ setOpen, isOpen }) => {
	const handleClick = (location) => {
		setOpen(false);
		setTimeout(() => {
			document.getElementById(location).scrollIntoView();
		}, 500);
	};

	return (
		<ul
			className={`fixed top-0 left-0 z-10 w-full h-screen bg-lightpink transition-all duration-500 ease-out transform flex flex-col justify-center items-center ${
				isOpen ? 'opacity-90 translate-y-0' : 'opacity-0 -translate-y-full'
			}`}
		>
			<Link
				to='/'
				onClick={() => handleClick('root')}
				className='mt-8 text-xl p-2 border-b-4 border-primpink'
			>
				Home
			</Link>
			<Link
				to='/'
				onClick={() => handleClick('gallery')}
				className='mt-8 text-xl p-2 border-b-4 border-primpink'
			>
				Gallery
			</Link>
			<Link
				to='/services'
				onClick={() => setOpen(false)}
				className='mt-8 text-xl p-2 border-b-4 border-primpink'
			>
				Services
			</Link>
			<Link
				to='/'
				onClick={() => handleClick('about')}
				className='mt-8 text-xl p-2 border-b-4 border-primpink'
			>
				About
			</Link>
			<Link
				to='/'
				onClick={() => handleClick('contact')}
				className='mt-8 text-xl p-2 border-b-4 border-primpink'
			>
				Contact
			</Link>
		</ul>
	);
};

export default MobileMenu;
