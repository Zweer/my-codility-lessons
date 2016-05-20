'use strict';

function binaryGap(N) {
    const binary = N.toString(2);

    let maxGap = 0;
    let gap = 0;

    for (let i = 0, tot = binary.length; i < tot; ++i) {
        let bit = binary[i];

        if (bit === '1') {
            maxGap = gap > maxGap ? gap : maxGap;
            gap = 0;
        } else {
            gap++;
        }
    }

    return maxGap;
}

console.log(binaryGap(1041));