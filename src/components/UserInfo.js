export default class UserInfo {
    constructor(name, job, avatar, myId) {
      this._name = name;
      this._job = job;
      this._myId = myId
      this._avatar = avatar;
    }

    setUserAvatar(avatar) {
      this._avatar.style.backgroundImage = `url(${avatar})`;
    }

    getUserInfo() {
      const name = this._name.textContent;
      const job = this._job.textContent;
      return ([name, job]);
    }
  
    setUserInfo({name, about, avatar,_id}) {
      console.log(name, about, avatar,_id)
      this._name.textContent = name;
      this._job.textContent = about;
      this._avatar.src = avatar;
      this._myId = _id;
    }
  }