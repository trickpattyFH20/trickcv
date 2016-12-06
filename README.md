# trickpatty.io
http://trickpatty.io

Personal website and portfolio written with node + express + Angular 2 (typescript)

## Generator Challenge
**http://trickpatty.io/gentest/sandbox**

A JavaScript code challenge! I have also included endpoints to run answers against some test cases.

#### URL

  /gentest

##### Methods

`GET` | `POST`

##### Data Params

* Header: 'Content-Type', 'application/json; charset=UTF-8'

[*Generator Challenge solution*](http://trickpatty.io/gentest/answer)

## other REST Endpoints:
### URL

  /forscience/prime/:number

#### Method

`GET`

#### URL Params

   **Required:**

   `number=[integer]`

#### Success Response:

  * **Code:** 200 <br />
  * **Content:**
    ```
    {
        "status": "success",
        "isPrime": true,
        "executionTime": 0
    }
    ```

#### Notes
This endpoint can be used to check if a number is prime.

### URL

  /forscience/prime/factors/:number

#### Method

`GET`

#### URL Params

   **Required:**

   `number=[integer]`

#### Success Response:

  * **Code:** 200 <br />
  * **Content:**
    ```
    {
        "status": "success",
        "factors": [2,3],
        "executionTime": 0
    }
    ```

#### Notes
This endpoint can be used to find all the prime factors of a number.
