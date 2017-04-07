
import React, { Component } from 'react'
import style from './style.scss'

class StatusBar extends Component {
  renderBackButton(history) {
    if(history.length > 0) {
      return (
        <button className={style.back}>
          <span className={style.icon} onClick={()=>history.go(-1)}></span>
        </button>
      )
    }
  }
  render() {
    const { routesState, history } = this.props
    const title = 'cloud music'.toUpperCase();
    return (
      <div className={style.statusBar}>
        {this.renderBackButton(history)}
        {title}
      </div>
    )
  }
}

export default StatusBar