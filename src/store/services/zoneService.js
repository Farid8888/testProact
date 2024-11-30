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

const zonesApi = createApi({
  reducerPath: "zoneApi",
  baseQuery: customBaseQuery,
  tagTypes: ["zone"],
  endpoints: (build) => ({
    getAllZones: build.query({
      query: () => ({
        url: "/zone",
        method: "GET",
      }),
      providesTags: ["zone"],
    }),
    getOneZone: build.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags:['zone']
    }),
    addZones: build.mutation({
      query: (posts) => ({
        url: "/",
        method: "POST",
        body: posts
      }),
      invalidatesTags:['zone']
    }),
    deleteZones: build.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:['zone']
    }),
    editZone:build.mutation({
        query:({id,post})=>({
            url:`/${id}`,
            method:'PATCH',
            body:post
        }),
        invalidatesTags:['zone']
    })
  }),
});

export const {
  useAddZonesMutation,
  useGetAllZonesQuery,
  useDeleteZonesMutation,
  useEditZoneMutation,
  useGetOneZoneQuery,
  useLazyGetAllZonesQuery
} = zonesApi;
export default zonesApi;