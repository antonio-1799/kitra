const removeDuplicatesRandomly = ({ array, isPrizeValue }) => {
  const treasureMap = {};

  array.forEach((obj) => {
    const { treasureId, amt } = obj;

    if (
      !(treasureId in treasureMap) ||
      (isPrizeValue && amt < treasureMap[treasureId]) ||
      (!isPrizeValue && Math.random() < 0.5)
    ) {
      treasureMap[treasureId] = amt;
    }
  });

  return array.filter((obj) => obj.amt === treasureMap[obj.treasureId]);
};

module.exports = removeDuplicatesRandomly;
