import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default ({
  children
}) => {
  const sectionName = children.props.route.sectionName
  const className = `Chrome Chrome--${sectionName}`
  const footer = sectionName === 'home' ? null : <Footer sectionName={sectionName} />

  return (
    <div className={className}>
      <div className='Chrome-header'>
        <Header sectionName={sectionName} />
      </div>
      <ReactCSSTransitionGroup
        transitionName={ {
          enter: 'Chrome-transitionEnter',
          enterActive: 'is-enterActive',
          leave: 'Chrome-transitionLeave',
          leaveActive: 'is-leaveActive'
        } }
        transitionEnterTimeout={250}
        transitionLeaveTimeout={250}
      >
        <div className='Chrome-content' key={children.props.location.pathname}>
          { children }
          <div className='Chrome-footer'>
            { footer }
          </div>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  )
}
