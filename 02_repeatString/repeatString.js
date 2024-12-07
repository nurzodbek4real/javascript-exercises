const repeatString = function(string, num) {
  // Handle negative num
  if (num < 0) {
    return 'ERROR';
  }

  let result = "";

  // Repeat the string 'num' times
  for (let i = 0; i < num; i++) {
    result += string;
  }

  return result;
};

// Export the function so it can be used in the test file
module.exports = repeatString;
