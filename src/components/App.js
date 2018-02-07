import React, { Component } from 'react'
import DevTools from 'mobx-react-devtools'
import { observer, inject } from 'mobx-react'
import Search from './Search'
import UserList from './UserList'

class App extends Component {

  render() {
    const { ProfilesStore } = this.props
    const { list } = ProfilesStore
    return (
      <div className="App">
        <DevTools />
        <header className="App-header">
          <h1 className="App-title">Welcome to React + MobX</h1>
        </header>
        <Search />
        <UserList userList={list} />
      </div>
    );
  }
}

export default inject('ProfilesStore')(observer(App));