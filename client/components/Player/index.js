
import React, { Component } from 'react'
import style from './style.scss'
import PlayButton from './playButton'
import MusicRange from './musicRange'

class Player extends Component {
  render() {
    const { player, playlist, playerActions } = this.props
    const music = playlist[player.music.id-1]

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
          <PlayButton 
            pause={player.music.pause}
            suspendMusic={playerActions.suspendMusic}>
          </PlayButton>
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