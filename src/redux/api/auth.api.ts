import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from './axiosClient';
const tagTypes = 'Auth' as const;
export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: [tagTypes],
  baseQuery: axiosBaseQuery(),
  endpoints: build => ({
    postInfor: build.mutation<Numbers, Infos>({
      query(data) {
        return {
          url: 'data',
          method: 'POST',
          data,
        };
      },
    }),
    getBanner: build.query<ListApiResponse<Banner>, string>({
      query: () => ({
        url: `banner`,
        method: 'GET',
      }),
      providesTags(result) {
        if (result?.data) {
          const banner = result.data;
          return [
            ...banner.map(({id}) => ({
              type: tagTypes,
              id,
            })),
            {
              type: tagTypes,
              id: 'LIST',
            },
          ];
        }
        return [{type: tagTypes, id: 'LIST'}];
      },
    }),
  }),
});
export const {usePostInforMutation, useGetBannerQuery} = authApi;
