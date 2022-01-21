const validateDate = (req, res, next) => {
  const { date } = req.params

  let newDate = new Date(date)
  let unixDate = new Date(Number(date))

  console.log(newDate, unixDate);

  try {
    if (newDate.toString() !== 'Invalid Date') {
      req.params.dateToConvert = newDate
      next()
    } else if (unixDate.toString() !== 'Invalid Date') {
      req.params.dateToConvert = unixDate
      next()
    } else {
      throw new Error('Invalid Date')
    }
  } catch (err) {
    next(err)
  }
};


module.exports = {
  validateDate
}