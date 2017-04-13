
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as playlistActions from '../../actions/playlist'
import * as playerActions from '../../actions/player'
import style from './style.scss'

import ListView from '../../components/ListView'

class Playlist extends Component {
  render() {
    const { playlist, player, playlistActions, playerActions } = this.props
    return (
      <div className={style.PlaylistBody}>
        <ListView
          playlist={playlist}
          player={player}
          playerActions={playerActions}>
        </ListView>
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
    playlistActions: bindActionCreators(playlistActions, dispatch),
    playerActions: bindActionCreators(playerActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist)