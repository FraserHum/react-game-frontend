import { systemReducer } from './system/reducers'
import { gameReducer } from './game/reducers'
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  system: systemReducer,
  game: gameReducer
})

export type RootState = ReturnType<typeof rootReducer>