var defangIPaddr = function (address) {
    let newAddress = "";

    for (let i = 0; i < address.length; i++) {
        if (address[i] == ".") {
            newAddress += "[.]";
            console.log(i);
        } else {
            newAddress += address[i];
        }
    }

    return newAddress;
};

console.log(defangIPaddr("1.1.1.1"));
