
import { PLAY_ORDER } from '../constants/filters'

export function onSavePlayer(player) {
  localStorage.player = JSON.stringify(player)
}

export function getPlayer() {
  const player = localStorage.player
    ? JSON.parse(localStorage.player)
    : {
      music: {
        id:1,
        pause: false,
        status: 0
      },
      choose: PLAY_ORDER,
      sound: 80
    }
  return player
}