import React from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Chrome from '../components/chrome/Chrome'

function mapStateToProps (state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Chrome)
