import React from 'react';
import GalleryTile from '../molecules/GalleryTile';

const Gallery = () => {
	return (
		<div className='grid grid-cols-12 gap-4 my-4' id='gallery'>
			<GalleryTile />
			<GalleryTile />
			<GalleryTile />
			<GalleryTile />
			<GalleryTile />
			<GalleryTile />
			<GalleryTile />
			<GalleryTile />
		</div>
	);
};

export default Gallery;
