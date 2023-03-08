/**
 * @param {number[][]} accounts
 * @return {number}
 */
let maximumWealth = (accounts: number[][]): number => {
    let maxWealthSoFar: number = 0
    for (let i: number = 0; i < accounts.length; i++) {
        let currCustomerWealth: number = 0
        for (let j: number = 0; j < accounts[i].length; j++) {
            currCustomerWealth += accounts[i][j]
        }
        maxWealthSoFar = Math.max(currCustomerWealth,maxWealthSoFar )
    }
    return maxWealthSoFar
};

console.info(maximumWealth([[1,5],[7,3],[3,5]]))