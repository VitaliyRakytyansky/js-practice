const formatString = function (sentense) {
  if (sentense.length > 40) {
    return sentense.slice(0, 40) + "...";
  }
  return sentense;
};

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
