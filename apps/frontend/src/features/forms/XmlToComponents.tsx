import { XMLParser } from '../../utils/XMLParser';

const XmlToComponents = ({ xmlArray }: { xmlArray: string[] }) => {
    return (
        <div>
            {xmlArray.map((xmlString, index) => {
                const parsedData: any = XMLParser(`<root>${xmlString}</root>`);
                const keys = Object.keys(parsedData.root);

                return (
                    <form key={index}>
                        <h2>Form</h2>
                        <div>
                            {keys.map(key => {
                                console.log(parsedData.root[key]);
                                return (
                                    <div key={key}>
                                        <label>{key}</label>
                                        <input type='text' value={parsedData.root[key]} readOnly />
                                    </div>
                                );
                            })}
                        </div>
                    </form>
                );
            })}
        </div>
    );
};

export default XmlToComponents;
