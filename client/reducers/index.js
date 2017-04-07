
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import playlist from './playlist'
import player from './player'

export default combineReducers({
  routing,
  playlist,
  player
})