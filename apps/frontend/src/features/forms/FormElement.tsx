const FormInput = ({ $, handleChange }: any) => {
    return (
        <>
            <label htmlFor=''>{$.id}</label>
            <input
                name={$.id}
                type={$.type}
                placeholder={$.id}
                style={{ padding: '3px' }}
                maxLength={$.maxlength ?? 200}
                required={!!$.nullable ?? false}
                max={$.maxlength ?? 200}
                onChange={handleChange}
            />
        </>
    );
};

const SelectInput = ({ $, option, handleChange }: any) => {
    const options = option.map((option: any) => {
        return (
            <option key={option} value={option}>
                {option}
            </option>
        );
    });

    return (
        <>
            <label htmlFor=''>{$.id}</label>
            <select style={{ padding: '3px' }} name={$.id} onChange={handleChange}>
                {options}
            </select>
        </>
    );
};

const FormElement = ({ element, handleChange }: any) => {
    switch (element.$.type) {
        case 'number':
        case 'text':
        case 'checkbox':
        case 'date':
            return <FormInput {...element} handleChange={handleChange} />;
        case 'select':
            return <SelectInput {...element} handleChange={handleChange} />;
        default:
            return <div>Unbekanntes Element</div>;
    }
};
export default FormElement;
