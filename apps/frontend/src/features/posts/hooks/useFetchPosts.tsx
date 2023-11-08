import { useQuery } from '@tanstack/react-query';
import { customAxiosFetch } from '../../../lib/customAxiosFetch';
import { Post } from '../../../types/Post';

const useFetchTasks = () => {
    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const { data } = await customAxiosFetch.get('/posts');
            return data as Post[];
        },
    });

    return { data, error, isError, isLoading };
};
export default useFetchTasks;
