var countMatches = function (items, ruleKey, ruleValue) { 
    let count = 0;
    let allKeys =['type','color','name'];
    let findIndex = allKeys.indexOf(ruleKey);
    
    for ( let i = 0; i < items.length;  i++ )  { 
        if( items[i][findIndex] === ruleValue ) { 
            count++
        }
    }

    return count
};

countMatches(
    [
        ["phone", "blue", "pixel"],
        ["computer", "silver", "lenovo"],
        ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
);
