import { Header } from './components';
import { AddPostForm, PostsList } from './features';

const App = () => {
    return (
        <main className='app-container'>
            <Header />
            <AddPostForm />
            <PostsList />
        </main>
    );
};
export default App;
