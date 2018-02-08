import React, { Component } from 'react'
import DevTools from 'mobx-react-devtools'
import Search from './Search'
import UserList from './UserList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DevTools />
        <header className="App-header">
          <h1 className="App-title">Welcome to React + MobX</h1>
        </header>
        <Search />
        <UserList />
      </div>
    );
  }
}

export default App