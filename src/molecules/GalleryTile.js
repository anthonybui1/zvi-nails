import React from 'react';

const GalleryTile = (props) => {
	return (
		<div className='col-span-6 md:col-span-3 relative'>
			<img src={props.tile} alt='hand with painted nails' className='shadow-lg rounded-full' />
			<a href='https://www.instagram.com/zvi_nails/?hl=en' target='_blank' rel='noreferrer'>
				<div className='opacity-0 hover:opacity-30 transition-opacity absolute top-0 left-0 h-full w-full bg-gray-400 duration-300 flex justify-center items-center rounded-full'>
					<i className='far fa-heart md:text-2xl text-md text-white animate-bounce' />
				</div>
			</a>
		</div>
	);
};

export default GalleryTile;
