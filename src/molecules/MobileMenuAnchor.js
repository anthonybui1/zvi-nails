import React from 'react';
import { useHistory } from 'react-router-dom';

const MobileMenuAnchor = ({ setOpen, link, title }) => {
	const history = useHistory();

	const handleClick = () => {
		history.push('/');
		setOpen(false);
	};

	return (
		<React.Fragment>
			<a onClick={handleClick} className='mt-8 text-xl p-2 border-b-4 border-primpink' href={link}>
				{title}
			</a>
		</React.Fragment>
	);
};

export default MobileMenuAnchor;
