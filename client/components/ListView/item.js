
import React, { Component } from 'react'
import style from './style.scss'
import cs from 'classnames'

class Item extends Component {
  handleDoubleClick(index) {
    this.props.chooseMusic(index+1)
  }
  renderPlayingIcon(playing) {
    if(playing)
      return(
        <div className={style.play_icon}>
          <svg 
            viewBox="0 0 1024 1024" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20"
            style={{marginTop:10}}>
            <path 
              d="M810.4 465.8 253.6 134.4c-6.8-4-13.8-6.4-21.8-6.4-21.8 0-39.6 18-39.6 40L192 168l0 688 0.2 0c0 22 17.8 40 39.6 40 8.2 0 15-2.8 22.4-6.8l556.2-331c13.2-11 21.6-27.6 21.6-46.2C832 493.4 823.6 477 810.4 465.8z" 
              fill="#bc2f2e">
            </path>
          </svg>
        </div>
      )
  }
  render() {
    const { item, index, active, playing } = this.props
    const itemClass = cs({
      [style.item]: true,
      [style.item_active]: active,
    })
    return (
      <li>
        <a 
          className={itemClass}
          onDoubleClick={()=>this.handleDoubleClick(index)}
          onClick={this.props.onItemActive}>
          <div>
            <div className={style.name}>
              {this.renderPlayingIcon(playing)}
              {item.name}
            </div>
            <div className={style.artist}>
              {item.artists[0].name}
            </div>
            <div className={style.album}>
              {item.album.name}
            </div>
          </div>
        </a>
      </li>
    )
  }
}

export default Item
