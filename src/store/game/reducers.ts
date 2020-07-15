import {
    GameBoard,
    GameActionTypes,
    UPDATE_TILE
} from './types'

const initialState: GameBoard = {
    board: []
}

export function gameReducer(
    state = initialState,
    action: GameActionTypes
): GameBoard {
    switch (action.type) {
        case UPDATE_TILE:
            return {
                board: [...state.board.filter(tile => tile.position !== action.meta.position), action.playload]
            }
            default:
                return state
    }
}
