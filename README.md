# trickpatty.io
http://trickpatty.io

## REST Endpoints:
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
