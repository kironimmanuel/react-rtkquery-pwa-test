import { ToastContainer } from 'react-toastify';
import { Route } from 'wouter';
import { About, FormCreator, Landing } from './pages';

const App = () => {
    return (
        <>
            <Route path='/' component={Landing} />
            <Route path='/about' component={About} />
            <Route path='/form-creator' component={FormCreator} />
            <ToastContainer position='top-center' />
        </>
    );
};
export default App;
