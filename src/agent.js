import axios from 'axios'

const ROOT_URI = 'https://raw.githubusercontent.com/NoelBird/TIL/master/'

const Post = {
    'get': (uri) => {
        return axios.get(`${ROOT_URI}${uri}`)
    },
    'getList': () => {
        return axios.get('https://api.github.com/repos/noelbird/TIL/git/trees/master?recursive=1')
    }
}

export default {
    Post
}