import { useQuery } from '@tanstack/react-query';
import { customAxiosXMLFetch } from '../../../lib/customAxiosFetch';

const useFetchForms = () => {
    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['forms'],
        queryFn: async () => {
            const { data } = await customAxiosXMLFetch.get('/forms');
            return data;
        },
    });

    return { data, error, isError, isLoading };
};
export default useFetchForms;
