export default class UserInfo {
    constructor(name, job) {
      this._name = name;
      this._job = job;
    }
  
    getUserInfo() {
      const name = this._name.textContent;
      const job = this._job.textContent;
      return ([name, job]);
    }
  
    setUserInfo(newName, newJob) {
      this._name.textContent = newName;
      this._job.textContent = newJob;
    }
  }