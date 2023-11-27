import { useMemo, useState } from 'react';
import { XMLParser } from '../../utils/XMLParser';
import FormInputElement from './FormElement.tsx';

const XmlToComponents = ({ xml }: { xml: string }) => {
    const parsedData: any = useMemo(() => XMLParser(xml), [xml]);
    console.log('XmlToComponents ~ parsedData:', parsedData);

    const uniqueIds = new Set<string>();
    parsedData.form.model.dataset.forEach((data: any) => {
        data.element.forEach((element: any) => {
            uniqueIds.add(element.$.id);
        });
    });

    const idArray = Array.from(uniqueIds);

    const initialState = idArray.reduce((acc, id) => ({ ...acc, [id]: '' }), {});

    const [formData, setFormData] = useState(initialState);

    const handleFormDataChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            {parsedData.form.model.dataset.map((data: any, index: number) => {
                return (
                    <div
                        key={index}
                        style={{
                            padding: '20px',
                            marginBottom: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 0 5px rgba(0,0,0,0.2)',
                            borderRadius: '5px',
                        }}>
                        <h2>{data.$.id}</h2>
                        <div className='line'></div>
                        {data.element.map((element: any, index: number) => {
                            return (
                                <FormInputElement
                                    key={index}
                                    element={element}
                                    handleChange={handleFormDataChange}
                                    inputValue={formData[element.$.id]}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </>
    );
};

export default XmlToComponents;
