function countNum(arr) {
    let max = 0;
    let value;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
                if (max < count) {
                    max = count;
                    value = arr[i];
                }
            }
        }
    }
    console.log(`value: ${value}, count: ${max}`);
}
let mang = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]
countNum(mang);
