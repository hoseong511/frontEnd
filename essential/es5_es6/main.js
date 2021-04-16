import _ from 'lodash'

const usersA = [
  {userId: '1', name: 'HO'},
  {userId: '2', name: 'Neo'},
]
const usersB = [
  {userId: '1', name: 'HO'},
  {userId: '3', name: 'Amy'},
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC);
console.log('uniqBy', _.uniqBy(usersC, 'userId'));

const usersD = _.unionBy(usersA, usersB, 'userId');
console.log('unionBy', usersD);

const foundUser = _.find(usersB, {name: 'Amy'})
const foundUserIndex = _.findIndex(usersB, {name: 'Amy'})

console.log(foundUser);
console.log(foundUserIndex);

_.remove(users, {name: 'HO'})
console.log(users);