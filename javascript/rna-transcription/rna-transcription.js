var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  if (dnaStrand === "C") {
    return "G"
  } else {
    return "C"
  }
};

module.exports = DnaTranscriber;
