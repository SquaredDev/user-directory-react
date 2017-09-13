import store from '../stores'
import randomUsers from '../components/randomUsers.json'

export function getUsers() {
  console.log(randomUsers)
  store.dispatch({
    type:'GET_USERS',
    users: randomUsers
  })
}
