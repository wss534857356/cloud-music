
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import Playlist from '../containers/Playlist'
import { PLAY_LIST_MENU, SEARCH_LIST_MENU } from '../constants/filters'

module.exports = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={Playlist} />
      <Route path={PLAY_LIST_MENU} component={Playlist}></Route>
      <Route path={SEARCH_LIST_MENU}></Route>
    </Route>
  </div>
)