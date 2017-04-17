
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as playlistActions from '../../actions/playlist'
import * as playerActions from '../../actions/player'
import style from './style.scss'

import { postSearch } from '../../api/search'

import SearchBar from '../../components/SearchBar'
import ListView from '../../components/ListView'

class Search extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      searchList: []
    }
  }
  handleSearch(value) {
    browserHistory.push('/search/' + value)
    this.searchToState(value)
  }
  searchToState(value) {
    if( value ) {
      const search = list => {
        this.setState({
          searchList: list
        })
      }
      postSearch(search, value)
    }
  }
  componentWillMount() {
    const { search } = this.props
    if( search ) {
      this.searchToState(search)
    }
  }
  render() {
    const { playlistActions, playerActions, search } = this.props
    const { searchList } = this.state
    return (
      <div>
        <SearchBar
          placeholder="搜索音乐"
          onSearch={::this.handleSearch}/>
        <ListView
          playlist={searchList}
          onChooseMusic={playlistActions.addPlaylist}
          playerActions={playerActions}>
        </ListView>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    search: props.params.search
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
)(Search)