
import React, { Component } from 'react'
import style from './style.scss'
import MusicRange from './musicRange'
import classNames from 'classnames'

class Player extends Component {
  handleClickPlay(pause) {
    this.props.playerActions.suspendMusic(!pause)
  }

  render() {
    const { player, playlist, playerActions } = this.props
    const music = playlist[player.music.id-1]
    const pause = player.music.pause
    const playBtnClasses = classNames({
      [style.play]: pause,
      [style.pause]: !pause
    })

    return (
      <div className={style.player}>
        <div className={style.pic}>
          <img src={music.album.picUrl} />
        </div>
        <div className={style.group}>
          <button
            className={style.last}
            onClick={()=>playerActions.nextMusic(playlist.length)}>
          </button>
          <button
            className={playBtnClasses}
            onClick={()=>this.handleClickPlay(pause)}>
          </button>
          <button
            className={style.next}
            onClick={()=>playerActions.nextMusic(playlist.length)}>
          </button>
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