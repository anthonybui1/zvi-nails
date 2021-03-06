import React from 'react';

const Footer = () => {
	return (
		<div className='bg-lightpink w-full flex flex-col justify-between items-center pb-2'>
			<div className='my-4'>
				<h1 className='font-display text-6xl text-center'>ZVI Nails & Spa</h1>
			</div>
			<div className='my-4 flex items-center'>
				<p className='text-4xl'>Find us on Instagram</p>
				<a href='https://www.instagram.com/zvi_nails/' className='cursor-pointer'>
					<i className='fab fa-instagram-square text-6xl mx-6 transform hover:rotate-6 transition-all'></i>
				</a>
			</div>
			<div className='mt-4'>
				<p>© 2021 ZVI Nails & Spa. All Rights Reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
