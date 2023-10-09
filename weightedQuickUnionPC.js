let id = [];
let sz = [];
let rf = [];

function makeIDArr (arr) {
  if (!Array.isArray(arr)) return "Array parameter required. Parameter is not an array.";
  
  rf = arr;
  id.length = arr.length;

  for (let i = 0; i < id.length; i++) {
    id[i] = {
      value: arr[i],
      parent: arr[i],
      root: arr[i],
    };
    sz[i] = 1;
  }

  return id;
};

function connected(x, y) {
  return id[rf.indexOf(x)] == id[rf.indexOf(y)];
};

function 

console.log(makeIDArr([10,11,12,13,14,15,16,17,18,19]));
console.log(id[2], id[3]);
console.log(connected(12,13))
