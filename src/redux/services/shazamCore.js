import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f2e696412cmshc973ededdc68f00p115b60jsn8aec85f4f88c",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "f2e696412cmshc973ededdc68f00p115b60jsn8aec85f4f88c"
      );
      return headers;
    },
  }),
  endpoints: (builder)=>({
    getTopCharts: builder.query({query: ()=>'/charts/world'})
  })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi
