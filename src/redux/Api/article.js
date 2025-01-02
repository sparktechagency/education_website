import baseApi from "./baseApi";


const article = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticle: builder.query({
      query: () => {
        return {
          url: "/article/get-all-article",
          method: "GET",
        };
      },
      providesTags: ["article"],
    }),
   

    getSingleArticle: builder.query({
      query: ({ id }) => {
        return {
          url: `/article/single-article/${id}`,
          method: "GET",
        };
      },
      providesTags: ["article"],
    }),



  }),
});

export const {
 
  useGetArticleQuery,
  useGetSingleArticleQuery
  
} = article;
