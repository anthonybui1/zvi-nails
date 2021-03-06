import React from 'react';

const Navigation = () => {
	return (
		<div className='my-4' id='contact'>
			<div className='h-48 w-full bg-neutral'></div>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.64164052312!2d-95.63098664881663!3d29.932217381834658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d143756786ab%3A0x93bfe182e1098e15!2s10807%20Huffmeister%20Rd%20%23120%2C%20Houston%2C%20TX%2077065!5e0!3m2!1sen!2sus!4v1614995372385!5m2!1sen!2sus'
				allowfullscreen='false'
				loading='lazy'
				className='w-full h-128'
				title='Google Maps Directions'
			></iframe>
		</div>
	);
};

export default Navigation;
