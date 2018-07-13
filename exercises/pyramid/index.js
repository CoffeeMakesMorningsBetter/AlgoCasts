// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let rowL = n + (n-1)
  let middle = Math.floor(rowL/2)
  let str = ""
  for(let i = 0; i < n; i++){
    for(let j = 0; j < rowL; j++){
      if(j >= middle - i && j <= middle + i){
        str+="#"
      } else {
        str+=" "
      }
    }
    console.log(str)
    str = ""
  }
}

module.exports = pyramid;
