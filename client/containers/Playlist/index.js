
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as playlistActions from '../../actions/playlist'
import * as playerActions from '../../actions/player'
import style from './style.scss'

import ListView from '../../components/ListView'

class Playlist extends Component {
  handleDeletePlaylist(id) {
    const { playlist, player, playlistActions, playerActions } = this.props
    if(player.music.id>playlist.length-1){
      playerActions.chooseMusic(1)
    }
    playlistActions.deletePlaylist(id)
  }
  render() {
    const { playlist, player, playlistActions, playerActions } = this.props
    return (
      <div className={style.PlaylistBody}>
        <span>播放列表</span>
        <ListView
          playlist={playlist}
          player={player}
          playerActions={playerActions}
          onRemove={::this.handleDeletePlaylist}>
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