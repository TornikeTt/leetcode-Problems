var groupThePeople = function (groupSizes) {
    let arr = [];

    for (let i = 0; i < groupSizes.length; i++) {
        let searchValue = groupSizes[i];
        let currArr = [];

        if (searchValue !== undefined) {
            let count = 0;

            for (let j = i; j < groupSizes.length; j++) {
                if (count < searchValue) {
                    if (searchValue === groupSizes[j]) {
                        let index = groupSizes.indexOf(groupSizes[j]);
                        currArr.push(index);
                        delete groupSizes[index];
                        count++;
                    }
                } else {
                    continue;
                }
            }

            arr.push([...currArr]);
        }
    }

    return arr;
};

console.log(groupThePeople([2, 1, 3, 3, 3, 2]));
console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
console.log(groupThePeople([3, 4, 3, 3, 4, 4, 3, 4, 3, 3]));
