import React, { Component } from 'react'
import { observer } from 'mobx-react'
import uuidV4 from 'uuid/v4'
import Profile from './Profile'

class UserList extends Component {
  render() {
    const { userList } = this.props;
    return (
      <div className="list">
        {userList.map((user, index) => <Profile key={uuidV4()} {...user} />)}
      </div>
    )
  }
}

export default observer(UserList)