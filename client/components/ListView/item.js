
import React, { Component } from 'react'
import style from './style.scss'
import cs from 'classnames'

class Item extends Component {
  handleDoubleClick(index) {
    console.log(index)
    this.props.chooseMusic(index+1)
  }
  render() {
    const { item, index, active } = this.props
    const itemClass = cs({
      [style.item]: true,
      [style.item_active]: active
    })
    return (
      <li>
        <a 
          className={itemClass}
          onDoubleClick={()=>this.handleDoubleClick(index)}
          onClick={this.props.onItemActive}>
          <div>
            <div className={style.name}>
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
