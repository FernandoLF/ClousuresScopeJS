function greeting() {
    let userName = 'Fernando';

    function displayUserName() {
        return `Hola ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());