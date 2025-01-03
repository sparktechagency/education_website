import baseApi from "./baseApi";


const videos = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    getVideos: builder.query({
      query: () => {
        return {
          url: "/video/get-all-videos",
          method: "GET",
        };
      },
      providesTags: ["videos"],
    }),


    getshortVideos: builder.query({
      query: ({ sort }) => {
        return {
          url: `/video/get-all-videos/?sort=${sort}`,
          method: "GET",
        };
      },
      providesTags: ["videos"],
    }),


    getSingleVideos: builder.query({
      query: ({ id }) => {
        return {
          url: `/video/get-single-video/${id}`,
          method: "GET",
        };
      },
      providesTags: ["videos"],
    }),

    bookmarkVideos: builder.mutation({
        query: (id, data) => {
          return {
            url: `/bookmark/add-delete-video-bookmark/${id}`,
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["videos"],
      }),

   

  }),
});

export const {
 useGetVideosQuery,
 useGetSingleVideosQuery,
 useGetshortVideosQuery,
 useBookmarkVideosMutation
} = videos;
