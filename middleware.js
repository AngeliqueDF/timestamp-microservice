const validateDate = (req, res, next) => {
  const { date } = req.params

  let newDate = new Date(date)
  let unixDate = new Date(Number(date))

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

const errorHandler = (err, req, res, next) => {
  return res.status(401).send({
    error: 'Invalid Date',
  });
};


module.exports = {
  validateDate,
  errorHandler
}