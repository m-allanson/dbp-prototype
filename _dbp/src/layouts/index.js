import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Header from '../components/header'
import Footer from '../components/footer'
import Headroom from 'react-headroom'

import './index.css'
import './layout.css'

class TemplateWrapper extends Component {
  getSectionName () {
    const pathName = this.props.location.pathname
    if (pathName.startsWith('/projects')) return 'projects'
    if (pathName.startsWith('/about')) return 'about'
    if (pathName.startsWith('/contact')) return 'contact'
    if (pathName.startsWith('/shop')) return 'shop'

    return 'projects'
  }
  render () {
    const sectionName = this.getSectionName()
    const className = `Chrome Chrome--${sectionName}`
    return (
      <div>
        <Helmet
          title="Pascal Barry – Senior Designer"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <div className={className}>
          <Headroom>
            <div className='Chrome-header'>
              <Header sectionName={sectionName} />
            </div>
          </Headroom>
          <TransitionGroup>
            <CSSTransition
              classNames={{
                enter: 'Chrome-transitionEnter',
                enterActive: 'is-enterActive',
                exit: 'Chrome-transitionLeave',
                exitActive: 'is-leaveActive'
              }}
              timeout={{enter: 200, exit: 200}}
            >
              <div className='Chrome-contentWrap' key={this.props.location.pathname}>
                <div className='Chrome-content'>
                  {this.props.children()}
                </div>
                <div className='Chrome-footer'>
                  <Footer />
                </div>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
  ) }
}
TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
