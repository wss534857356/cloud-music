
import React, { Component } from 'react'
import style from './style.scss'
import classNames from 'classnames'

class PlayButton extends Component {

  handleClickPlay(pause) {
    this.props.suspendMusic(!pause)
  }

  render() {
    const { pause, children } = this.props
    const playBtnClasses = classNames({
      [style.play]: pause,
      [style.pause]: !pause
    })
    return (
      <button
        className={playBtnClasses}
        onClick={()=>this.handleClickPlay(pause)}>
        {children}
      </button>
    )
  }
}

export default PlayButton