
import React, { Component } from 'react'
import Item from './item'
import style from './style.scss'

class ListView extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      active: 0
    }
  }

  handleItemActive(id) {
    this.setState({
      active: id
    })
  }

  renderItem(item, index) {
    let active
    const { playerActions } = this.props
    if(index === this.state.active) {
      active = true
    } else {
      active = false
    }
    return (
      <Item
        item={item}
        key={index}
        index={index}
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