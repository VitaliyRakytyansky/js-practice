const checkForSpan = function (sentence) {
  sentence = sentence.toLowerCase();
  return sentence.includes("sale") || sentence.includes("spam") ? true : false;
};

console.log(checkForSpan("[SPAM] How to earn fast money?"));
