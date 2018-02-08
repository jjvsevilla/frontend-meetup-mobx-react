import { observable, action } from "mobx"
import Profile from '../models/Profile'
import { mocks } from '../helpers/mocks'
import { randomChoice } from '../helpers/utils'

class ProfilesStore {
  @observable username = 'jjvsevilla';
  @observable list = [];

  @action setUsername = (value) =>{
    this.username = value
  }

  @action search = () => {
    /* mock response for simulate an async call using promise
    because git api only allows 60 calls per hour */
    // const mock = randomChoice(mocks)
    // this.setUsername(mock.login)

    this.list.push(new Profile(this.username))
  }
}

export default new ProfilesStore()
