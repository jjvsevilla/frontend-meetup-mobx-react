import { observable, action } from "mobx"
import uuidV4 from 'uuid/v4'
import { mocks, error } from '../helpers/mocks'
import { randomBoolean } from '../helpers/utils'

class Profile {
  uuid;
  @observable username  = ''
  @observable profile = undefined
  @observable loading = true
  @observable error = ''

  constructor(username) {
    this.uuid = uuidV4();
    this.setUsername(username)
    this.loadProfile()
  }

  @action setUsername = (username) => {
    this.username = username
  }

  @action loadProfile = async () => {
    setTimeout(async () => {
      /* uncomment for call real api */
      const res = await window.fetch(`https://api.github.com/users/${this.username}`)
      const jsonRes = await res.json()
      if (res.status >= 400) {
        this.onLoadProfileFail(jsonRes)
      } else {
        this.onLoadProfileSuccess(jsonRes)
      }

      /* mock response for simulate an async call using promise
         because git api only allows 60 calls per hour */
      // const mock = mocks.find(mock => mock.login === this.username)
      // const isSuccessFlow = randomBoolean()

      // const promise = new Promise((resolve, reject) => {
      //   if (isSuccessFlow) {
      //     resolve(mock)
      //   } else {
      //     reject(error)
      //   }
      // })

      // promise
      //   .then(jsonRes => this.onLoadProfileSuccess(jsonRes))
      //   .catch(error => this.onLoadProfileFail(error))

    }, 500)
  }

  @action onLoadProfileSuccess = (user) => {
    this.profile = user
    this.loading = false
  }

  @action onLoadProfileFail = (error) => {
    this.error = error.message
    this.loading = false
  }
}

export default Profile
