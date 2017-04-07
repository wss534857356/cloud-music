
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PlaylistActions from '../../actions/playlist'
import * as PlayerActions from '../../actions/player'
import style from './style.scss'

import StatusBar from '../../components/StatusBar'
import Player from '../../components/Player'


class App extends Component {
  render() {
    const { 
      children,
      playlist,
      player,
      playlistActions,
      playerActions
    } = this.props
    return (
      <div className={style.normal}>
        <StatusBar history={this.props.history} />
          <button onClick={()=>playerActions.nextMusic(playlist.length)}>下一首</button>
          {player.music.status}
          {player.music.id}
          {children}
        <Player player={player} playlist={playlist} playerActions={playerActions} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    playlist: state.playlist,
    player: state.player
  }
}

function mapDispatchToProps(dispatch) {
  return {
    playlistActions: bindActionCreators(PlaylistActions, dispatch),
    playerActions: bindActionCreators(PlayerActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)