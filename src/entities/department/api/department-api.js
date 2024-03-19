import { baseApi } from 'src/app/base-api';

const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.mutation({
      query: () => ({
        url: 'department',
        method: 'GET',
      }),
    }),
    addDepartment: build.mutation({
      query: (body) => ({
        url: 'department/create',
        method: 'POST',
        body,
      }),
    }),
    deleteDepartment: build.mutation({
      query: () => ({
        url: 'department', // to be updated
        method: 'DELETE',
      }),
    }),
    editDepartment: build.mutation({
      query: (body) => ({
        url: 'department/update',
        method: 'PUT',
        body,
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
