// Changes the number to (DD) NNNNN - NNNN number format
export default function transformNumber(number) {
    if (number.length === 11) {
        const formatedNumber = '(' + number.substring(0, 2) + ') '
            + number.substring(2, 7)
            + '-' + number.substring(7);
        return formatedNumber;
    } else {
        return number;
    }
}