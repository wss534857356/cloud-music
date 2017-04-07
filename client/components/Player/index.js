
import React, { Component } from 'react'
import style from './style.scss'
import classNames from 'classnames'
import { PLAY_ORDER } from '../../constants/filters'

class Player extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      player: props.player,
      duration: 100,
      mouseDown: false
    }
  }

  componentDidMount() {
    this.playerUpdate(this.props.player)
  }

  componentWillReceiveProps(next) {
    this.playerUpdate(next.player)

    this.setState({
      'player': next.player
    })
  }

  playerUpdate(nextPlayer){
    const player = this.state.player
    const audio = this.refs.audio

    // if(nextPlayer.music.pause !== player.music.pause) {
    if(nextPlayer.music.pause) {
        audio.pause()
      } else {
        audio.play()
    }
    // }

    if(Math.abs(nextPlayer.music.status - player.music.status) > 1) {
      this.currentTimeUpdate(nextPlayer.music.status)
    }

    if(audio.duration) {
       this.setState({
        'duration': audio.duration
      })
    }
  }

  currentTimeUpdate(status) {
    const audio = this.refs.audio
    audio.currentTime = status
  }

  currentTimeAuto(e) {
    const currentTime = e.target.currentTime
    const playerActions = this.props.playerActions
    const duration = this.state.duration
    const status = this.state.player.music.status
    if(!this.state.mouseDown) {
      if(currentTime < duration) {
        // if(currentTime-status > 1) {
        this.statusUpdate(currentTime)
        playerActions.dragMusicSpeed(currentTime)
        // }
      } else {
        playerActions.nextMusic(this.props.playlist.length)
      }
    } 
  }

  statusUpdate(status) {
    const statePlayer = this.state.player

    this.setState({
      'player': {
        ...statePlayer,
        'music': {
          ...statePlayer.music,
          'status': status
        }
      }
    })
  }

  clearCurrentTimeAuto() {
    clearInterval(this.state.interval)
    this.setState({
      'interval': 0
    })
  }

  handleClickPlay(pause) {
    this.props.playerActions.suspendMusic(!pause)
  }

  handleChangeRange(e) {
    this.statusUpdate(e.target.value)
  }

  handleMouseUpRange(e) {
    this.props.playerActions.dragMusicSpeed(e.target.value)
    this.setState({'mouseDown': false})
    this.currentTimeUpdate(e.target.value)
  }

  render() {
    const { player, playlist, playerActions } = this.props
    const statePlayer = this.state.player
    const music = playlist[player.music.id-1]

    const playBtnClasses = classNames({
      [style.play]: statePlayer.music.pause,
      [style.pause]: !statePlayer.music.pause
    })
    const timeOptions = {
      minute: 'numeric', 
      second: 'numeric'
    }
    const status = new Date(player.music.status *1000).toLocaleString('en-US', timeOptions)
    const duration = new Date(this.state.duration *1000).toLocaleString('en-US', timeOptions)
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
            onClick={()=>this.handleClickPlay(statePlayer.music.pause)}>
          </button>
          <button
            className={style.next}
            onClick={()=>playerActions.nextMusic(playlist.length)}>
          </button>
        </div>
        <div className={style.track}>
          <div className={style.info}>
            {music.name} {this.state.interval}
            <span className={style.artist}>
              {' - ' + music.artists[0].name}
            </span>
          </div>
          <span className={style.time}>
            {status + ' / '}
            <span className={style.duration}>
              {duration}
            </span>
          </span>
          <input
            type="range"
            className={style.range}
            max={this.state.duration}
            value={parseInt(statePlayer.music.status)}
            onMouseDown={()=>this.setState({'mouseDown': true})}
            onChange={::this.handleChangeRange}
            onMouseUp={::this.handleMouseUpRange}/>
        </div>
        <div>
          <audio 
            src={music.mp3Url} 
            ref="audio"
            onTimeUpdate={::this.currentTimeAuto}>
          </audio>
        </div>
      </div>
    )
  }
}

export default Player