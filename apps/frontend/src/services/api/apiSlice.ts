import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../../types/Post';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    tagTypes: ['Posts'],
    endpoints: builder => ({
        getPosts: builder.query<Post[], void>({
            query: () => '/posts',
            transformResponse: (res: Post[]) => res.sort((a, b) => b.id - a.id),
            providesTags: ['Posts'],
        }),
        addPost: builder.mutation<void, Omit<Post, 'id'>>({
            query: post => ({
                url: '/posts',
                method: 'POST',
                body: post,
            }),
            invalidatesTags: ['Posts'],
        }),
        updatePost: builder.mutation<void, Post>({
            query: post => ({
                url: `/posts/${post.id}`,
                method: 'PATCH',
                body: post,
            }),
            invalidatesTags: ['Posts'],
        }),
        deletePost: builder.mutation<void, number>({
            query: id => ({
                url: `/posts/${id}`,
                method: 'DELETE',
                body: id,
            }),
            invalidatesTags: ['Posts'],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useAddPostMutation,
    useDeletePostMutation,
    useUpdatePostMutation,
    useLazyGetPostsQuery,
    usePrefetch,
} = apiSlice;
