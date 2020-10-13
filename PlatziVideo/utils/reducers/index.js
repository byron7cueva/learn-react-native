import { combineReducers } from 'redux'

import { videosReducer } from './videos'
import { userReducer } from './user'

export const reducer = combineReducers({
  videos: videosReducer,
  user: userReducer
})