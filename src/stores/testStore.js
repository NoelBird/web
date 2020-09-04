import { observable, action, reaction } from "mobx";

class TestStore{
    @observable testVal = '초기값'

    @action test = (e) => {
        this.testVal = e.target.value
        console.log(this.testVal)
    }
}

export default new TestStore()