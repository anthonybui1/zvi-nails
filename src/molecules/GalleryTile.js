const GalleryTile = ({ options, tile }) => {
	return (
		<div className={`relative col-span-6 md:col-span-3 ${options}`}>
			<img
				src={tile}
				alt='One of an assortment of manicured hands from the ZVI Nails Instagram.'
				className='shadow-md'
				loading='lazy'
			/>
			<a
				href='https://www.instagram.com/zvi_nails/?hl=en'
				target='_blank'
				rel='noreferrer'
				aria-label='Click this anchor to open a new tab to the ZVI Nails Instagram'
			>
				<label className='sr-only'>
					The manicured hand photo is overlaid with a gray filter and an animated bouncing heart.{' '}
				</label>
				<div className='opacity-0 hover:opacity-50 transition-opacity absolute top-0 left-0 h-full w-full bg-gray-400 duration-300 flex justify-center items-center'>
					<i className='far fa-heart text-4xl text-white animate-bounce' />
				</div>
			</a>
		</div>
	);
};

export default GalleryTile;
