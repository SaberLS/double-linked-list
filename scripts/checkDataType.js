export default function checkDataType(data, desiredType) {
    if (data instanceof desiredType) {
        return true;
    } else {
        throw new TypeError(`${data} doesn't match desired data type: ${desiredType}`);
    }
}