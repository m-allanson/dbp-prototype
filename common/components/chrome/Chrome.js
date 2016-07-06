import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Headroom from 'react-headroom'

const Chrome = ({
  children
}) => {
  const sectionName = children.props.route.sectionName
  const className = `Chrome Chrome--${sectionName}`

  return (
    <div className={className}>
      <Headroom>
        <div className='Chrome-header'>
          <Header sectionName={sectionName} />
        </div>
      </Headroom>
      <ReactCSSTransitionGroup
        transitionName={{
          enter: 'Chrome-transitionEnter',
          enterActive: 'is-enterActive',
          leave: 'Chrome-transitionLeave',
          leaveActive: 'is-leaveActive'
        }}
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
      >
        <div className='Chrome-contentWrap' key={children.props.location.pathname}>
          <div className='Chrome-content'>
            {children}
          </div>
          <div className='Chrome-footer'>
            <Footer />
          </div>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  )
}

Chrome.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default Chrome
