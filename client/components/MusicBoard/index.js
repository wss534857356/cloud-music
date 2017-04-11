
import React, { Component } from 'react'
import style from './style.scss'
import SideBar from '../SideBar'

class MusicBoard extends Component {
  render() {
    const children = this.props
    return (
      <div className={style.board}>
        <SideBar className={style.menu}/>
        <div className={style.body}>
          {children.children}
        </div>
      </div>
    )
  }
}

export default MusicBoard