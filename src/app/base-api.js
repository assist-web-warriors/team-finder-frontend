import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUserToken } from 'src/entities/user';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_ENDPOINT,
  prepareHeaders: (headers, { getState }) => {
    const state = getState();
    const { token } = state.user.session;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (
    result.error &&
    (result.error.originalStatus === 403 || result.error.originalStatus === 401)
  ) {
    const refreshResult = await baseQuery(
      `${import.meta.env.VITE_API_ENDPOINT}/auth/refresh`,
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      api.dispatch(setUserToken({ token: refreshResult.data.token }));
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
