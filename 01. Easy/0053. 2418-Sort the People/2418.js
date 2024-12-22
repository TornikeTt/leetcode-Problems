var sortPeople = function (names, heights) {
    for (let i = 1; i < heights.length; i++) {
        let heightVal = heights[i];
        let namesVal = names[i];

        let j = i - 1;

        while (j >= 0 && heights[j] < heightVal) {
            heights[j + 1] = heights[j];
            names[j + 1] = names[j];

            j = j - 1;
        }

        heights[j + 1] = heightVal;
        names[j + 1] = namesVal;
    }

    return names;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
