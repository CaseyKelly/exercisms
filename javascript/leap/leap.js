var Year = function(input) {
  this.year = input;
};

Year.prototype.isLeap = function(input) {
  if (this.year % 4 === 0) {
    return true
  } else {
    return false
  }
};

module.exports = Year;
