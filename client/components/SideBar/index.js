
import React, { Component } from 'react'
import { Link } from 'react-router'
import { SEARCH_LIST_MENU, PLAY_LIST_MENU} from '../../constants/filters'
import cs from 'classnames'
import style from './style.scss'

const MENU_FILTERS = {
  [SEARCH_LIST_MENU]: '搜索',
  [PLAY_LIST_MENU]: '播放列表'
}
class SideBar extends Component {
  renderMenuLink(filter) {
    const title = filter
    return (
      <Link
        activeClassName={style.button_active}
        className={style.button}
        to={filter}
        style={{ cursor: 'pointer' }}>
        <div>
          { MENU_FILTERS[title] }
        </div>
      </Link>
    )
  }
  render() {
    const SideBarClass = cs(style.normal, this.props.className)
    return (
      <div className={SideBarClass}>
        <ul className={style.menus}>
          {[SEARCH_LIST_MENU, PLAY_LIST_MENU].map(filter =>
            <li key={filter}>
              {this.renderMenuLink(filter)}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default SideBar