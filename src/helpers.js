export const TILE_COUNT = 16;
export const GRID_SIZE = 4;
export const BOARD_SIZE = 420;
export const SHUFFLE_NUM = 42;


export function getPosition(index) {
    return {
      row: Math.floor(index / GRID_SIZE),
      col: index % GRID_SIZE,
    };
  }
  
  export function getVisualPosition(row, col, width, height) {
    return {
      x: col * width,
      y: row * height,
    };
  }

  export function canSwap(srcIndex, destIndex) {
    const { row: srcRow, col: srcCol } = getPosition(srcIndex);
    const { row: destRow, col: destCol } = getPosition(destIndex);
    return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
  }

  export function swap(tiles, src, dest) {
    const tilesResult = [...tiles];
    [tilesResult[src], tilesResult[dest]] = [tilesResult[dest], tilesResult[src]];
    return tilesResult;
  }

  export function Won(tiles){
  
    console.log(tiles);
    for(var i =0; i< TILE_COUNT ; i++){
      if(tiles[i] !== i )
        return false;
    }
    return true;
    }