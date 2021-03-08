import React from 'react';
import AnchorButton from './AnchorButton';
import { Link } from 'react-router-dom';

const DesktopMenu = () => {
	return (
		<React.Fragment>
			<Link
				to='/'
				className='font-header text-xl hover:shadow-xl hover:border-lightpink py-2 px-4 transition-all duration-500 border-b-4 border-neutral'
				onClick={() => window.scrollTo(0,0)}
			>
				Home
			</Link>
			<AnchorButton text='Gallery' link='#gallery' />
			<Link
				to='/services'
				className='font-header text-xl hover:shadow-xl hover:border-lightpink py-2 px-4 transition-all duration-500 border-b-4 border-neutral'
			>
				Services
			</Link>
			<AnchorButton text='About' link='/#about' />
			<AnchorButton text='Contact' link='/#contact' />
		</React.Fragment>
	);
};

export default DesktopMenu;
