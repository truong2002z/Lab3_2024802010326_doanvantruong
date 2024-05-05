export default url => {
    const queryString = url.includes('?') ? url.split('?')[1] : '';
    const params = {};

    if (queryString) {
        const paramStringArray = queryString.split('&');
        paramStringArray.forEach(paramString => {
            const [key, value] = paramString.split('=');
            params[key] = value || ''; // Handle cases where query parameters may not have values
        });
    }

    return params;
};
