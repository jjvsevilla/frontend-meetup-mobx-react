import React from 'react';

const showProfile = (loading, error) => (
  !loading && !error
)

const showContent = (username, profile, loading, error) => {
  if (loading) {
    return (<p>{`Loading ${username} profile...`}</p>)
  } else if (!!error) {
    return (
      <p>
        <span>{`Error while trying to fetch: ${username} profile.`}</span>
        <br />
        <span>{`Error: ${error}`}</span>
      </p>
    )
  }
  return (
    <React.Fragment>
      <p className="name">{profile.name}</p>
      <a className="login" href={profile.html_url} target="_blank">{profile.login}</a>
    </React.Fragment>
  )
}

const Profile = ({ username, profile, loading, error }) => (
  <div className="profile">
    <div className="avatar">
    {showProfile(loading, error) && <img src={profile.avatar_url} height={150} alt={`${username} profile`} />}
    </div>
    <div className="data">
      {showContent(username, profile, loading, error)}
    </div>
  </div>
)

export default Profile