export {}
// //implicit types
// let myName = 'Jerome'
// // myName = 76   ERR 
// let myNum = 42
// let myBool = true

// // let myVar; //defaults to any type because it hasn't been assigned yet 
// //Explicit types
// let myVar: string;
// let anyVar: any;

// let exampleName: string = 'Not Jerome'

// //ARRAYS
// let nameList: string[];
// nameList = ['Brennan', 'Evan', 'Jonathan']
// let numList: number[]; 
// numList = [1,2,3,4,5]

// //Function
// //Parameter Types
// function greeting(name: string){
//     console.log('Hello ' + name)
// }
// greeting('jerome')

// //return type
// function getFavoriteNumber():number {
//     return 742
// }
// let favNum = getFavoriteNumber()

// //Object Types
// let myObject: { firstName: string, lastName: string}
// myObject = {firstName: 'Jerome', lastName: 'flaherty'}

// let pet: { animal: string, breed?: string}

// let cookie: {flour: boolean, chocoChip?: boolean}


// //Union types
// let unionEx: string | number;
// unionEx=4
// unionEx='testing the union'


// function welcomePeople(people: string | string[]){
//     if(Array.isArray(people)){
//         console.log('Hello', people.join(' and '))
//     }else{
//         console.log('Welcome', people)
//     }
// }

// welcomePeople('carlo')
// welcomePeople(['Hunter', 'Sophie', 'Cameron'])

// //Type Alias -> cannot change it once you make it
// type peopleWelcome = string | string[]

// function wePeople(people: peopleWelcome){
//     if(Array.isArray(people)){
//         console.log('Hello', people.join(' and '))
//     }else{
//         console.log('Welcome', people)
//     }
// }

// type myAnmal = {
//     species: string,
//     age: number,
//     breed:string,
//     cool?: boolean
// }

// let myPet: myAnmal ={species:'dog', age: 4, breed: 'hound'}

// //interfaces 
//     //similar to type
// interface Animal {
//     name: string,

// }
// interface Bear extends Animal{
//     honey: boolean
// }
// interface Animal {
//     age:number
// }

// let polar: Bear = { name: 'Polar Bear', honey: false, age: 4}