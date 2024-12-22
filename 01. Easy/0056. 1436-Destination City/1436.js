var destCity = function (paths) {
    for (let i = 0; i < paths.length; i++) {
        let holdValue = paths[i][1];
        let good = true;

        for (let j = 0; j < paths.length; j++) {
            if (paths[j][0] === holdValue) {
                good = false;
                break;
            }
        }

        if (good) {
            return holdValue;
        }
    }
};

console.log(
    destCity([
        ["London", "New York"],
        ["New York", "Lima"],
        ["Lima", "Sao Paulo"],
    ])
);

console.log(
    destCity([
        ["B", "C"],
        ["D", "B"],
        ["C", "A"],
    ])
);

console.log(destCity([["A", "Z"]]));
