import { Button } from '../../components/index.ts';
import { rawXML } from '../../data/exampleXML.ts';
import XmlToComponents from './XmlToComponents';
// import useFetchForms from './hooks/useFetchForms';

const FormsList = () => {
    // const { data: forms, isError, isLoading } = useFetchForms();
    // if (isLoading) return <p className='center-text'>Loading Posts...</p>;
    // if (isError) return <p className='center-text'>Fehler beim Laden der Kontakte</p>;

    // Fetch the appropriate forms from IndexedDB
    // ...

    return (
        <form>
            <XmlToComponents xml={rawXML} />
            <Button
                type='button'
                label='Formular drucken'
                className='submit-btn'
                onClick={() => {
                    alert('Formular drucken');
                }}
            />
        </form>
    );
};
export default FormsList;
