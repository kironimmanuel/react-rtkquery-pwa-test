import { ToastContainer } from 'react-toastify';
import { Route } from 'wouter';
import { About, Landing } from './pages';

const App = () => {
    return (
        <>
            <Route path='/' component={Landing} />
            <Route path='/about' component={About} />
            <ToastContainer position='top-center' />
        </>
    );
};
export default App;
