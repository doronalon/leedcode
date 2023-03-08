/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = (s: string) => {
    let values: Map<string, number> = new Map<string, number>();
    values.set("M", 1000);
    values.set("D", 500);
    values.set("C", 100);
    values.set("L", 50);
    values.set("X", 10);
    values.set("V", 5);
    values.set("I", 1);

    let sum: number = 0;
    let i: number = 0;
    while (i < s.length) {
        let currentSymbol = s.substring(i, i + 1);
        let currentValue = values.get(currentSymbol);
        let nextValue = 0;
        if (i + 1 < s.length) {
            let nextSymbol = s.substring(i + 1, i + 2);
            nextValue = values.get(nextSymbol);
        }
        if (currentValue < nextValue) {
            sum += (nextValue - currentValue);
            i += 2;
        } else {
            sum += currentValue;
            i += 1;
        }
    }
    return sum;

};