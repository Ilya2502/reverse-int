module.exports = function reverse (n) {
    n = Math.abs(n);
    let nStr = n.toString();
    let result = '';
    for (let i = 0; i < nStr.length; i++) {
        result = `${result}${nStr[nStr.length - 1 - i]}`;
    }
    return Number(result);
}
