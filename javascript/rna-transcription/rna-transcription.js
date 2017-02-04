var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  var nucleotides = dnaStrand.split("");

  var findComplement = function(nucleotide) {
    if (nucleotide === "G") {
      return "C"
    } else if (nucleotide === "C") {
      return "G"
    } else if (nucleotide === "A") {
      return "U"
    } else if (nucleotide === "T") {
      return "A"
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
