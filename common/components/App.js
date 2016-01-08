import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Header from './Header.js'
import Footer from './Footer.js'

export default ({
  children
}) => {
  const sectionName = children.props.route.sectionName
  const className = `App App--${sectionName}`
  const footer = sectionName === 'home' ? null : <Footer sectionName={sectionName} />
  return (
    <div className={className}>
      <div className='App-header'>
        <Header sectionName={sectionName} />
      </div>
      <ReactCSSTransitionGroup
        transitionName={ {
          enter: 'App-transitionEnter',
          enterActive: 'is-enterActive',
          leave: 'App-transitionLeave',
          leaveActive: 'is-leaveActive'
        } }
        transitionEnterTimeout={250}
        transitionLeaveTimeout={250}
      >
        <div className='App-content' key={children.props.location.pathname}>
          { children }
          <div className='App-footer'>
            { footer }
          </div>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  )
}
