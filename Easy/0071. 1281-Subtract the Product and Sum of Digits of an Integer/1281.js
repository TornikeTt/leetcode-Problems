var subtractProductAndSum = function (n) {
    let devide = n.toString();
    let product = 1;
    let sum = 0;

    for (let i = 0; i < devide.length; i++) {
        product *= +devide[i];
        sum += +devide[i];
    }

    return product - sum;
};

subtractProductAndSum(234);
