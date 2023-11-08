import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { customAxiosFetch } from '../../../lib/customAxiosFetch';
import { Post } from '../../../types/Post';

const useEditPost = () => {
    const queryClient = useQueryClient();

    const { mutate: editPost } = useMutation({
        mutationFn: async (post: Post) => {
            const { data } = await customAxiosFetch.patch(`/posts/${post.id}`, post);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
        onError: () => {
            toast.error("Couldn't update post");
        },
    });

    return { editPost };
};
export default useEditPost;
