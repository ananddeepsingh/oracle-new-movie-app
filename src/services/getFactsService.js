import { GET_API } from "./api";

export const GetFactsService = async (number) => {
  const { response, error } = await GET_API(number);

  if (error) {
    return {
      response: null,
      error
    }
  } else {
    return {
      response,
      error: null
    }
  }
}
