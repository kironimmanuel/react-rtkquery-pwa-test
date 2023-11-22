import { parseString } from 'xml2js';

export const XMLParser = (xmlString: string) => {
    let parsedData = {};
    parseString(xmlString, { explicitArray: false }, (err, result) => {
        if (err) {
            console.error('Error parsing XML:', err);
        } else {
            parsedData = result;
        }
    });
    return parsedData;
};
