
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PlaylistActions from '../../actions/playlist'
import style from './style.scss'

class Playlist extends Component {
  renderTab(filter) {
    return (
      <div></div>
    )
  }
  render() {
    return (
      <div className={style.PlaylistBody}>
        <span>播放列表</span>
        {this.renderTab("")}
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
    playlistActions: bindActionCreators(PlaylistActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist)