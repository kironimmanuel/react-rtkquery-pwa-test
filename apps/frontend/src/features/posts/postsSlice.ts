import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../types/Post';
import { messages } from './messages/post.messages';

interface PostsState {
    posts: Post[];
}

const initialState: PostsState = {
    posts: [],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPostReducer: {
            reducer(state, action: PayloadAction<Post>) {
                state.posts.push(action.payload);
            },
            prepare(post: Post) {
                return {
                    payload: post,
                };
            },
        },
        updatePostReducer: (state, action: PayloadAction<Post>) => {
            const postIndex = state.posts.findIndex(post => post.id === action.payload.id);
            state.posts[postIndex] = action.payload;
        },
        deletePostReducer: (state, action: PayloadAction<number | string>) => {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
    },
});

export const { addPostReducer, updatePostReducer, deletePostReducer } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
