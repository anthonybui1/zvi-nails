const Footer = () => {
	return (
		<footer className='bg-gray-50 w-full flex flex-col justify-between items-center py-2 px-4'>
			<div className='my-4'>
				<h2 className='font-display text-2xl md:text-5xl text-center'>ZVI Nails & Spa</h2>
			</div>
			<div className='my-4 flex items-center'>
				<p className='text-lg md:text-2xl'>Find us on Instagram</p>
				<a
					href='https://www.instagram.com/zvi_nails/'
					className='cursor-pointer'
					target='_blank'
					rel='noreferrer'
					aria-label='Click here to open the ZVI Nails Instagram in a new tab.'
				>
					<span className='sr-only'>A square instagram logo.</span>
					<i className='fab fa-instagram-square text-3xl ml-6 transform hover:rotate-6 transition-transform' />
				</a>
			</div>
			<div className='text-xs mt-3'>
				<p>© 2021 ZVI Nails & Spa. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
