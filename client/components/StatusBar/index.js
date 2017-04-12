
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import style from './style.scss'

class StatusBar extends Component {
  renderBackButton(history) {
    if(history.pathname !== '/') {
      return (
        <button className={style.back}>
          <span className={style.icon} onClick={()=>browserHistory.goBack()}></span>
        </button>
      )
    }
  }
  render() {
    const { routes } = this.props
    const title = 'cloud music'.toUpperCase();
    return (
      <div className={style.statusBar}>
        {this.renderBackButton(routes)}
        <span style={{paddingLeft: 12}}>
          {title}
        </span>
      </div>
    )
  }
}

export default StatusBar