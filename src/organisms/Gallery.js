import React from 'react';
import GalleryTile from '../molecules/GalleryTile';

import tile1 from '../assets/gallery/tile1.jpg';
import tile2 from '../assets/gallery/tile2.jpg';
import tile3 from '../assets/gallery/tile3.jpg';
import tile4 from '../assets/gallery/tile4.jpg';
import tile5 from '../assets/gallery/tile5.jpg';
import tile6 from '../assets/gallery/tile6.jpg';
import tile7 from '../assets/gallery/tile7.jpg';
import tile8 from '../assets/gallery/tile8.jpg';

const Gallery = () => {
	return (
		<div className='grid grid-cols-12 gap-4 my-4' id='gallery'>
			<GalleryTile tile={tile1}/>
			<GalleryTile tile={tile2}/>
			<GalleryTile tile={tile3}/>
			<GalleryTile tile={tile4}/>
			<GalleryTile tile={tile5}/>
			<GalleryTile tile={tile6}/>
			<GalleryTile tile={tile7}/>
			<GalleryTile tile={tile8}/>
		</div>
	);
};

export default Gallery;
