import { defineMessages } from '@formatjs/intl';

export const messages = defineMessages({
    GET_POST_SUCCESS: {
        id: 'PostSuccess',
        message: 'Posts fetched successfully!',
    },
    GET_POST_ERROR: {
        id: 'PostError',
        message: 'Error while fetching posts! Please try again later.',
    },
    POST_POST_ERROR: {
        id: 'PostError',
        message: 'Error while creating post! Please try again later.',
    },
    PATCH_POST_ERROR: {
        id: 'PostError',
        message: 'Error while updating post! Please try again later.',
    },
    DELETE_POST_ERROR: {
        id: 'PostError',
        message: 'Error while deleting post! Please try again later.',
    },
});
