function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox> $${saveCoins}`);
}

moneyBox(23);
moneyBox(2);

//Ahora usando Clousure
function myMoneyBox() {
    let saveCoins2 = 0;

    function countCoins(coins) {
        saveCoins2 += coins;
        console.log(`MoneyBox: $${saveCoins2}`);
    }
    return countCoins;
}

const myMoneyBox2 = myMoneyBox();
myMoneyBox2(5);
myMoneyBox2(2);
myMoneyBox2(7);

const moneyBoxKath = myMoneyBox();
moneyBoxKath(8);
moneyBoxKath(2);
moneyBoxKath(3);


//Ejemplo con mascotas
function createPetList() {
    // Tu código aquí 👈
    const petList = [];
    return function(newPet) {
        if (newPet) {
            petList.push(newPet);
        }
        return petList;
    };
}
const myPetList = createPetList();

console.log(myPetList("michi"));
console.log(myPetList("firulais"));
console.log(myPetList());

//Ejemplo mascotas optimizado
function createPetList() {
    const pets = []
    return (info) => info ? pets.push(info) : pets
}