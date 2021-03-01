const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let arr = Array.isArray(collection) ? collection : Object.values(collection)
      
      for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      let arr = Array.isArray(collection) ? collection : Object.values(collection)
      let newArr = [];

      for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
      }
      return newArr;
    },
    
    reduce: function(collection, callback, acc) {
      let accumulator = acc ? acc : collection[0]
      let i = acc ? 0 : 1
      
      for (i; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
      }
      return accumulator;
    },

    find: function(collection, predicate) {
      let arr = Array.isArray(collection) ? collection : Object.values(collection)
      for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
          return arr[i];
        }
      }
    },

    filter: function(collection, predicate) {
      let arr = Array.isArray(collection) ? collection : Object.values(collection)
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
          newArr.push(arr[i]);
        }
      }
      return newArr;
    },
    // or just .length I guess as long as an Array; defeats the whole purpose of this function though
    size: function(collection) {
      let arr = Array.isArray(collection) ? collection : Object.values(collection)
      let counter = 0;
      for (let i = 0; i < arr.length; i++) {
        counter += 1;
      }
      return counter;
    }, 
    // could use slice here in a terney condition
    first: function(array, n = 0) {
      if (n === 0) {
        return array[n];
      } else {
        let newArr = [];
        for (let i = 0; i < n; i++) {
          newArr.push(array[i]);
        }
        return newArr;
      }
    },

    last: function(array, n = 0) {
      return (n !== 0) ? array.slice(array.length-n) : array[array.length-1];
    },

    compact: function(array) {
      let newArr = [];
      for (const elem of array) {
        if (!!elem) {
          newArr.push(elem);
        }
      }
      return newArr;
    },

    sortBy: function(array, callback) {
      let newArr = [...array];
      newArr.sort(function(a, b) {return callback(a) - callback(b)});
      return newArr;
    },

    flatten: function(array, shallow) {
      let newArr = [];
      if (shallow) {
        for (const elem of array) {
          if (Array.isArray(elem)) {
            newArr = newArr.concat(elem);
          } else {
            newArr.push(elem);
          }
        }
      } else {
        for (const elem of array) {
          if (Array.isArray(elem)) {
            newArr = newArr.concat(fi.flatten(elem));
          } else {
            newArr.push(elem);
          }
        }
      }
      return newArr;
    },

    uniq: function(array, sorted=false, callback=false) {
      let newArr = [];
      if (callback) {
        let results = [];
        for (const elem of array) {
          if (!results.includes(callback(elem))) {
            results.push(callback(elem));
            newArr.push(elem);
          }
        }
      } else {
        for (const elem of array) {
          if (!newArr.includes(elem)) {
            newArr.push(elem);
          }
        }
      } 
      return newArr;
    },

    keys: function(obj) {
      let keys = [];
      for (const prop in obj) {
        keys.push(prop)
      }
      return keys;
    },

    values: function(obj) {
      let values = [];
      for (const prop in obj) {
        values.push(obj[prop])
      }
      return values;
    },

    functions: function(obj) {
      let funcs = [];
      for (const prop in obj) {
        if (typeof obj[prop] === 'function') {
          funcs.push(prop);
        }
      }
      return funcs;
    }
  }
})()

fi.libraryMethod()
