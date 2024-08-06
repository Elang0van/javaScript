function createDataStore() {
    const data = {};
  
    return {
      add: function(key, value) {
        data[key] = value;
      },
      get: function(key) {
        return data[key];
      },
      list: function() {
        return data;
      }
    };
  }
  

  const store = createDataStore();
  
  store.add('name', 'Alice');
  store.add('age', 30);
  
  console.log(store.get('name')); 
  console.log(store.list());

  const array = [1, 2, 3, 4, [5, 6, [7, 8, [9, 9]]]];

  function merge(array, depth) {
      const flatten = (arr, depth) => {
          if (depth === 0) {
              return arr;
          }
          return arr.reduce((acc, val) => {
              if (Array.isArray(val)) {
                  acc.push(...flatten(val, depth - 1));
              } else {
                  acc.push(val);
              }
              return acc;
          }, []);
      };
      let result = flatten(array, depth);
      console.log(result);
  }
  
  merge(array, 1); // Output: [1, 2, 3, 4, 5, 6, [7, 8, [9, 9]]]
  merge(array, 2); // Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 9]]
  merge(array, 3); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]
  merge(array, 0); // Output: [1, 2, 3, 4, [5, 6, [7, 8, [9, 9]]]]
  
  