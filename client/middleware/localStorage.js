
import { onSavePlayer } from '../localStorage/player'
import { onSavePlaylist } from '../localStorage/playlist'

function saveLocalStorage(save, store, action, array) {
  if(array.indexOf(action.type) !== -1){
    // console.log(action.type)
    save(store)
  }
}
export default store => next => action => {
  next(action)

  const playerActions = [
    'choose music',
    'change choose type',
    'change sound',
    'next music'
  ]
  saveLocalStorage(onSavePlayer, store.getState().player, action, playerActions)

  const playlistActions = [
    'add playlist',
    'delete playlist',
    'clear playlist'
  ]
  saveLocalStorage(onSavePlaylist, store.getState().playlist, action, playlistActions)
}