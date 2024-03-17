import { baseApi } from 'src/app/base-api';

const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.mutation({
      query: (credentials) => ({
        url: 'department', // to be updated
        method: 'GET',
        body: credentials,
      }),
    }),
    addDepartment: build.mutation({
      query: (credentials) => ({
        url: 'department', // to be updated
        method: 'POST',
        body: credentials,
      }),
    }),
    deleteDepartment: build.mutation({
      query: (credentials) => ({
        url: 'department', // to be updated
        method: 'DELETE',
        body: credentials,
      }),
    }),
    editDepartment: build.mutation({
      query: (credentials) => ({
        url: 'department', // to be updated
        method: 'PUT',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetDepartmentsMutation,
  useAddDepartmentMutation,
  useDeleteDepartmentMutation,
  useEditDepartmentMutation,
} = departmentApi;
