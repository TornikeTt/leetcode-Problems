const countConsistentStrings = function(allowed, words) {
    let regex = new RegExp(`[^${allowed}]`, 'g');
    let count = 0;

    for (let word of words) {
        if (!word.match(regex)) {
            count++;
        }
    }

    return count;
};


countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"])
