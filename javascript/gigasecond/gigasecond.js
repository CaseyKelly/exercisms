var Gigasecond = function(date) {
    this.startDate = date.getTime();
    this.endDate = new Date(this.startDate + 1000000000000);
};

Gigasecond.prototype.date = function() {
  	return this.endDate;
};

module.exports = Gigasecond;
