import { Link } from 'wouter';
import { Footer, Header } from '../../components';
import { AddPostForm, PostsList } from '../../features';

const Landing = () => {
    return (
        <main className='app-container'>
            <Header title='React Vite PWA' />
            <AddPostForm />
            <PostsList />
            <Footer />
            <Link href='/about'>About</Link>
        </main>
    );
};
export default Landing;
