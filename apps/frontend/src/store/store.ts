import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../features/posts/postsSlice';

const rootReducer = combineReducers({
    posts: postsReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
