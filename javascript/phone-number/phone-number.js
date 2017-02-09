var PhoneNumber = function(input) {
    this.input = input.replace(/[-)(. ]/g, "");
    if (this.input.length === 11 && input[0] === '1') {
        this.input = this.input.slice(1, 11)
    } else if (this.input.length != 10) {
        this.input = '0000000000'
    }
};

PhoneNumber.prototype.number = function() {
    return this.input
};

PhoneNumber.prototype.areaCode = function() {
    this.areaCode = this.input[0] + this.input[1] + this.input[2];
    return this.areaCode
};

PhoneNumber.prototype.toString = function() {
    this.areaCode = this.input[0] + this.input[1] + this.input[2];
    return "(" + this.areaCode + ") " + this.input.slice(3, 6) + "-" + this.input.slice(6, 10)
};

module.exports = PhoneNumber;
