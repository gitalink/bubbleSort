// const swap = (element, nextElement) => {
//   if (element > nextElement) {
//     return [nextElement, element]
//   }
//   else {
//     return [element, nextElement]
//   }
// }

// function bubbleSort(array) {

//   let count = array.length

//   while (count > 0) {

//     for (let i = 0; i <array.length-1; i++) {
//       let element = array[i]
//       let nextElement = array[i+1]
//       let swapped = swap(element, nextElement)
//       array[i] = swapped[0]
//       array[i+1] = swapped[1]
//     }
//     count --
//   }
//     return array
//     // .slice(-1)
//     // .unshift(bubbleSort(array.slice(0, -1)))
// }

function bubbleSort (array) {
  console.log('startarray', array);

  if (array.length <=1) return array;

  else {
    console.log('in the else');
    for (let i = 0; i < array.length-1; i++) {
      let element = array[i];
      let nextElement = array[i+1];
      if (element > nextElement) {
        array[i] = nextElement;
        array[i+1] = element;
      }
    }
    console.log('sort complete', array);
    let sortedElement = array[array.length-1];
    array.pop();
    let newArray = [sortedElement].unshift(bubbleSort(array));
    return newArray;

  }
}
