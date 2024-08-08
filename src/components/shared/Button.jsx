import React from 'react'
import PropTypes from 'prop-types';

const Button = ({style, title, icon, url, clickBtn}) => {
  const renderButton = () => {
    switch (style) {
        case 'myBtn':
            return (
                <button className="myBtn" onClick={clickBtn}>
                    {icon && <i className={`fa fa-lg ${icon}`} aria-hidden="true"></i>}
                    &nbsp; {title}
                </button>
            )
        case 'myBtn2':
            return (
                <a href={url} className="myBtn-2 m-2">{title}</a>
            )
        case 'myBtn3':
            return (
                <a href={url} className="myBtn-3 m-2">{title}</a>
            )
        case 'myBtn4':
            return (
                <a href={url} className="btn btn-info btn-block p-2 shadow rounded-pill">{title}</a>
            )
        default:
            return null
    }
  }

  return <>{ renderButton() }</>
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