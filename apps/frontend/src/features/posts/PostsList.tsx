import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { Button } from '../../components';
import { Post } from '../../types/Post';
import useDeletePost from './hooks/useDeleteTask';
import useEditPost from './hooks/useEditTask';
import useFetchTasks from './hooks/useFetchPosts';

const PostsList = () => {
    const { data: posts, isError, isLoading } = useFetchTasks();
    const { editPost } = useEditPost();
    const { deletePost } = useDeletePost();

    // const isOnline = navigator.onLine;
    // console.log('PostsList ~ isOnline:', isOnline);

    const PostItem = ({ post }: { post: Post }) => (
        <li key={post.id} className={`post ${post.isFavorite ? 'favorite' : ''}`}>
            <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
            <Button
                className='favorite-btn'
                ariaLabel='Favorite post'
                label={post.isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
                onClick={() => editPost({ ...post, isFavorite: !post.isFavorite })}
            />
            <Button
                className='delete-btn'
                ariaLabel='Delete post'
                label={<FaTimes />}
                onClick={() => deletePost(post.id)}
            />
        </li>
    );

    if (isLoading) return <p className='center-text'>Loading Posts...</p>;
    if (isError) return <p className='center-text'>Fehler beim Laden der Kontakte</p>;
    if (posts && posts.length <= 0) return <p className='center-text'>No Posts</p>;

    return <ul>{posts && posts.map(post => <PostItem key={post.id} post={post} />)}</ul>;
};

export default PostsList;
