const myName = 'valentina';
const states = 50;
// adds two numbers
const sum = 5+4;

// says hello
function sayHello(){

    alert('Hello world!');
}
sayHello();

function checkAge(name, age) {
    if(age< 21){
        alert("Sorry" +  name + ", you aren't old enough to view this page!");
    }
}
const friends = [ 
    { 
    name: 'Charles', 
    age: 21,
   },
    { 
    name: 'Abby', 
    age: 27,
   },
    { 
    name: 'James', 
    age: 18,
   },
    { 
    name: 'John', 
    age: 17,
   },
]
for(let i = 0 ; i< friends.length; i++){
    checkAge(friends[i].name, friends[i].age)
}

const favVegs = ['carrot', 'brocoli', 'rucula' ]

for ( veg of favVegs) {
    console.log(veg);
}

const pet = {
    name: 'perla',
    breed: 'labrador'
}
console.log(pet.name, pet.breed);

const moreFriends = [ 
    { 
    name: 'Charl', 
    age: 31,
   },
    { 
    name: 'Anny', 
    age: 20,
   },
    { 
    name: 'James', 
    age: 18,
   },
    { 
    name: 'John', 
    age: 17,
   },
    { 
    name: 'Joel', 
    age: 27,
   },
]

for(let i = 0 ; i< moreFriends.length; i++){
    checkAge(moreFriends[i].name, moreFriends[i].age)
}

function getLength(word) {
    return word.length
}

const secret = getLength('Hello World')

if(secret %2 === 0){
    console.log('The world is nice and evern');
} else{
    console.log('The world is an odd place!');
}
