import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { customAxiosFetch } from '../../../lib/customAxiosFetch';

const useDeletePost = () => {
    const queryClient = useQueryClient();

    const { mutate: deletePost } = useMutation({
        mutationFn: async (postId: number) => {
            const { data } = await customAxiosFetch.delete(`/posts/${postId}`);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
        onError: () => {
            toast.error("Couldn't delete post");
        },
    });

    return { deletePost };
};
export default useDeletePost;
