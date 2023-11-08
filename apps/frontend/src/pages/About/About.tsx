import { Link } from 'wouter';
import { Footer, Header } from '../../components';

const About = () => {
    return (
        <main className='app-container'>
            <Header title='Version 1.0.0' />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam excepturi vitae hic similique provident
                deleniti omnis, expedita laudantium. Quo quisquam adipisci, enim numquam optio unde placeat iure ipsa
                iusto hic. Repellendus eum et dolores totam delectus. Nam ipsum temporibus nihil dolorem dolorum,
                inventore, hic nisi quidem iste illum, cumque voluptatum?
            </p>
            <Footer />
            <Link href='/'>Zurück</Link>
        </main>
    );
};
export default About;
