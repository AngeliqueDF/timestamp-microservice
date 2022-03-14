const validateDate = (req, res, next) => {
	// The date entered was either a date string or a timestamp
	const { date } = req.params;

	// We attempt to create a Date object for each posssibility and check whether the instanciation was successful
	let dateString = new Date(date);
	let timestamp = new Date(Number(date));

	try {
		if (dateString.toString() !== "Invalid Date") {
			req.params.dateToConvert = dateString;
			next();
		} else if (timestamp.toString() !== "Invalid Date") {
			req.params.dateToConvert = timestamp;
			next();
		} else {
			throw new Error("Invalid Date");
		}
	} catch (err) {
		next(err);
	}
};

const errorHandler = (err, req, res, next) => {
	return res.status(401).send({
		error: "Invalid Date",
	});
};

const unknownPath = (req, res, next) => {
	res.status(404).send("Sorry, unknown page.");
};

module.exports = {
	validateDate,
	errorHandler,
	unknownPath,
};
