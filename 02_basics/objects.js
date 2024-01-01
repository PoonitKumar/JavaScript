const User = {
    name: 'Poonit',
    education: {
        School: 'SSK',
        College: 'IPU'
    }
}

// console.log(User.education.College);

const myArr = [1, 2]
const anotherArr = [3, 4]
const finalArr = [...myArr, ...anotherArr]
// console.log(finalArr);

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'a', 4: 'b' }

// const obj3=Object.assign({},obj1,obj2)
// const obj3=Object.assign(obj1,obj2)

// console.log(obj3)
// console.log(obj1);

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

const students =
{
    name: 1,
    age: 6
}


// console.log(users[0].age);
// console.log(Object.keys(students));
// console.log(Object.values(students));
// console.log(Object.entries(students));

// console.log(students.hasOwnProperty('dob'));

const {name}=students
console.log(name);



