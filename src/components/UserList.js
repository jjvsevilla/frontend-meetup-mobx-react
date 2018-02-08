import React from 'react'
import { inject, observer } from 'mobx-react'
import Profile from './Profile'

const UserList = inject('ProfilesStore')(observer(({ ProfilesStore }) => {
  const { list: userList } = ProfilesStore
  return (
    <div className="list">
      {userList.map((user, index) => <Profile key={user.uuid} {...user} />)}
    </div>
  )
}))

export default UserList