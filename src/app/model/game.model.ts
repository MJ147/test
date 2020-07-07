export interface Board {
    id: number;
    size: number;
    squares: number[];
}

export interface Player {
    id: number;
    xo: number;
}

export interface Game {
    id: number;
    board: Board;
    players: Player[];
}