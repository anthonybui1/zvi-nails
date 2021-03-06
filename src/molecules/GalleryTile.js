import React from 'react';
import testImg from '../assets/testphoto6.jpg';

const GalleryTile = () => {
	return (
		<div className='col-span-3'>
			<img src={testImg} alt='hand with painted nails' />
		</div>
	);
};

export default GalleryTile;
