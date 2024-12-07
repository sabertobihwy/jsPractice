import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default function Layout(props) {
  return (
    <div className="container">
      <div className='header'>
        {props.header}
      </div>
      <div className='aside'>
        {props.aside}
      </div>
      <div className='main'>
        {props.children}
      </div>
    </div>
  )
}

Layout.propTypes = {
    header: PropTypes.element,
    aside: PropTypes.element,
    main: PropTypes.element
}