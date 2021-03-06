import React from 'react';

const Button = (props) => {
	return (
		<React.Fragment>
			<a
				href={props.link}
				className='font-header text-xl rounded-xl hover:shadow-2xl hover:border-lightpink py-2 px-4 transition-all duration-500 ease-in-out rounded-b-none border-b-4 border-neutral'
			>
				{props.text}
			</a>
		</React.Fragment>
	);
};

export default Button;
