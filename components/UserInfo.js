export default class UserInfo {
    constructor(nameSelector, jobSelector) {
      this._name = nameSelector;
      this._job = jobSelector;
    }
  
    getUserInfo() {
      const name = this._name.textContent;
      const job = this._job.textContent;
      return ([name, job]);
    }
  
    setUserInfo(newName, newJob) {
      console.log(newName, newJob);
      this._name.textContent = newName;
      this._job.textContent = newJob;
    }
  }