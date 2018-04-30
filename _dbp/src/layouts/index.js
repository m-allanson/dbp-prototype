import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Header from '../components/header'
import Footer from '../components/footer'
import Headroom from 'react-headroom'

import './index.css'
import styles from './index.module.css'

class TransitionHandler extends React.Component {
  shouldComponentUpdate () {
    return this.props.location.pathname === window.location.pathname
  }

  render () {
    return this.props.children
  }
}

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
    const className = styles[sectionName]
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
            <div className={styles.header}>
              <Header sectionName={sectionName} />
            </div>
          </Headroom>
          <TransitionGroup>
            <CSSTransition
              classNames={{
                enter: styles.transitionEnter,
                enterActive: styles.isEnterActive,
                exit: styles.transitionLeave,
                exitActive: styles.isLeaveActive
              }}
              timeout={{enter: 200, exit: 200}}
              key={this.props.location.pathname}
            >
              <TransitionHandler location={this.props.location}>
                <div className={styles.contentWrap}>
                  <div className={styles.content}>
                    {this.props.children()}
                  </div>
                  <div className={styles.footer}>
                    <Footer />
                  </div>
                </div>
              </TransitionHandler>
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
