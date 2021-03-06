# Timestamp Microservice

The project is an Express.js API which returns timestamps corresponding to the date entered as a parameter. According to the requirements, any date value that can be successfully parsed by `new Date()` is valid.

---

## API

### Get current time in UTC and UNIX format

`GET /api/`

#### Parameters

none

#### Response

```javascript
// GET "http://localhost:3000/api/"

// status code: 200 Success
```

```json
{
	"unix": "1451001600000",
	"utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

<br />

### Get a specficic timestamp in UTC and UNIX format

`GET /api/:date`

#### Parameters

| Name   | Value                                                                             | Description                                                                  |
| ------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `date` | `dateString` or `timestampNumber` the number of milliseconds since the UNIX epoch | The timestamp to convert, must be parseable by the `new Date()` constructor. |

#### Responses

<!--
| Status code | Response         | Description               |
| ---- | ------------ | ------------------------- |
| 200 | `dateString` | The timestamp to convert. | -->

- When a valid `:date` is provided as a parameter, the response is a JSON object with the keys `unix` and `utc` whose values correspond to the date entered:

  ```javascript
  // GET "http://localhost:3000/api/2015-12-25"
  // or GET "http://localhost:3000/api/1451001600000"

  // status code: 200 Success
  ```

  ```json
  {
  	"unix": "1451001600000",
  	"utc": "Fri, 25 Dec 2015 00:00:00 GMT"
  }
  ```

- When the `:date` entered can't be converted to a valid date, the response will be the following JSON object with a status code 401 Bad request:

  ```javascript
  // GET "http://localhost:3000/api/invalid_date"

  // status code: 401 Bad request
  ```

  ```json
  {
  	"error": "Invalid Date"
  }
  ```

  <br />

## Features

- Converts a given time to its UTC and UNIX equivalents.
- Handles unknown paths.

## Technologies

- `express`
- `helmet`

## References

- [Date() constructor.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)

## Sources

- [Timestamp Microservice project by freeCodeCamp.](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)
