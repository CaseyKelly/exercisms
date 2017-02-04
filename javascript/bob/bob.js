var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.trim() === "") {
    return "Fine. Be that way!"
  } else if (input === input.toUpperCase() && /[a-zA-Z]/.test(input)) {
    return "Whoa, chill out!"
  } else if (input.charAt(input.length - 1) === "?") {
    return "Sure."
  } else {
    return "Whatever."
  }
};

module.exports = Bob;
