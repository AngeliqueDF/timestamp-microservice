const matchingDates = (date) => {
  return {
    unix: date.getTime(),
    utc: date.toUTCString()
  }
};

module.exports = {
  matchingDates
}