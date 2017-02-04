var Hamming = function() {};

Hamming.prototype.compute = function(strandA, strandB) {
  var nucleotidesA = strandA.split("");
  var nucleotidesB = strandB.split("");
  var distance = 0;

  if (nucleotidesA.length !== nucleotidesB.length) {
    throw "DNA strands must be of equal length."
  }

  for (var i = 0; i < nucleotidesA.length; i++) {
    if (nucleotidesA[i] !== nucleotidesB[i]) {
      distance += 1
    }
  }
  return distance
};

module.exports = Hamming;
