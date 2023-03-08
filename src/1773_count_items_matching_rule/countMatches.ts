function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    return items.map(([type, color, name]) => ({ type, color, name }))
        .filter((obj) => obj[ruleKey] === ruleValue).length;
};