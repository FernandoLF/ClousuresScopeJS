function sumWithClosure(firstNum) {
    let val1 = firstNum;
    return function(secondNum) {
        let val2 = secondNum;
        if (!val2) {
            return val1;
        } else {
            return val1 + val2;
        }
    }
}