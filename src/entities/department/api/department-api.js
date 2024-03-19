import { baseApi } from 'src/app/base-api';

const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query({
      query: () => ({
        url: 'department/all',
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
  useGetDepartmentsQuery,
  useAddDepartmentMutation,
  useDeleteDepartmentMutation,
  useEditDepartmentMutation,
} = departmentApi;
