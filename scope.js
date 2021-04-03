const fruits = ['apple', 'tuna', 'strawberry']
// let favFruit
printFruit()

function printFruit() {
    console.log(fruits[0]);
    let favFruit = fruits[2]
    function printFavFruit() {
        console.log(favFruit);
        let leastFav = 'banana'
    }
    printFavFruit()
}

let alertCall = () => {
    console.log('hello!');
}

alertCall()