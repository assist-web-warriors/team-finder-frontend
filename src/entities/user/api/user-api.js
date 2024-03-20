import { baseApi } from 'src/app/base-api';

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: build.mutation({
      query: (credentials) => ({
        url: 'auth/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    getManagers: build.query({
      query: () => ({
        url: 'user/department-managers',
      }),
    }),
    getEmp: build.query({
      query: () => ({
        url: 'user/department-managers',
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useGetManagersQuery } = userApi;
