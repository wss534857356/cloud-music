
import { handleActions } from 'redux-actions'
import { PLAY_ORDER } from '../constants/filters'
import { getPlayer } from '../localStorage/player'

const initialState = getPlayer()
/*{
  music: {
    id:1,
    pause: false,
    status: 0
  },
  choose: PLAY_ORDER,
  sound: 80
}
*/
export default handleActions({
  'choose music' (state, action){
    return {
      music: {
        id:action.payload,
        pause: false,
        status: 0,
      },
      choose: state.choose,
      sound: state.sound
    }
  },

  'suspend music' (state, action){
    return {
      ...state,
      music: {
        ...state.music,
        pause: action.payload
      }
    }
  },

  'drag music speed' (state, action){
    return {
      ...state,
      music: {
        ...state.music,
        status: action.payload,
      }
    }
  },

  'change sound' (state, action){
    return {
      ...state,
      sound: action.payload
    }
  },

  'change choose type' (state, action){
    return {
      ...state,
      choose: action.payload
    }
  },

  'next music' (state, action){
    let next = state.music.id;
    switch(state.choose) {
      case PLAY_ORDER:
        if(action.payload > next){
          next++;
        } else {
          next=1;
        }
        break;
      default:break;
    }
    return {
      ...state,
      music: {
        id:next,
        pause: false,
        status: 0,
      }
    }
  }
}, initialState)