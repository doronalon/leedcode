const isValid = (s: string): boolean => {
        // if (s.length % 2 !== 0) return false;
        //
        // const stack: string[] = [];
        // const map = new Map([
        //     ['(', ')'],
        //     ['[', ']'],
        //     ['{', '}']
        // ]);
        //
        // for (let i = 0 ; i < s.length ; i += 1) {
        //     if (map.has(s[i])) {
        //         stack.push(map.get(s[i]));
        //     } else if (s[i] !== stack.pop()) {
        //         return false;
        //     }
        // }
        // return stack.length === 0;

        let stuck: string [] = []
        let map = {
            ")": "(",
            "}": "{",
            "]": "[",
        }

        for (let i: number = 0; i < s.length; i++) {
            if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
                stuck.push(s[i])
            } else if (map[s[i]] === stuck[stuck.length - 1]) {
                stuck.pop()
            } else {
                return false
            }
        }
        return stuck.length === 0
    }
;

console.info(isValid('([(())]){{'))