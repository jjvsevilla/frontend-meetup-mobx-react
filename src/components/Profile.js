import React from 'react';
import { observer } from 'mobx-react'

const Profile = ({ username, profile, loading }) => (
  <div className="profile">
    <div className="avatar">
    {!loading && <img src={profile.avatar_url} height={150} alt={`${username} profile`} />}
    </div>
    <div className="data">
      <p>{loading ? `loading ${username} profile...` : profile.name}</p>
      {!loading && <a href={profile.html_url} target="_blank">Git account</a>}
    </div>
  </div>
)

export default observer(Profile)