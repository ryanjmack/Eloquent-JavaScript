
const countChars =  function countChars(str, targetChar) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === targetChar) {
      count++;
    }
  }
  return count;
};

module.exports = countChars;
