import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { customAxiosFetch } from '../../../lib/customAxiosFetch';
import { AxiosErrorWithResponse } from '../../../types/AxiosErrorWithResponse';
import { Post } from '../../../types/Post';

const useCreatePost = () => {
    const queryClient = useQueryClient();

    const { mutate: createPost, isPending } = useMutation({
        mutationFn: async (post: Omit<Post, 'id'>) => {
            const { data } = await customAxiosFetch.post('/posts', post);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
            toast.success('Post added successfully');
        },
        onError: (error: AxiosErrorWithResponse) => {
            toast.error(error?.response.data.msg);
        },
    });

    return { createPost, isPending };
};
export default useCreatePost;
