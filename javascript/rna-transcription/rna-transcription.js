var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  var nucleotides = dnaStrand.split("");

  var rnaKey = {
    G: "C",
    C: "G",
    A: "U",
    T: "A"
  };

  var findComplement = function(nucleotide) {
    if (rnaKey[nucleotide]) {
      return rnaKey[nucleotide]
    } else {
      throw "Invalid input"
    }
  };

  for (var i = 0; i < nucleotides.length; i++) {
    nucleotides[i] = findComplement(nucleotides[i])
  }
  return nucleotides.join("")
};

module.exports = DnaTranscriber;
