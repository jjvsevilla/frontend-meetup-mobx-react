import { observable, action } from "mobx"
import Profile from '../models/ProfileStore'

class ProfilesStore {
  @observable username = 'jjvsevilla';
  @observable list = [];

  @action setUsername = (value) =>{
    this.username = value
  }

  @action search = () => {
    this.list.push(new Profile(this.username))
  }
}

export default new ProfilesStore()
