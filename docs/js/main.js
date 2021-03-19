const first = (arr, n) => {
  if (n >=0 ) {
    let ass= (arr.splice(0, n));
    return ass;}
    if ( n<0 ||  Number.isNaN(n) || typeof n === 'string' ||typeof n === 'boolean' ||typeof n === 'symbol' ||typeof n === 'object') {
      let  arr =[];
      return arr;
      
    } else if ( typeof n === 'undefined' ) {
    
    return arr[0];}
  }


console.log(first([7, 9, 0, -2])) // 7
console.log(first([],3)) // []
console.log(first([7, 9, 0, -2],3)) // [7, 9, 0]
console.log(first([7, 9, 0, -2],6)) // [7, 9, 0, -2]
console.log(first([1, 9, 0, -2], -3)) // []


