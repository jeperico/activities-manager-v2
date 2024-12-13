import axios from 'axios'

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

interface IHttpRequestParams {
  body?: object | string
  status?: string
}

const httpRequest = async (
  uri: string,
  method: HttpMethod,
  props: IHttpRequestParams = {},
): Promise<any> => {
  const headers = {}

  const endpoint = `${process.env.REACT_APP_BASE_API_URL}/${uri}`

  const body = props.body ? { data: props.body } : {}

  const params = {
    ...body,
    headers,
    method,
  }

  try {
    const response = await axios(endpoint, params)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const get = (uri: string) => {
  return httpRequest(uri, 'GET')
}

export const post = (uri: string, params?: IHttpRequestParams) => {
  return httpRequest(uri, 'POST', params)
}

export const put = (uri: string, params?: IHttpRequestParams) => {
  return httpRequest(uri, 'PUT', params)
}

export const patch = (uri: string, params?: IHttpRequestParams) => {
  return httpRequest(uri, 'PATCH', params)
}

export const del = (uri: string, params?: IHttpRequestParams) => {
  return httpRequest(uri, 'DELETE', params)
}

