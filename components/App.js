import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Header from './Header.js'
import Footer from './Footer.js'

export default ({
  children
}) => {
  const routeName = children.props.route.routeName
  const className = `App App--${routeName}`
  const footer = routeName === 'home' ? null : <Footer routeName={routeName} />
  return (
    <div className={className}>
      <div className='App-header'>
        <Header routeName={routeName} />
      </div>
      <ReactCSSTransitionGroup
        component="div"
        transitionName={ {
          enter: 'App-transitionEnter',
          enterActive: 'is-enterActive',
          leave: 'App-transitionLeave',
          leaveActive: 'is-leaveActive',
        } }
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
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
