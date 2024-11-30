import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const customBaseQuery = async (args, api, extraOptions) => {
  const baseResult = await fetchBaseQuery({
    baseUrl: "/api",
  })(args, api, extraOptions);
//   const status = baseResult.meta?.response?.status;
//   if (status === 500) {
//   }

  return baseResult;
};

const activitysApi = createApi({
  reducerPath: "activityApi",
  baseQuery: customBaseQuery,
  tagTypes: ["activity"],
  endpoints: (build) => ({
    getAllactivitys: build.query({
      query: () => ({
        url: "/activity",
        method: "GET",
      }),
      providesTags: ["activity"],
    }),
    getOneactivity: build.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags:['activity']
    }),
    addactivitys: build.mutation({
      query: (posts) => ({
        url: "/",
        method: "POST",
        body: posts
      }),
      invalidatesTags:['activity']
    }),
    deleteactivitys: build.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:['activity']
    }),
    editactivity:build.mutation({
        query:({id,post})=>({
            url:`/${id}`,
            method:'PATCH',
            body:post
        }),
        invalidatesTags:['activity']
    })
  }),
});

export const {
  useAddactivitysMutation,
  useGetAllactivitysQuery,
  useDeleteactivitysMutation,
  useEditactivityMutation,
  useGetOneactivityQuery,
  useLazyGetAllactivitysQuery
} = activitysApi;
export default activitysApi;