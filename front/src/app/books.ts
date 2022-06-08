import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BookProps } from "types";

export const booksApi = createApi({
  reducerPath: "books",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<{ data: BookProps[] }, {}>({
      query: () => "/books",
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
