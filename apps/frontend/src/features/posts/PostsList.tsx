// import { addPost, getPosts } from '../../services/database/indexedDB';
// import { useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { Button } from '../../components';
import { useDeletePostMutation, useGetPostsQuery, useUpdatePostMutation } from '../../services';
import { Post } from '../../types/Post';

const PostsList = () => {
    const { data: posts, isLoading, isError } = useGetPostsQuery(undefined, { refetchOnMountOrArgChange: true });
    const isOnline = navigator.onLine;
    console.log('PostsList ~ isOnline:', isOnline);

    // useEffect(() => {
    //     const savePostsToIndexedDB = async () => {
    //         if (posts) {
    //             for (const post of posts) {
    //                 await addPost(post);
    //             }
    //         }
    //     };
    //     savePostsToIndexedDB();
    // }, [posts]);

    // if (isError) {
    //     const getPostFromIndexedDB = async () => {
    //         const data = await getPosts();
    //         console.log('getPostFromIndexedDB ~ data:', data);
    //     };
    //     getPostFromIndexedDB();
    // }

    const [removePost] = useDeletePostMutation();
    const [toggleFavoriteStatus] = useUpdatePostMutation();

    const PostItem = ({ post }: { post: Post }) => (
        <li key={post.id} className={`post ${post.isFavorite ? 'favorite' : ''}`}>
            <div>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
            <Button
                className='favorite-btn'
                label={post.isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
                onClick={() => toggleFavoriteStatus({ ...post, isFavorite: !post.isFavorite })}
            />
            <Button className='delete-btn' label={<FaTimes />} onClick={() => removePost(post.id)} />
        </li>
    );

    if (isLoading) return <p className='center-text'>Loading Posts...</p>;
    if (isError) return <p className='center-text'>Fehler beim Laden der Kontakte</p>;
    if (posts && posts.length <= 0) return <p className='center-text'>No Posts</p>;

    return <ul>{posts && posts.map(post => <PostItem key={post.id} post={post} />)}</ul>;
};

export default PostsList;
