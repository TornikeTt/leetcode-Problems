var uniqueMorseRepresentations = function (words) {
    let alphabet = {
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--..",
    };
    
    let set = new Set();

    for ( let i = 0; i < words.length; i++ ) { 
        let morseWords = "";
        for ( let j = 0; j < words[i].length; j++ ) { 
            morseWords += alphabet[words[i][j]];
        }
        set.add(morseWords)
        console.log("=============>")
    }
    return set.size
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
