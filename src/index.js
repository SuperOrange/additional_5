module.exports = function check(str, bracketsConfig) {
    const stack = [];

    for (let chr of str) {
        if (stack.length === 0) {
            stack.push(chr);

            continue;
        }

        for (let brackets of bracketsConfig) {
            if (brackets.includes(chr)) {
                if (brackets[0] === brackets[1]) {
                    const last = stack.pop();

                    if (chr !== last) {
                        stack.push(last);
                        stack.push(chr);
                    }
                } else if (chr === brackets[0]) {
                    // open bracket
                    stack.push(chr);
                } else if (chr === brackets[1]) {
                    // close bracket
                    const last = stack.pop();

                    if (last !== brackets[0]) {
                        return false;
                    }
                }
            }
        }
    }

    return stack.length === 0;
};
