import React from 'react';
import AnchorButton from './AnchorButton';

const DesktopMenu = () => {
	return (
		<React.Fragment>
			<AnchorButton text='Home' link='#hero' />
			<AnchorButton text='Gallery' link='#gallery' />
			<AnchorButton text='Services' link='#services' />
			<AnchorButton text='About' link='#about' />
			<AnchorButton text='Contact' link='#contact' />
		</React.Fragment>
	);
};

export default DesktopMenu;
