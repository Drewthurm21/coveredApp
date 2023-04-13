
const generateUserArray = (num) => {
  let users = []
  let i = 2
  while (i <= num + 1) {
    let newUser = {
      id: i,
      userName: `testUser${i}`,
      password: `password${i}`
    }
    users.push(newUser)
    i++
  }
  return users
}

const userList = [{ id: 1, userName: 'drew', password: 'password' }, ...generateUserArray(4)]


module.exports = {
  userList
}