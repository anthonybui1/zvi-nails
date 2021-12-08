import MobileMenuAnchor from '../atoms/MobileMenuAnchor';

const MobileMenu = ({ setOpen, isOpen }) => {
	const handleClick = (id) => {
		setOpen(false);
		setTimeout(() => {
			document.getElementById(id).scrollIntoView();
		}, 300);
	};

	const handleServicesClick = () => {
		setOpen(false);
		window.scrollTo(0, 0);
	};

	return (
		<nav
			className={`fixed top-0 left-0 z-10 w-full h-screen bg-gray-50 transition-all duration-500 ease-out transform flex flex-col justify-center items-center ${
				isOpen ? 'opacity-90 translate-y-0' : 'opacity-0 -translate-y-full'
			}`}
		>
			<MobileMenuAnchor text='Home' link='/' clickHandler={() => handleClick('root')} />
			<MobileMenuAnchor text='Gallery' link='/' clickHandler={() => handleClick('gallery')} />
			<MobileMenuAnchor text='Services' link='/services' clickHandler={handleServicesClick} />
			<MobileMenuAnchor text='About' link='/' clickHandler={() => handleClick('about')} />
			<MobileMenuAnchor text='Contact' link='/' clickHandler={() => handleClick('contact')} />
		</nav>
	);
};

export default MobileMenu;
