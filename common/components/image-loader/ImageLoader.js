import React, { Component } from 'react'

class ImageLoader extends Component {
  constructor () {
    super()
    this.state = { loaded: false }
    this.onImageLoad = this.onImageLoad.bind(this)
  }

  componentWillUnmount () {
    if (!this.img) { return }
    this.img.onload = () => {}
    delete this.img
  }

  onImageLoad () {
    this.setState({ loaded: true })
  }

  componentDidMount () {
    this.img = new window.Image()
    this.img.onload = this.onImageLoad
    this.img.src = this.props.src
    this.imgProps = {...this.props}
    delete this.imgProps.section // 'section' is not a valid prop for <img>
  }

  render () {
    const loadedClassName = this.state.loaded ? ' is-loaded' : ''
    const rootClassName = `${this.props.className} ImageLoader-image${loadedClassName}`

    return (
      <div className={`ImageLoader ImageLoader--${this.props.section}`}>
        <img ref='img' {...this.imgProps} className={rootClassName} />
      </div>
    )
  }
}

ImageLoader.propTypes = {
  src: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  section: React.PropTypes.string
}

export default ImageLoader
