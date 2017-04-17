
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PlaylistActions from '../../actions/playlist'
import * as PlayerActions from '../../actions/player'
import style from './style.scss'

import StatusBar from '../../components/StatusBar'
import Player from '../../components/Player'
import MusicBoard from '../../components/MusicBoard'


class App extends Component {
  renderPlayer() {
    const { playlist, player, playerActions } = this.props
    if(playlist.length>0)
      return (
        <Player player={player} playlist={playlist} playerActions={playerActions} />
      )
  }
  render() {
    const { children, playlist, player, playlistActions, playerActions } = this.props
    const routes = this.props.location

    // console.log(routes)
    return (
      <div className={style.normal}>
        <StatusBar routes={routes} />
        <MusicBoard>
          {children}
        </MusicBoard>
        {this.renderPlayer(playlist)}
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