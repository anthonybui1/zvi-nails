import React from 'react'
import GalleryTile from '../molecules/GalleryTile';

const Gallery = () => {
  return (
    <div className='grid grid-cols-12 gap-2 my-4'>
      <GalleryTile />
      <GalleryTile />
      <GalleryTile />
      <GalleryTile />
      <GalleryTile />
      <GalleryTile />
      <GalleryTile />
      <GalleryTile />
    </div>
  )
}

export default Gallery
