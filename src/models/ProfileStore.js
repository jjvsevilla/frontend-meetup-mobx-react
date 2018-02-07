import { observable, action } from "mobx"

class ProfileStore {
  @observable username  = ''
  @observable profile = undefined
  @observable loading = true

  constructor(username) {
    this.setUsername(username)
    this.loadProfile()
  }

  @action setUsername = (username) => {
    this.username = username
  }

  @action loadProfile = () => {
    setTimeout(() => {
      window.fetch(`https://api.github.com/users/${this.username}`)
      .then(res => res.json())
      .then(action(user => {
        this.profile = user
        this.loading = false
      }))
    }, 2500)
  }
}

export default ProfileStore
