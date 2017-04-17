
import React, { Component } from 'react'
import style from './style.scss'

class SearchBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSearch(text)
    }
  }

  render() {
    return(
      <input
        className={style.normal}
        type="text"
        autoFocus="true"
        value={this.state.text}
        onChange={::this.handleChange}
        onKeyDown={::this.handleSubmit}
        placeholder={this.props.placeholder}/>
    )
  }
}

export default SearchBar