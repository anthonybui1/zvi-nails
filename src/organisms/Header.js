import React from 'react';
import AnchorButton from '../molecules/AnchorButton';

const Header = () => {
	return (
		<nav className='flex justify-between items-end mb-8 pt-6'>
			<a href='/' className='text-5xl font-display'>
				ZVI NAILS
			</a>
			<AnchorButton text='Home' link='/' />
			<AnchorButton text='Services' link='/' />
			<AnchorButton text='Gallery' link='/' />
			<AnchorButton text='About' link='#about' />
			<AnchorButton text='Contact' link='/' />
		</nav>
	);
};

export default Header;
