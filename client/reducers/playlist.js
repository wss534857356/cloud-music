
import { handleActions } from 'redux-actions'
import { getPlaylist } from '../localStorage/playlist'

const initialState = getPlaylist()

export default handleActions({
  'add playlist' (state, action) {
    if(!state.find(item => {
      console.log(item.id  + ':' + action.payload.id)
      return item.id === action.payload.id
    })) {
      return [...state, action.payload]
    } else {
      return state
    }
  },

  'delete playlist' (state, action) {
    return state.filter(playlist => playlist.id !== action.payload)
  },

  'clear playlist' (state, action) {
    return []
  },

  'save playlist' (state, action) {
    return []
  }
}, initialState)