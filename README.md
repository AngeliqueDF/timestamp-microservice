
# Timestamp Microservice

This is my solution for the project [Timestamp Microservice project by freeCodeCamp](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice).

The project is an Express.js API which returns timestamps corresponding to the date entered as a parameter. According to the requirements, any date value that can be successfully parsed by new Date() is valid.

___

## Endpoints:

### GET ``/api/``

When no date is entered, the response is a JSON object where the ``unix`` and ``utc`` keys' values correspond to the current time.

```
{
  unix: [UNIX timestamp of the current time],
  utc: [UTC string of the current time]
}

```

### GET ``/api/:date``

- When a valid `:date` is provided as a parameter, the response is an object with the keys ``unix`` and ``utc`` whose values correspond to the date entered.

  ```
  {
    unix: [UNIX timestamp of the date entered],
    utc: [UTC string of the the date entered]
  }

  ```

- When the ``:date`` entered can't be converted to a valid date, the response will be the following object with a status code 401:

  ```

  {
    error: "Invalid Date"
  }

  ```