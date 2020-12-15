const contentType = 'application/json';
const basePath = 'https://apphcfrontpru.hcsd.co/api';
const homecenterSecret = '2EF1006E1B32CD315C8718AD8EB66781C27826982969107D08F15625B40209C7';
const homecenterKey = 'ae76c36baec54e9eb36be4689b8d300d';

const getHomecenterRequestHeders = () => {
    return {
        Accept: contentType,
        'Content-Type': contentType,
        'Secret': homecenterSecret,
        'Ocp-Apim-Subscription-Key': homecenterKey
    };
}

export const postToApi = async (url, body) => {
    try {
        const response = await fetch(`${basePath}/${url}`, {
            method: 'POST',
            headers: getHomecenterRequestHeders(),
            body: JSON.stringify(body)
        });
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error('Error on post Request', error);
    }
}