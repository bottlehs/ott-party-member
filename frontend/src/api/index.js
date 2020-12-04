import { createAPI } from 'create-api'

const logRequests = !!process.env.DEBUG_API

const api = createAPI({
  version: '/v0',
  config: {
    databaseURL: 'https://ott-party-member-default-rtdb.firebaseio.com'
  }
})