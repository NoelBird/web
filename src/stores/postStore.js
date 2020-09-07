import { observable, action } from "mobx";
import agent from "agent";

class PostStore{
    @observable postList = []
    @observable postMarkdownList = []
    @action getMarkdownList = () => {
        this.postMarkdownList = this.postList.map(uri => {
            return console.log(uri)
            
        })
        console.log(this.postMarkdownList)
    }

    @action getPostList = () => {
        agent.Post.getList()
            .then(action((res) => {
                this.postList = []
                res.data.tree.forEach( x => {
                    if(x.path.endsWith('.md')){
                        this.postList.push(x.path)
                    }
                })
            }))
    }


}

export default new PostStore()