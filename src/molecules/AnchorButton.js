import React from 'react';
import { useHistory } from 'react-router-dom';

const Button = (props) => {
	const history = useHistory();

	const handleClick = () => {
		history.push('/');
	};

	return (
		<React.Fragment>
			<a
				onClick={handleClick}
				href={props.link}
				className='font-header text-xl hover:shadow-xl hover:border-lightpink py-2 px-4 transition-all duration-500 border-b-4 border-neutral'
			>
				{props.text}
			</a>
		</React.Fragment>
	);
};

export default Button;
