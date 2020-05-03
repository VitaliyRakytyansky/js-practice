const findLongestWord = function (sentense) {
  let longestWord;
  let num = 0;
  let array = sentense.trim().split(" ");
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > num) {
      num = array[i].length;
      longestWord = array[i];
    }
  }

  return longestWord;
};

console.log(findLongestWord("May the force be with you"));
