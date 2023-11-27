import { Link } from 'wouter';
import { Footer, Header } from '../../components';
import { FormsList } from '../../features';

const FormCreator = () => {
    return (
        <main className='app-container'>
            <Header title='Formular' />
            <FormsList />
            <Footer />
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
        </main>
    );
};
export default FormCreator;
