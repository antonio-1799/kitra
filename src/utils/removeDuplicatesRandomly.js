const removeDuplicatesRandomly = (array) => {
  const uniqueMap = new Map();

  // Group objects by their "treasureId"
  array.forEach((obj, index) => {
    const key = obj.treasureId;
    if (!uniqueMap.has(key)) {
      uniqueMap.set(key, []);
    }
    uniqueMap.get(key).push(index);
  });

  const uniqueObjects = [];
  uniqueMap.forEach((indexes) => {
    // Randomly select an index from each group of duplicates
    const randomIndex = indexes[Math.floor(Math.random() * indexes.length)];
    uniqueObjects.push(array[randomIndex]);
  });

  return uniqueObjects;
};

module.exports = removeDuplicatesRandomly;
