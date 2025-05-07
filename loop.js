const friends = ['ramim','salam', 'nafi', 'kafi', 'ulbul' ]
const rollNumbers = [12, 34, 54, 75, 56, 58]
console.log(rollNumbers);

for (const nums of rollNumbers) {
    console.log(rollNumbers);
    
    
    
}

let num = 1;
while (num <= 10){
    console.log(num);
    num++;
    
}

let num = 1;
while(num <= 10) {
    console.log(num);
    if (num % 2 === 0){
        console.log("even number", num);
        
    }
    num++;
}

let sum = 0;
for (let i = 15; i<=35; i++) {
    sum = sum + i;
    console.log(i);
    
    i++;
}
console.log("sum of numbers from 15 to 35 is", sum);

const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toUpperCase() === book.toUpperCase()){
    console.log('i will be passed');
    
}
else{
    console.log('i willnot passed in my entire carrier');
    
}

console.log(subject);
console.log(subject.toLowerCase());


const address = 'netrokna';
const part = address.slice(2,6);
console.log(part);

const sentence = ['my', 'name', 'is', 'ramim', 'khan', 'i', 'want',]

console.log(sentence.join('.'));

const firstName = 'Ramim';
const lastName = 'khan';
const fullName = firstName +' '+ lastName;
console.log(fullName);
const gang = "rakib, raihan, ramim, nafi";
console.log(gang.includes('ramim'));

const sentence = "i want to be a software enginer in future"
let reverse = '';
for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
    
}
console.log(reverse);

const person = {
    name : "Ramim khan",
    age : 23,
    nationality : "Bangladeshi",
    profession : "student",
    homeTown : "netrokona",
    "mother tunge" : "bangla"
    
}
person["mother tunge"] = "English"
person.age = 25;
console.log(person.age);
console.log(person["mother tunge"]);
console.log(person["name"]);
console.log(person);

const laptop = {
    brand:'lenovo',
    display : 14.5,
    price : 75000,
    hdd : '1tb',
    processor : 'intel'
}
const keys = Object.keys(laptop)
console.log(keys);

const laptop = {
    brand:'lenovo',
    display : 14.5,
    price : 75000,
    hdd : '1tb',
    processor : 'intel'
}
const values = Object.values(laptop)
console.log(values);
const keys = Object.keys(laptop)
console.log(keys);


const friends = [1, 2, 3, 4]
const reversed = friends.reverse();
console.log(reversed);


for(const friend of friends)
    console.log(friend);
    
for(i = 0; i < friends.length; i++){
    console.log(i);
    console.log(friends[i]);
    
    
}

const persons = ['rakib', 'sakib', 'nakib', 'akib'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

const numbers = [1, 2, 4, 3, 9, 5, 10, 8, 6];
const numbers_asc = numbers.sort(function(a, b){return a - b})

console.log(numbers_asc);


const numbers_dsc = numbers.sort(function(b, a){return b - a})

console.log(numbers_dsc);






