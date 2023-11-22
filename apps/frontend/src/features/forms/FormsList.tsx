import XmlToComponents from './XMLToComponents';
import useFetchForms from './hooks/useFetchForms';

const FormsList = () => {
    const { data: forms, isError, isLoading } = useFetchForms();

    if (isLoading) return <p className='center-text'>Loading Posts...</p>;

    if (isError) return <p className='center-text'>Fehler beim Laden der Kontakte</p>;

    return (
        <div>
            <h1>Forms List</h1>
            <XmlToComponents xmlArray={forms} />
        </div>
    );
};
export default FormsList;
