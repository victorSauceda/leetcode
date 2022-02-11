const snail = (array) => {
  let finalArray = [];
  while (array.length) {
    finalArray.push(...array.shift());
    for (var i = 0; i < array.length; i++) {
      finalArray.push(array[i].pop());
    }
    finalArray.push(...(array.pop() || []).reverse());
    for (var i = array.length - 1; i >= 0; i--) {
      finalArray.push(array[i].shift());
    }
  }
  return finalArray;
};
