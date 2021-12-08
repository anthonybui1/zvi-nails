import React from 'react'
import { Link } from 'react-router-dom';

const MobileMenuAnchor = ({ text, link, clickHandler }) => {
  return (
		<React.Fragment>
			<Link
				to={link}
				className='mt-8 text-xl p-2 border-b-4 border-accent'
				onClick={clickHandler}
				aria-label={`Click the anchor link to jump to the ${text} section of the page`}
			>
				{text}
			</Link>
		</React.Fragment>
  )
}

export default MobileMenuAnchor
