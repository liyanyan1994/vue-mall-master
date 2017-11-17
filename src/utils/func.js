import axios from 'axios'

export default {
  axiosGet (api, cb) {
    axios.get(api)
    .then(cb)
    .catch(err => {
      console.log(err)
    })
  },
  axiosPost (api, post, cb) {
    axios.post(api, post)
    .then(cb)
    .catch(err => {
      console.log(err)
    })
  }
}
