import {
  authHeader,
  handleError,
  validateStatusCode
} from "../utils/api.helper"

const BASE_URL = "http://numbersapi.com/";

export const POST_API = (url, data = {}) => {
  return fetch(`${BASE_URL}/${url}`, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({ ...data })
  })
    .then((res) => validateStatusCode(res))
    .then((response) => {
      return {
        response,
        error: null
      }
    })
    .catch((error) => handleError(error))
}

export const GET_API = (url) => {
  console.log(`${BASE_URL}${url}`)
  return fetch(`${BASE_URL}${url}`)
    // .then((res) => validateStatusCode(res))
    .then((res) => res.text())
    .then((response) => {
      console.log(response, "response")
      return {
        response,
        error: null
      }
    })
    .catch((error) => handleError(error))
}
