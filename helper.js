/**
 * 
 * @param {date} date the date built from new Date()
 * @returns an object with two keys: 
 * - unix: the date converted to unix
 * - utc: the date converted to utc
 */
const matchingDates = (date) => {
  return {
    unix: date.getTime(),
    utc: date.toUTCString()
  }
};

module.exports = {
  matchingDates
}