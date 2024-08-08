import React from 'react'
import PropTypes from 'prop-types';

const Button = ({title, icon, clickBtn}) => {
  return (
    <button className="myBtn" onClick={clickBtn}>
        {icon && <i className={`fa fa-lg ${icon}`} aria-hidden="true"></i>}
        &nbsp; {title}
    </button>
  )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    clickBtn: PropTypes.func
}

Button.defaultProps = {
    icon: '',
    clickBtn: () => {}
}
export default Button