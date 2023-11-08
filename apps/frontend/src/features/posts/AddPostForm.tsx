import { FormEvent, useState } from 'react';
import { Button } from '../../components';
import useCreatePost from './hooks/useCreatePost';

const intitalFormState = {
    title: '',
    content: '',
};

const AddPostForm = () => {
    const { createPost, isPending } = useCreatePost();
    const [formData, setFormData] = useState(intitalFormState);

    const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        createPost(formData, {
            onSuccess: () => {
                setFormData(intitalFormState);
                clearInputs();
            },
        });
    };

    const clearInputs = () => {
        setFormData(intitalFormState);
    };

    return (
        <form className='post-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor='title'>post title</label>
                <input
                    placeholder='Post title (max. 30 characters)'
                    type='title'
                    className='text-input'
                    id='title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    required
                    maxLength={30}
                />
            </div>
            <div className='form-control'>
                <label htmlFor='content'>post content</label>
                <textarea
                    placeholder='Write something funny here... (max. 200 characters)'
                    className='text-input'
                    name='content'
                    id='content'
                    cols={30}
                    rows={5}
                    value={formData.content}
                    style={{ resize: 'none' }}
                    onChange={handleChange}
                    required
                    maxLength={200}></textarea>
            </div>

            <div className='btn-container'>
                <Button className='submit-btn' label={isPending ? 'Loading...' : 'Submit post'} type='submit' />
                <Button className='clear-btn' onClick={clearInputs} label='clear inputs' type='reset' />
            </div>
        </form>
    );
};
export default AddPostForm;
