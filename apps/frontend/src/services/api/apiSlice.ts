import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { set } from 'idb-keyval';
import { Post } from '../../types/Post';
import { messages } from './messages/post.messages';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    tagTypes: ['Posts'],
    endpoints: builder => ({
        getPosts: builder.query<Post[], void>({
            query: () => '/posts',
            transformResponse: (res: Post[]) => res.sort((a, b) => b.id - a.id),
            providesTags: ['Posts'],
            onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    set('posts', data)
                        .then(() => console.log(messages.GET_POST_SUCCESS.message))
                        .catch(error => console.log(messages.GET_POST_ERROR.message, error));
                } catch (error) {
                    console.log(messages.GET_POST_ERROR.message, error);
                }
            },
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
