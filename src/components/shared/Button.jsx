import React from 'react'
import PropTypes from 'prop-types';

const Button = ({style, title, icon, url, clickBtn}) => {
  return (
    <>
    { style === 'myBtn' && (
        <button className={style} onClick={clickBtn}>
            {icon && <i className={`fa fa-lg ${icon}`} aria-hidden="true"></i>}
            &nbsp; {title}
        </button>
    ) }

    { style === 'myBtn-2 m-2' && (
        <a href={url} className={style}>{title}</a>
    ) }

    { style === 'myBtn-3 m-2' && (
        <a href={url} className={style}>{title}</a>
    ) }
    </>
  )
}

Button.propTypes = {
    style: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // button action
    icon: PropTypes.string,
    clickBtn: PropTypes.func,
    // link url
    url: PropTypes.string
}

Button.defaultProps = {
    icon: '',
    url: '#',
    clickBtn: () => {}
}

export default Button