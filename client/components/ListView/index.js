
import React, { Component } from 'react'
import Item from './item'
import style from './style.scss'

class ListView extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      active: -1
    }
  }

  handleItemActive(id) {
    this.setState({
      active: id
    })
  }

  renderItem(item, index) {
    const { playerActions, player } = this.props
    const active = index === this.state.active? true: false
    const playing = player.music.id === index+1? true: false
    return (
      <Item
        item={item}
        key={index}
        index={index}
        playing={playing}
        active={active}
        {...playerActions}
        onItemActive={()=>this.handleItemActive(index)} />
    )
  }
  render() {
    const { playlist } = this.props
    return (
      <div className={style.list}>
        <ul className={style.items}>
          {playlist.map((item,index) =>
            this.renderItem(item, index)
          )}
        </ul>
      </div>
    )
  }
}

export default ListView