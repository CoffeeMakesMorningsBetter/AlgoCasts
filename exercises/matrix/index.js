// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let start = 1
  let startRow = 0
  let startCol = 0
  let endRow = n - 1 // matrix length - 1 need index position
  let endCol = n - 1 
  // create an array 

  // not working with new Array(n).fill(new Array(),n)
  let array = []

  for(let o = 0; o < n; o++){
    array.push([])
  }

  while(startCol <= endCol && startRow <= endRow){
    for(let i = startCol; i <= endCol; i++){
      array[startRow][i] = start 
      start++
    }
    startRow++

    for(let j = startRow; j <= endRow; j++){
      array[j][endCol] = start
      start++
    }
    endCol--

    for(let k = endCol; k >= startCol; k--){
      array[endRow][k] = start 
      start++
    }
    endRow--

    for(let l = endRow; l >= startRow; l--){
      array[l][startCol] = start 
      start++
    }
    startCol++
    
  }
  return array 
}

module.exports = matrix;
