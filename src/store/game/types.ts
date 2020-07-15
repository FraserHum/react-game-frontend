export interface Tile {
  terrain: string;
  weather: string;
  position: number[];
}

export interface GameBoard {
  board: Tile[];
}

export const UPDATE_TILE = 'UPDATE_TILE'


interface UpdateTileAction {
    type: typeof UPDATE_TILE
    playload: Tile
    meta: {
        position: number[];
    }
}

export type GameActionTypes = UpdateTileAction