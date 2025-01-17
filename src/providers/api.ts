import axios from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface IPostRequestParams {
  body?: object | string;
}

const httpRequest = async (
  uri: string,
  method: HttpMethod,
  props: IPostRequestParams = {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/${uri}`;
  const body = props.body ? { data: props.body } : {};

  const params = {
    url: endpoint,
    headers: {
      "Content-Type": "application/json",
    },
    method,
    ...body,
  };

  try {
    const response = await axios(params);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const get = (uri: string, params?: IPostRequestParams) => {
  return httpRequest(uri, "GET", params);
};

export const post = (uri: string, params?: IPostRequestParams) => {
  return httpRequest(uri, "POST", params);
};

export const put = (uri: string, params?: IPostRequestParams) => {
  return httpRequest(uri, "PUT", params);
};

export const patch = (uri: string, params?: IPostRequestParams) => {
  return httpRequest(uri, "PATCH", params);
};

export const del = (uri: string, params?: IPostRequestParams) => {
  return httpRequest(uri, "DELETE", params);
};
