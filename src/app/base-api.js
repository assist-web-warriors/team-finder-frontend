import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUserData } from 'src/entities/user';

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
  if (result.error && result.error.originalStatus === 403) {
    const refreshResult = await baseQuery(
      `${import.meta.env.VITE_API_ENDPOINT}/auth/refresh`,
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      api.dispatch(setUserData({ token: refreshResult.data.token }));
      result = await baseQuery(args, api, extraOptions);
    } else {
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
