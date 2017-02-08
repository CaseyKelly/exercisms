var PhoneNumber = function(input) {
    this.input = input.replace(/[-)( ]/g, "");
};

PhoneNumber.prototype.number = function() {
    return this.input
};

module.exports = PhoneNumber;
