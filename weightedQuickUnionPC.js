let id = {};
let sz = {};

function makeIDObj (arr) {
  if (!Array.isArray(arr)) return `Array parameter required. Parameter is not an array.`;

  for (let i = 0; i < arr.length; i++) {
    id[arr[i]] = {
      value: arr[i],
      parent: arr[i],
      root: arr[i],
    };
    sz[arr[i]] = 1;
  }

  return id;
};

function findRoot (x) {
  return id[x].root;
};

function connected (x, y) {
  return findRoot(x) == findRoot(y);
};

function union (x, y) {
  if (connected(x, y)) return `${x} and ${y} are  connected by root ${findRoot(x)}`;

  let rootTree, targetTree;
  if (sz[x] <= sz[y]) {
    rootTree = y;
    targetTree = x;
  } else {
    rootTree = x;
    targetTree = y;
  };

  id[targetTree].parent = id[rootTree].value;
  id[targetTree].root = id[rootTree].root;
  sz[rootTree] += sz[targetTree];
  sz[targetTree] = sz[rootTree];
};

console.log(makeIDObj([10,12,14,15,16,19,20]));
console.log(findRoot(12));
console.log(connected(12, 14));
union(12, 14);
console.log(id, sz);
console.log(connected(12, 14));
console.log(findRoot(12), findRoot(14));
