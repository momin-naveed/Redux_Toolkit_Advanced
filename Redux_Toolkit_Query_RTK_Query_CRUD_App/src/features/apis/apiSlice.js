import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  name: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3500',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ['Post'],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Post'],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'PATCH',
        body: todo,
      }),
      invalidatesTags: ['Post'],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = apiSlice;
