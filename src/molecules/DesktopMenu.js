import React from 'react';
import { Link } from 'react-router-dom';

const DesktopMenu = () => {
	const handleClick = (id) => {
		setTimeout(() => {
			document.getElementById(id).scrollIntoView();
		}, 250);
	};

	return (
		<React.Fragment>
			<Link
				to='/'
				className='font-header text-xl hover:shadow-xl hover:border-lightpink py-2 px-4 transition-all duration-500 border-b-4 border-neutral'
				onClick={() => window.scrollTo(0, 0)}
			>
				Home
			</Link>
			<Link
				to='/'
				onClick={() => handleClick('gallery')}
				className='font-header text-xl hover:shadow-xl hover:border-lightpink py-2 px-4 transition-all duration-500 border-b-4 border-neutral'
			>
				Gallery
			</Link>
			<Link
				to='/services'
				onClick={() => window.scrollTo(0, 0)}
				className='font-header text-xl hover:shadow-xl hover:border-lightpink py-2 px-4 transition-all duration-500 border-b-4 border-neutral'
			>
				Services
			</Link>
			<Link
				to='/'
				onClick={() => handleClick('about')}
				className='font-header text-xl hover:shadow-xl hover:border-lightpink py-2 px-4 transition-all duration-500 border-b-4 border-neutral'
			>
				About
			</Link>
			<Link
				to='/'
				onClick={() => handleClick('contact')}
				className='font-header text-xl hover:shadow-xl hover:border-lightpink py-2 px-4 transition-all duration-500 border-b-4 border-neutral'
			>
				Contact
			</Link>
		</React.Fragment>
	);
};

export default DesktopMenu;
