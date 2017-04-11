
import React, { Component } from 'react'
import style from './style.scss'

class MusicRange extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      status: 0,
      mouseDown: false,
      duration: 100
    }
  }

  componentDidMount() {
    this.playerUpdate(this.props.player)
  }

  componentWillReceiveProps(next) {
    this.playerUpdate(next.player)

    this.setState({
      'status': next.player.music.status
    })
  }

  handleMouseDownRange(e) {
    if(e.target.value === this.state.status) {
      this.setState({'mouseDownStatus': e.target.value})
    }
    this.setState({'mouseDown': true})
  }

  handleChangeRange(e) {
    this.statusUpdate(e.target.value)
  }

  handleMouseUpRange(e) {
    this.setState({'mouseDown': false})
    this.props.playerActions.dragMusicSpeed(e.target.value)
    this.currentTimeUpdate(e.target.value)
  }

  statusUpdate(status) {
    this.setState({
      'status': status,
      'mouseDownStatus': 0
    })
  }

  approximate(first, last) {
    return Math.abs(first - last) > 1
  }

  playerUpdate(nextPlayer){
    const audio = this.refs.audio
    const status = audio.currentTime

    if(nextPlayer.music.pause !== audio.paused){
      nextPlayer.music.pause
        ?audio.pause()
        :audio.play()
    }  

    if(this.approximate(nextPlayer.music.status, status)) {
      this.currentTimeUpdate(nextPlayer.music.status)
    }

    if(audio.duration) {
       this.setState({
        'duration': audio.duration
      })
    }
  }

  currentTimeAuto(e) {
    const currentTime = e.target.currentTime
    const playerActions = this.props.playerActions
    const duration = this.state.duration
    if(!this.state.mouseDown) {
      if(currentTime < duration) {
        // if(currentTime-status > 1) {
        this.statusUpdate(currentTime)
        playerActions.dragMusicSpeed(currentTime)
        // }
      } else {
        playerActions.nextMusic(this.props.length)
      }
    } 
  }

  currentTimeUpdate(status) {
    const audio = this.refs.audio
    audio.currentTime = status
  }

  render() {
    const { music, player } = this.props
    const status = player.status
    const { duration } = this.state
    const stateStatus = this.state.status

    const timeOptions = {
      minute: 'numeric', 
      second: 'numeric'
    }

    const statusToTime = new Date(stateStatus *1000).toLocaleString('en-US', timeOptions)
    const durationToTime = new Date(duration *1000).toLocaleString('en-US', timeOptions)
    return (
      <div className={style.track}>
        <audio 
          src={music.mp3Url} 
          ref="audio"
          onTimeUpdate={::this.currentTimeAuto}>
        </audio>
        <div className={style.info}>
          {music.name}
          <span className={style.artist}>
            {' - ' + music.artists[0].name}
          </span>
        </div>
        <span className={style.time}>
          {statusToTime + ' / '}
          <span className={style.duration}>
            {durationToTime}
          </span>
        </span>
        <input
          type="range"
          className={style.range}
          max={this.state.duration}
          value={parseInt(stateStatus)}
          onMouseDown={::this.handleMouseDownRange}
          onChange={::this.handleChangeRange}
          onMouseUp={::this.handleMouseUpRange}/>
      </div>
    )
  }
}

export default MusicRange