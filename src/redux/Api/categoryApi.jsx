import { baseApi } from "./baseApi";

const settingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
 
     getCategory: builder.query({
        query: () => {
            return {
                url: '/category/all-categories',
                method: 'GET'
            }
        },
        providesTags: ['videos']
    }),
    
    getShortCategory: builder.query({
      query: ({category}) => {
          return {
              url: `/article/get-all-article?category=${category}`,
              method: 'GET'
          }
      },
      providesTags: ['videos']
  }),
  }),
});

export const {
useGetCategoryQuery,
useGetShortCategoryQuery

} = settingApi;
