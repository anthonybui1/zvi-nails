import { useLocation } from 'react-router-dom';

const Location = () => {
	const location = useLocation();
	const styleOptions = () => {
		return location.pathname === '/' ? '' : 'hidden';
	};

	return (
		<section className={`my-4 ${styleOptions()}`}>
			<span id='contact' className='block relative -top-20' />
			<div className='w-full px-4 py-8 bg-neutral flex justify-evenly items-start'>
				<div>
					<h2 className='md:text-2xl text-lg font-header mb-4'>
						<b>
							Hours <span className='hidden sm:inline-block'>of Operation</span>
						</b>
					</h2>
					<div className='flex flex-col md:text-base text-xs'>
						<div className='flex justify-between'>
							<p>Mon-Fri</p>
							<p className='text-right ml-2'>9:30am-7:00pm</p>
						</div>
						<div className='flex justify-between'>
							<p>Saturday</p>
							<p className='text-right ml-2'>9:00am-6:00pm</p>
						</div>
						<div className='flex justify-between'>
							<p>Sunday</p>
							<p className='text-right ml-2'>11:00am-5:00pm</p>
						</div>
					</div>
				</div>
				<div className='ml-4'>
					<h2 className='md:text-2xl text-lg font-header mb-4'>
						<b>Find Us</b>
					</h2>
					<address className=' md:text-base text-xs'>
						10807 Huffmeister Rd, <br />
						Houston, TX 77065 <br />
						(281) 653-9319
					</address>
				</div>
			</div>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.64164052312!2d-95.63098664881663!3d29.932217381834658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d143756786ab%3A0x93bfe182e1098e15!2s10807%20Huffmeister%20Rd%20%23120%2C%20Houston%2C%20TX%2077065!5e0!3m2!1sen!2sus!4v1614995372385!5m2!1sen!2sus'
				allowFullScreen={false}
				loading='lazy'
				className='w-full h-128'
				title='Google Maps Directions'
			></iframe>
		</section>
	);
};

export default Location;
