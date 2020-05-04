const findLongestWord = function (sentense) {
  let longestWord = "";
  let array = sentense.trim().split(" ");
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }

  return longestWord;
};

console.log(findLongestWord("May the 4th be with you"));
// Congrats with hiliday btw ;)
