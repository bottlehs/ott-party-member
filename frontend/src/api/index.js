import { createAPI } from 'create-api'

const logRequests = !!process.env.DEBUG_API

const api = createAPI({
  version: '/v0',
  config: {
    databaseURL: 'https://ott-party-member-default-rtdb.firebaseio.com'
  }
})

function fetch (child) {
  alert(child);
  return new Promise((resolve, reject) => {
    api.child(child).once('value', snapshot => {
      const val = snapshot.val()
      // mark the timestamp when this item is cached
      resolve(val)
    }, reject)
  })  
}

export function fetchIdsByType (type) {
  return fetch(`${type}stories`)  
  /*
  return api.cachedIds && api.cachedIds[type]
    ? Promise.resolve(api.cachedIds[type])
    : fetch(`${type}stories`)
    */
}