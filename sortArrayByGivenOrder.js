// This function takes:

// - an array of values to be used as the correct sorting order
// - an unordered array of objects to be sorted
// - a key that on which the value is stored in the unordered array of objects

// and returns the unordered array of objects sorted

// for example, given:

// - [1, 2, 3, 4, 5]
// - [{ num: 3 }, { num: 5 }, { num: 1 }, { num: 2 }, { num: 4 }]
// - "num"

// the output will be:

// [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }]

sortArrayByGivenOrder = (orderedArrOfValues, unorderedArrayOfObjects, key) => {
  const res = [];
  let pointerOne = 0;
  let pointerTwo = 0;

  if (!orderedArrOfValues.length || !unorderedArrayOfObjects.length || !key) {
    return unorderedArrayOfObjects;
  }

  while (pointerOne < orderedArrOfValues.length) {
    const orderedName = orderedArrOfValues[pointerOne];
    const unorderedName = unorderedArrayOfObjects[pointerTwo][key];

    if (orderedName === unorderedName) {
      res.push(unorderedArrayOfObjects[pointerTwo]);

      pointerOne++;
      pointerTwo = 0;
    } else {
      pointerTwo++;
    }
  }

  return res;
};
