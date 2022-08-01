function solution(list) {
    const result = [];
    for (let i = 0; i < list.length; i++) {
        while (list[i + 1] - list[i] == 1) {
            result.push(list[i]);

            // list.slice(list[i]);
        } /* else {
            small.push(list[i]);
            console.log(small)
            if (small.length > 3) {
                
            }
        } */
    }

    return result;
}

// function range(start, edge, step) {
//     // If only 1 number passed make it the edge and 0 the start
//     if (arguments.length === 1) {
//       edge = start;
//       start = 0;
//     }

//     // Validate edge/start
//     edge = edge || 0;
//     step = step || 1;

//     // Create array of numbers, stopping before the edge
//     let arr = [];
//     for (arr; (edge - start) * step > 0; start += step) {
//       arr.push(start);
//     }
//     return arr;
//   }

// console.log(solution())
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

/**
 * A format for expressing an ordered list of integers is to use a comma separated list of either individual integers
 * or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
 * The range includes all integers in the interval including both endpoints. It is not considered a range unless it
 * spans at least 3 numbers. For example ("12, 13, 15-17")
 * Complete the solution so that it takes a list of integers in increasing order and returns a correctly
 * formatted string in the range format.
 */
