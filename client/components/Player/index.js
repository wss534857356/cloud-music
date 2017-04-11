
import React, { Component } from 'react'
import style from './style.scss'
import MusicRange from './musicRange'
import classNames from 'classnames'
import { LAST_MUSIC, PAUSE_MUSIC, NEXT_MUSIC } from '../../constants/filters'

const STYLES = {
  [LAST_MUSIC]: style.last,
  [PAUSE_MUSIC]: style.play,
  [NEXT_MUSIC]: style.next
}
class Player extends Component {
  handleClickPlay(pause) {
    this.props.playerActions.suspendMusic(!pause)
  }

  render() {
    const { player, playlist, playerActions } = this.props
    const music = playlist[player.music.id-1]
    const pause = player.music.pause
    const CONTROL_MUSIC = {
      [LAST_MUSIC]: ()=>playerActions.nextMusic(playlist.length),
      [PAUSE_MUSIC]: ()=>this.handleClickPlay(pause),
      [NEXT_MUSIC]: ()=>playerActions.nextMusic(playlist.length)
    }

    STYLES[PAUSE_MUSIC] = classNames({
      [style.play]: pause,
      [style.pause]: !pause
    })

    return (
      <div className={style.player}>
        <div className={style.pic}>
          <img src={music.album.picUrl} />
        </div>
        <div className={style.group}>
          {[LAST_MUSIC, PAUSE_MUSIC, NEXT_MUSIC].map(control => 
            <button key={control}
              className={STYLES[control]}
              onClick={CONTROL_MUSIC[control]}>
            </button>
          )}
        </div>
        <MusicRange 
          player={player}
          music={music}
          playerActions={playerActions}
          length={playlist.length}/>
      </div>
    )
  }
}

export default Player