import React from 'react'

const Button = (props) => {
  return (
    <React.Fragment>
      <a href={props.link} className="font-header text-xl rounded-lg hover:shadow-2xl py-2 px-4 transition-all duration-500 ease-in-out">{props.text}</a>
    </React.Fragment>
  )
}

export default Button
