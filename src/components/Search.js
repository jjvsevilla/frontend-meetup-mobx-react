import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

class SearchBar extends Component {
  handleChange = (event) => {
    this.props.ProfilesStore.setUsername(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.ProfilesStore.search()
  }

  render() {
    const { username } = this.props.ProfilesStore
    return (
      <form onSubmit={this.handleSubmit} className="search">
        <label>
          GitHub account:
          <input type="text" value={username} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default inject('ProfilesStore')(observer(SearchBar))
