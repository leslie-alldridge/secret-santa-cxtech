export default function shuffle(array) {
  // let counter = array.length;
  // while (counter > 0) {
  //   let index = Math.floor(Math.random() * counter);
  //   counter--;
  //   let temp = array[counter];
  //   array[counter] = array[index];
  //   array[index] = temp;
  // }

  // return array;

  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
