import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './styles.css'

const AllRoutesButton = ({ routes, animation = 'fade-in', styles = {} }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [previousPage, setPreviousPage] = useState(null)
  const [closing, setClosing] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleOpen = () => {
    setPreviousPage(location.pathname)
    setClosing(false)
    setIsOpen(true)
  }

  const handleGoBack = () => {
    setClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      if (previousPage) {
        navigate(previousPage)
      }
    }, 500)
  }

  const handleNavigation = path => {
    setClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      navigate(path)
    }, 500)
  }

  return (
    <div>
      {!isOpen ? (
        <button
          onClick={handleOpen}
          className="all-routes-btn"
          style={styles.buttonStyles}
          onMouseEnter={e => Object.assign(e.target.style, styles.buttonHoverStyles)}
          onMouseLeave={e => Object.assign(e.target.style, styles.buttonStyles)}
        >
          All Routes →
        </button>
      ) : (
        <div
          className={`all-routes-page ${closing ? animation.replace('-in', '-out') : animation}`}
          style={styles.overlayStyles}
        >
          <div className="routes-container" style={styles.containerStyles}>
            <h1 style={styles.headerStyles}>Explore All Pages</h1>
            <ul>
              {routes.map((route, index) => (
                <li key={route.path} style={{ ...styles.linkContainerStyles, animationDelay: `${index * 0.3}s` }}>
                  <Link
                    to={route.path}
                    style={styles.linkStyles}
                    onClick={e => {
                      e.preventDefault()
                      handleNavigation(route.path)
                    }}
                    onMouseEnter={e => Object.assign(e.target.style, styles.linkHoverStyles)}
                    onMouseLeave={e => Object.assign(e.target.style, styles.linkStyles)}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={handleGoBack}
              className="all-routes-btn"
              style={styles.buttonStyles}
              onMouseEnter={e => Object.assign(e.target.style, styles.buttonHoverStyles)}
              onMouseLeave={e => Object.assign(e.target.style, styles.buttonStyles)}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

AllRoutesButton.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
  animation: PropTypes.string, // 'slide-in', 'fade-in', 'zoom-in'
  styles: PropTypes.shape({
    buttonStyles: PropTypes.object,
    buttonHoverStyles: PropTypes.object,
    overlayStyles: PropTypes.object,
    containerStyles: PropTypes.object,
    headerStyles: PropTypes.object,
    linkContainerStyles: PropTypes.object,
    linkStyles: PropTypes.object,
    linkHoverStyles: PropTypes.object,
  }),
}

export default AllRoutesButton
