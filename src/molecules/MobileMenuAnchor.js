import React from 'react';

const MobileMenuAnchor = ({ setOpen, link, title }) => {
	return (
		<React.Fragment>
			<a
				onClick={() => setOpen(false)}
				className='mt-8 text-xl p-2 border-b-4 border-primpink'
				href={link}
			>
				{title}
			</a>
		</React.Fragment>
	);
};

export default MobileMenuAnchor;
