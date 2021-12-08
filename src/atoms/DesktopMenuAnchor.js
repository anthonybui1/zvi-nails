import React from 'react';
import { Link } from 'react-router-dom';

const DesktopMenuAnchor = ({ text, link, clickHandler }) => {
	return (
		<React.Fragment>
			<Link
				to={link}
				className='font-display text-lg hover:shadow-xl hover:border-accent py-2 px-4 transition-all duration-500 border-b-4 border-r-4 border-base ml-2'
				onClick={clickHandler}
				aria-label={`Click the anchor link to jump to the ${text} section of the page`}
			>
				{text}
			</Link>
		</React.Fragment>
	);
};

export default DesktopMenuAnchor;
